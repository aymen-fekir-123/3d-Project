import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"



const Contact = () => {
  const formRef = useRef()
  const [form, setfrom] = useState({
    name:'',
    email:'', 
    message:''
  })

  const [loading, setLoading] = useState(true)

  const handellchange = (e) => {
    const [name, value] = e.target
    setfrom({...form , [name] :  value})
  }
  const handellsubmit = (e) => {
    e.preventDefault();
    setLoading(false)
    emailjs.send("seviceID", "templateId", 
    {form_name: from.name,to_name: "aaaaa", form_email:from.email ,
    to_email: "aaaaaaas@dddddd",message: from.message}, "public key")
    .then(()=>{
      setLoading(true);
      alert("thank you for cantact me and your welcom any time ")
      setfrom(
        {name:'',
        email:'', 
        message:''})
    }, (error)=> {
      setLoading(true);
      alert("sething wrong heppen!!!!!!!!")
      console.log(error)
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden "> 
      <motion.div variants={slideIn('letf', 'tween' , 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
         <p className={styles.sectionSubText}>Get in Touch</p>
         <h2 className={styles.sectionHeadText}>Contact.</h2>

         <form ref={formRef} onSubmit={handellsubmit} className="mt-12 flex flex-col gap-8"> 
         <label className="flex flex-col ">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input type='text' name="name" value={form.name} placeholder="what is your name"  onChange={handellchange} className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white outlined-none rounded-lg border-none font-meduim"/>
         </label>
         <label className="flex flex-col ">
          <span className="text-white font-medium mb-4">Your email</span>
          <input type='email' name="email" value={form.email} placeholder="what is your email" onChange={handellchange} className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white outlined-none rounded-lg border-none font-meduim"/>
         </label>
         <label className="flex flex-col ">
          <span className="text-white font-medium mb-4">Your message</span>
          <textarea row="7" name="message" value={form.message} placeholder="what do you want to say" onChange={handellchange} className="bg-tertiary py-4 px-6 palceholder:text-secondary text-white outlined-none rounded-lg border-none font-meduim"/>
         </label>
         <button type="submit" className="bg-tertairy w-fit shadow-md shadow-primary rounded-xl py-3 px-6 outline-none text-white">
            {loading ? "Send" : "Sending"}
         </button>

         </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween' , 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
   
    </div>
  )
}

export default SectionWrapper(Contact, "contact")