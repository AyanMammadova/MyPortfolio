import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";

function Profile() {
  return (
    <div className="bp900:flex overflow-y-hidden font-josefin  text-white w-[95%] bg-black  border-[3px] border-white m-[40px] p-[10px] md:p-[40px] rounded-3xl   items-center mx-[auto]">
      <div className="z-10 text-center mx-auto">
        <p className="text-[1.5em] md:text-[2em] ">
          Hi, I`m <span className="text-purple-400">Ayan</span> Mammadova
        </p>
        <p className="text-[1.2em] md:text-[1.7em] text-purple-400">
          Front-end Developer
        </p>
        <p className="text-[1em] py-[20px] text-center">
          As a front-end developer and third-year Information Technology student
          at UNEC, my goal is to create stunning, functional web applications.
          Let’s collaborate!
        </p>
        <div className="flex py-[10px]  justify-center w-[100%] gap-[10px] text-[1.2em]">
          <Link
            to={
              "https://www.linkedin.com/in/ayan-m%C9%99mm%C9%99dova-90193527b/"
            }
            target="blank"
            className="border-[1px] group  bg-black hover:scale-125 transition-all duration-200 rounded-full flex justify-center items-center p-[5px]"
          >
            <FaLinkedin className="group-hover:scale-110 transition-all duration-200" />
          </Link>
          <Link
            to={"https://github.com/AyanMammadova"}
            target="blank"
            className="border-[1px] bg-black group   hover:scale-125 transition-all duration-200 rounded-full flex justify-center items-center px-[4px] p-[3px]"
          >
            <FaGithub className="group-hover:scale-110 transition-all duration-200" />
          </Link>
          <Link
            to={"mailto:ayan.mammadova900@gmail.com"}
            target="blank"
            className="border-[1px] group  bg-black hover:scale-125 transition-all duration-200  rounded-full flex justify-center items-center px-[4px] p-[3px]"
          >
            <BiLogoGmail className="group-hover:scale-110 transition-all duration-200" />
          </Link>
        </div>
        <div className="mt-[10px]">
          <button className="relative overflow-hidden px-6 py-2 rounded-md border border-white text-white group">
            <a
              href="public/Ayan_Mammadova_CV.pdf"
              download="Ayan_Mammadova_CV.pdf"
              className="relative  z-10 transition-colors duration-300 group-hover:text-black"
            >
              Download My CV
            </a>
            <span className="absolute left-0 bottom-0 h-0 w-full bg-white group-hover:h-full transition-all duration-300 z-0"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
