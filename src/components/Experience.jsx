import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import {SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion';

const ExprienceCard = ({experience})=>(
  <VerticalTimelineElement
  contentStyle={{background : '#1d1836', color : "#fff"}}
  contentArrowStyle={{borderRight : '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background : experience.iconBg}}
  icon= {
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name}/>
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary font-semibold text-[16px]' style={{margin:'0px'}}>{experience.company_name}</p>
    </div>

    <ul className='list-disc mt-5 ml-5 spac-y-2'>
      {experience.points.map((point, index)=>(
        <li key={`experience-point-${index}`} className='tracking-wider text-white-100 text-[14px]'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My project</p>
        <h2 className={styles.sectionHeadText}>Project</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index)=> (
            <ExprienceCard key={index} experience={experience}/>

          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper(Experience, "work")