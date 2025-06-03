import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

function About() {
    console.log(false + "5")
    return (
        <>
            <div className='relative overflow-y-hidden'>
                <img className='absolute top-[-70px] h-[45px] right-[40px]' src="/img/flaticons/falling-star.png" alt="" />
                <p className='text-center text-[2.5em] text-white'>About me</p>
            </div>
            <div className='font-josefin overflow-y-hidden text-white w-[95%] bg-black border-[3px] border-white m-[40px] md:p-[40px] rounded-3xl   items-center mx-[auto]'>
                <p className='text-[1.3em] p-[10px]'>Hi, I’m <span className='text-purple-500'>Ayan Məmmədova</span> I’m a passionate front-end developer with a knack for crafting clean, responsive, and user-friendly websites.
                    I’m currently in my third year pursuing a degree in Information Technology at UNEC,
                    where I’m expanding my knowledge of modern development practices and innovative web technologies.

                    I enjoy building responsive, accessible websites and applications that provide seamless user experiences.

                </p>
                <p className='text-[1.4em] pb-[20px] text-purple-500 px-[10px]'>Here’s a quick look at my skillset:</p>
                <div className='p-[20px]'>
                    {/* <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Core  Technologies  </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>HTML</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>CSS</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>JavaScript</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>TypeScript</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>JS Libraries & Frameworks </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>React.js</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>React Router</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Context API</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Visual    Design</span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>CSS3</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Tailwind CSS</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Bootstrap</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>API   Integration </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Fetch API</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>RESTful APIs</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>CRUD Operations</p>
                    </div>
                    
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Deployment </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Vercel</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Netlify</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>GitHub Actions</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Version   Control </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Git</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>GitHub</p>
                    </div>
                     */}
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3, 
                            },
                        }}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {/* Core Technologies */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>HTML</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>CSS</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>JavaScript</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>TypeScript</div>
                        </SwiperSlide>

                        {/* JS Libraries & Frameworks */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>React.js</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>React Router</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Context API</div>
                        </SwiperSlide>

                        {/* Visual Design */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>CSS3</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Tailwind CSS</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Bootstrap</div>
                        </SwiperSlide>

                        {/* API Integration */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Fetch API</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>RESTful APIs</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>CRUD Operations</div>
                        </SwiperSlide>

                        {/* Deployment */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Vercel</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Netlify</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>GitHub Actions</div>
                        </SwiperSlide>

                        {/* Version Control */}
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>Git</div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[300px] rounded-lg py-[10px] bg-[#C084FC] text-black'>
                            <div className=''>GitHub</div>
                        </SwiperSlide>
                    </Swiper>



                </div>
            </div>
        </>
    )
}

export default About
