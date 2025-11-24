
import { GiGraduateCap, GiKnockedOutStars } from 'react-icons/gi';
import { LiaUniversitySolid } from 'react-icons/lia';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


function Education() {
    return (
        <>
            <div className='relative overflow-y-hidden'>
                <img  className=' absolute top-[-70px] h-[45px] right-[40px]' src="/img/flaticons/falling-star.png" alt="" />
                <p className='text-center text-[2.5em] text-white'>Education</p>
            </div>
            <div className='font-josefin  overflow-y-hidden text-white w-[95%] bg-black border-[3px] border-white m-[40px] p-[40px] rounded-3xl   items-center mx-[auto]'>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(0, 25, 120)', width: '35px', height: '35px', margin: 'auto -16px', color: '#fff' }}
                        icon={<GiKnockedOutStars />}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(20, 95, 190)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(20, 95, 190)' }}
                        date="2022 - present"
                        iconStyle={{ background: 'rgb(20, 95, 190)', color: '#fff' }}
                        icon={<LiaUniversitySolid />}
                    >
                        <h3 className="vertical-timeline-element-title">UNEC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(20, 95, 190)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(20, 95, 190)' }}
                        date=" May 2024 - Nov 2024"
                        iconStyle={{ background: 'rgb(20, 95, 190)', color: '#fff' }}
                        icon={<GiGraduateCap />}
                    >
                        <h3 className="vertical-timeline-element-title">Div Academy</h3>
                        <h4 className="vertical-timeline-element-subtitle">Front-end Development</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(0, 25, 120)', width: '35px', height: '35px', margin: 'auto -16px', color: '#fff' }}
                        icon={<GiKnockedOutStars />}
                    />
                </VerticalTimeline>

            </div>
        </>
    )
}

export default Education
