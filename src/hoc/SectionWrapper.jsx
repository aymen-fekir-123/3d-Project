import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'


const SectionWrapper= (Componet, idName) => {
  return (
    function hco () {
        return(

            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true, amount:0.25 }}
                className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
            >

                <span className='hash-span' id={idName}>&nbsp; </span>
                <Componet/>
            </motion.section>
        )
    }
  )
}

export default SectionWrapper