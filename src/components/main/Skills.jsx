import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiPhotopea,
  SiRedux,
  SiTypescript,
  SiVite,
  SiReactquery,
  SiAxios,
  SiEslint,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";

function Skills() {
  return (
    <>
      <div className="relative overflow-y-hidden">
        <img
          className="absolute top-[-70px] h-[45px] right-[40px]"
          src="/img/flaticons/falling-star.png"
          alt=""
        />
        <p className="text-center text-[2.5em] text-white">Skills</p>
      </div>
      <div className="font-josefin overflow-y-hidden text-white w-[95%] bg-black border-[3px] border-white m-[40px] p-[40px] rounded-3xl items-center mx-[auto]">
        <div className="grid grid-cols-3 bp500:grid-cols-5 bp900:grid-cols-10 gap-[20px]">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaHtml5 className="text-[3em] bp900:text-[4em] text-[#DD4B25] hover:scale-125 transition-all duration-200" />
            <p className="text-center">HTML5</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaCss3Alt className="text-[3em] bp900:text-[4em] text-[#254BDD] hover:scale-125 transition-all duration-200" />
            <p className="text-center">CSS3</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaJsSquare className="text-[3em] bp900:text-[4em] text-[#EFD81D] hover:scale-125 transition-all duration-200" />
            <p className="text-center">JavaScript</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiTypescript className="text-[3em] bp900:text-[4em] text-[#354DB8] hover:scale-125 transition-all duration-200" />
            <p className="text-center">TypeScript</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiRedux className="text-[3em] bp900:text-[4em] text-[#7248B6] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Redux</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <RiTailwindCssFill className="text-[3em] bp900:text-[4em] text-[#00B3D1] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Tailwind</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaReact className="text-[3em] bp900:text-[4em] text-[#00D5F7] hover:scale-125 transition-all duration-200" />
            <p className="text-center">React</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaReact className="text-[3em] bp900:text-[4em] text-white hover:scale-125 transition-all duration-200" />
            <p className="text-center">React Native</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <RiNextjsFill className="text-[3em] bp900:text-[4em] text-white hover:scale-125 transition-all duration-200" />
            <p className="text-center">Next.js</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="560"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiVite className="text-[3em] bp900:text-[4em] text-[#646CFF] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Vite</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="580"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiReactquery className="text-[3em] bp900:text-[4em] text-[#FF4154] hover:scale-125 transition-all duration-200" />
            <p className="text-center">React Query</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiAxios className="text-[3em] bp900:text-[4em] text-[#5A29E4] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Axios</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="660"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiEslint className="text-[3em] bp900:text-[4em] text-[#4B32C3] hover:scale-125 transition-all duration-200" />
            <p className="text-center">ESLint</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="710"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiFigma className="text-[3em] bp900:text-[4em] text-[#F24E1E] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Figma</p>
          </div>

       
          <div
            data-aos="fade-up"
            data-aos-delay="740"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiVercel className="text-[3em] bp900:text-[4em] text-white hover:scale-125 transition-all duration-200" />
            <p className="text-center">Vercel</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="750"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiNetlify className="text-[3em] bp900:text-[4em] text-[#00C7B7] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Netlify</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaGitAlt className="text-[3em] bp900:text-[4em] text-[#E84D31] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Git</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <GrGithub className="text-[3em] bp900:text-[4em] text-white hover:scale-125 transition-all duration-200" />
            <p className="text-center">Github</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <SiPhotopea className="text-[3em] bp900:text-[4em] text-[#179F92] hover:scale-125 transition-all duration-200" />
            <p className="text-center">Photopea</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
