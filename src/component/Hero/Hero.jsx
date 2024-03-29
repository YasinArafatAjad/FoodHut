import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Hero.css';
import HeroImgMain from './img/hero-charc.png'
import Hero1 from './img/Hero_minImg_1.png'
import Hero2 from './img/Hero_minImg_2.png'
import Hero3 from './img/Hero_minImg_3.png'
import Hero4 from './img/Hero_minImg_4.png'
import Hero5 from './img/Hero_minImg_5.png'
import Hero6 from './img/hero_bg_overley.png'
import Hero7 from './img/Mint.png'
import Hero8 from './img/Orange.png'
import HeroCard1 from './img/heroCard.png'
import HeroCard2 from './img/heroCard2.png'
import HeroFire from './img/heroFire.png'
import HeroEyeLine from './img/heroEyeLine.png'
import { FaHeart, FaMagnifyingGlass, FaPlay } from 'react-icons/fa6';
import MobileAppBtn from '../Header/compo/MobileAppBtn';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <>
            <div id="Hero" className="Hero py-[15rem] min-h-screen">
                <div className="row relative">
                    <LazyLoadImage src={Hero6} alt='image' className='absolute right-0 top-0 -z-20'/>
                    <LazyLoadImage src={Hero7} alt='image' className='absolute right-14 top-[28rem] -z-10'/>
                    <LazyLoadImage src={Hero8} alt='image' className='absolute left-[580px] top-[200px] -z-10'/>
                    <div className="container relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-y-[18rem]">
                        <svg className='heroLine hidden lg:block absolute -top-40 left-44' xmlns="http://www.w3.org/2000/svg" width="135" height="142" viewBox="0 0 135 142" fill="none">
                        <path opacity="0.5" d="M1 1.5C54.8333 6.5 108.7 15.5 133.5 141.5" stroke="#F54748" stroke-width="2" stroke-dasharray="8 8"/>
                        </svg>
                        <svg className='hidden lg:block absolute -top-4 left-[303px]' xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.829 1.52577L7.84095 7.70867C7.53486 8.08808 6.97915 8.14752 6.59974 7.84143L0.416838 2.85341C0.0374254 2.54732 -0.0220148 1.99161 0.284075 1.61219C0.590166 1.23278 1.14588 1.17334 1.52529 1.47943L7.0212 5.91323L11.455 0.417324C11.7611 0.0379101 12.3168 -0.0215301 12.6962 0.28456C13.0756 0.59065 13.1351 1.14636 12.829 1.52577Z" fill="#F54748"/>
                        </svg>
                        <div className="col w-1/2 self-start lg:self-auto">
                            <div className="heroBadge inline-flex items-center gap-2 bg-[rgba(245,71,72,0.3)] py-2 px-4 rounded-full mb-4">
                                <FaHeart className='text-secondery bg-primary rounded-full p-1 h-6 w-6'/><span className='text-black-2 text-center font-inter text-base not-italic font-normal leading-normal'>People Trust us</span>
                            </div>
                            <div className="heroHeading mb-8">
                                <h1 className="text-black-1 font-sofia text-[58px] font-black">We're <span className=" text-primary">Serious </span>For <span className="text-primary">Food </span>& <span className="text-secondery">Delivery </span>.</h1>
                            </div>
                            <div className="heroDesc mb-8">
                                <p className="opacity-80 text-black-2 font-sofia text-2xl font-normal -tracking-[0.24px]">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                            </div>
                            <div className="heroForm mb-8">
                                <form action="/" className="border border-black-2 rounded-full px-4 inline-flex justify-center items-center gap-1 w-[70%]">
                                    <FaMagnifyingGlass size={20}/>
                                    <input type="search" name="" id="" placeholder='Search food' className='placeholder:text-black-2 placeholder:font-sofia placeholder:text-lg placeholder:font-normal placeholder:-tracking-[0.18px] placeholder:opacity-50 placeholder:ms-2 bg-transparent py-4 px-2 w-full outline-none' />                                
                                    <button type="submit" className='bg-secondery text-white p-2 rounded-full hover:bg-primary hover:scale-105 ease-linear transition-all duration-300'><FaMagnifyingGlass size={20}/></button>
                                </form>
                            </div>
                            <div className="heroBtn flex items-center gap-x-4">
                                <MobileAppBtn />
                                <Link to='/' smooth={true} spy={true} offset={50} duration={1000}>
                                    <div className="watchVideoBtn relative w-[200px] py-6 rounded-full transition-all ease-in duration-300">
                                        <div className="watchVideoIcon absolute top-1/2 left-[130px] -translate-y-1/2 w-full transition-all ease-in duration-300 z-30">
                                            <FaPlay className='watchVideoSvg px-4 h-[45px] w-[45px] rounded-full bg-white text-primary'/>
                                        </div>
                                        <span className="watchVideoTxt absolute top-1/2 -right-[17px] -translate-y-1/2 w-full text-[#686D77] font-sofia text-lg font-medium transition-all ease-in duration-300">Watch Video</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col w-1/2 flex justify-center items-center">
                            <div className="heroImage relative ">
                                <LazyLoadImage src={HeroImgMain} alt='image' />
                                <LazyLoadImage src={Hero1} alt='image' className='absolute top-[20rem] -left-[6.75rem]' />
                                <LazyLoadImage src={Hero2} alt='image' className='absolute top-[32rem] left-12' />
                                <LazyLoadImage src={Hero3} alt='image' className='absolute top-[31rem] right-12' />
                                <LazyLoadImage src={Hero4} alt='image' className='absolute top-[24rem] -right-[4.75rem]' />
                                <LazyLoadImage src={HeroCard1} alt='image' className='absolute top-[8rem] -left-[5.75rem]' />
                                <LazyLoadImage src={HeroCard2} alt='image' className='absolute top-[8rem] -right-[6.75rem]' />
                                <LazyLoadImage src={Hero5} alt='image' className='absolute -top-2 right-2 -rotate-12' />
                                <LazyLoadImage src={HeroFire} alt='image' className='absolute -top-8 right-1/2 translate-x-1/2' />
                                <LazyLoadImage src={HeroEyeLine} alt='image' className='absolute top-[7.5rem] left-40' />
                                <LazyLoadImage src={HeroEyeLine} alt='image' className='absolute top-[7.5rem] left-80 rotate-180' />
                                <svg className='heroLine hidden lg:block absolute -top-2 left-[30rem] -z-10' xmlns="http://www.w3.org/2000/svg" width="119" height="317" viewBox="0 0 119 317" fill="none">
                                <path d="M1 316C29.5 302.167 95.2491 252.452 59 223C27 197 -18.5 289.5 59 291C136.5 292.5 138 107.5 59 1" stroke="#FDC55E" stroke-width="2" stroke-linejoin="round" stroke-dasharray="8 8"/>
                                </svg>
                                <svg className='hidden lg:block absolute -top-2 left-[33.5rem] -z-10' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M0.202201 3.44144C-0.0952563 1.15128 2.19801 -0.602085 4.33008 0.285391L13.9244 4.27904C16.0565 5.16651 16.4283 8.02922 14.5937 9.4319L6.33792 15.744C4.5033 17.1467 1.83822 16.0373 1.54076 13.7472L0.202201 3.44144Z" fill="#F54748"/>
                                </svg>                                
                                <div className="heroRound absolute h-[620px] w-[620px] border-[40px] rounded-full top-[30px] -left-[65px] border-[rgba(245,71,72,0.7)] -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;