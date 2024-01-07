import { BallCanvas } from './canvas'
import { technologies } from '../constants' 
import { SectionWrapper } from '../hoc'




const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologie) => {
        return(
          <div className='w-28 h-28' key={technologie.name}>
            <BallCanvas icon={technologie.icon}/>
          </div>
        )
      })}
    </div>

    
  )
}

export default SectionWrapper(Tech, "")