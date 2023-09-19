import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from'../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full" >
        <motion.div
        variants={fadeIn ("right", "spring", 0,5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max:45,
              scale:1,
              speed:450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 objec-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
     </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>WHO I AM</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px] flex'>
      Hello! I'm Lars, a highly motivated web developer with a strong 
      foundation in both front-end and back-end technologies. Passionate about coding, 
      I continuously seek out new challenges and learning opportunities
      to further enhance my skills. 
      <br></br><br></br>
      With a keen eye for design and user experience, 
      I strive to create responsive, visually appealing 
      applications that meet the latest web standards. 
      My journey in web development started with my fascination 
      for solving problems and crafting solutions that not only
       look good but also make lives easier. 

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 justify-evenly items-center'>
      {services.map((service, index) => (
        <ServiceCard key = {service.title} index =
        {index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (About, "about")