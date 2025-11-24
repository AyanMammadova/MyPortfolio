import { BiHomeHeart } from "react-icons/bi";
import { FaCode, FaHandHoldingHeart } from "react-icons/fa";
import { GiKnockedOutStars } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <>
      <div className="relative overflow-y-hidden">
        <img
          className="absolute top-[-70px] h-[45px] right-[40px]"
          src="/img/flaticons/falling-star.png"
          alt=""
        />
        <p className="text-center text-[2.5em] text-white">Experience</p>
      </div>
      <div className="font-josefin  overflow-y-hidden  text-white w-[95%] bg-black border-[3px] border-white m-[40px] p-[40px] rounded-3xl   items-center mx-[auto]">
        <VerticalTimeline>
          <VerticalTimelineElement
            iconStyle={{
              background: "rgb(0, 25, 120)",
              width: "35px",
              height: "35px",
              margin: "auto -17px",
              color: "#fff",
            }}
            icon={<GiKnockedOutStars />}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(20, 95, 190)" }}
            date="Jun 2025 - Current"
            iconStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">Millisoft</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Front-end Developer &
              React Native Developer
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(20, 95, 190)" }}
            date="Feb 2025 - Jun 2025"
            iconStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">Millisoft</h3>
            <h4 className="vertical-timeline-element-subtitle">
              React Developer Intern
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(20, 95, 190)" }}
            date="Nov 2023 - Yan 2024"
            iconStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            icon={<BiHomeHeart />}
          >
            <h3 className="vertical-timeline-element-title">DOST center</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Youth DOST volunteer
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(20, 95, 190)" }}
            date="Jul 2023 - Sep 2024"
            iconStyle={{ background: "rgb(20, 95, 190)", color: "#fff" }}
            icon={<FaHandHoldingHeart />}
          >
            <h3 className="vertical-timeline-element-title">ASAN service</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Master 1 volunteer
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: "rgb(0, 25, 120)",
              width: "35px",
              height: "35px",
              margin: "auto -17px",
              color: "#fff",
            }}
            icon={<GiKnockedOutStars />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
