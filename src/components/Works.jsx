import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjetcCard = ({index, name, description, tags, image, source_code_link}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt 
    options={{
      scale:1,
      max: 45, 
      speed:450
    }}
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='h-[230px] w-full relative'>
        <img src={image} alt={name} className='w-full h-full objetc-cover rounded-2xl'/>
        <div className='absolute flex justify-end m-3 inset-0 card-img_hover'>
          <div onClick={()=>window.open(source_code_link, "_blank")} className='black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='font-bold text-[20px]'>{name}</h3>
        <p className='text-secondary text-[14px] mt-2'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>

  </motion.div>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Project</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='flex w-full '>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl '>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((projetc, index) => (
          <ProjetcCard key={`projetc-${index}`} 
          index ={index}
          {...projetc}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, '')