import Aos from 'aos';
import  { useEffect } from 'react'
import 'aos/dist/aos.css';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import Profile from './Profile';

function Main() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className='w-[95%]'>

      </div>

      <main className='scroll-smooth' >

        <section id="home" className='pt-[140px]'>
          <Profile />
        </section>
         
        <section id='about' className='pt-[50px]'>
          <About />
        </section>
        <section id='education' className='pt-[50px]'>
          <Education />
        </section>
        <section id="skills"  className='pt-[50px]'>
          <Skills />
        </section>
        <section id="projects"  className='pt-[50px]'>
          <Projects/> 
        </section>
        <section id="experience" className='pt-[50px]'>
          <Experience />
        </section>
        <section id="contact" className='pt-[50px]'>
          <Contact />
        </section>
        
      </main>




    </>
  )
}

export default Main
