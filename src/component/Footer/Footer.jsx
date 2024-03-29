import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa6';
import './Footer.css'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="topFooter py-6">
                    <div className="row">
                        <div className="container flex justify-center md:justify-between flex-wrap gap-x-10 lg:gap-x-1 gap-y-16">
                            <div className="col w-[23vw] min-w-[300px] lg:min-w-[130px] text-center md:text-left">
                                <div className="footer_item_title pb-[10px] text-[32px] text-primary font-sofia font-semibold not-italic leading-normal capitalize">
                                    <span>Foodhut</span>
                                </div>
                                <div className="footer_desc pb-[22px]">
                                    <p className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                                <div className="footer_icon flex justify-center md:justify-start gap-[1.5vw]">
                                    <Link to='/' spy={true} smooth={true} offset={50} duration={1000}><FaFacebookF size={30} className='text-secondery hover:text-primary ease-linear transition-all duration-300'/></Link>
                                    <Link to='/' spy={true} smooth={true} offset={50} duration={1000}><FaInstagram size={30} className='text-secondery hover:text-primary ease-linear transition-all duration-300'/></Link>
                                    <Link to='/' spy={true} smooth={true} offset={50} duration={1000}><FaTwitter size={30} className='text-secondery hover:text-primary ease-linear transition-all duration-300'/></Link>
                                </div>
                            </div>
                            <div className="col w-[10vw] min-w-[300px] lg:min-w-[130px] text-center md:text-left">
                                <div className="footer_item_title pb-[17px] text-[24px] text-primary font-sofia font-semibold not-italic leading-normal capitalize">
                                    <span>About us</span>
                                </div>
                                <div className="footer_about_link">
                                    <ul className='flex flex-col gap-y-3'>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>About us</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Services us</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Company</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col w-[10vw] min-w-[300px] lg:min-w-[130px] text-center md:text-left">
                                <div className="footer_item_title pb-[17px] text-[24px] text-primary font-sofia font-semibold not-italic leading-normal capitalize">
                                    <span>Company</span>
                                </div>
                                <div className="footer_company_link">
                                    <ul className='flex flex-col gap-y-3'>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Partnership</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Terms of Use</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Privacy</Link>
                                        </li>
                                        <li>
                                            <Link to='/' spy={true} smooth={true} offset={50} duration={1000} className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal capitalize'>Sitemap</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col w-[35vw] min-w-[300px] lg:min-w-[130px] text-center md:text-left">
                                <div className="footer_item_title pb-[37px] text-[24px] text-primary font-sofia font-semibold not-italic leading-normal capitalize">
                                    <span>Get in touch </span>
                                </div>
                                <div className="footer_desc pb-[27px]">
                                    <p className='text-black-2 font-sofia text-lg not-italic font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                </div>
                                <form action="#" className="footer_form flex gap-[1vw]">
                                    <input type="email" placeholder='Email' className=' w-3/5 px-4 bg-[rgba(25,25,25,0.1)] rounded-full placeholder:text-[rgba(25,25,25,0.51)] placeholder:font-inter placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-normal outline-none' />
                                    <button className=" bg-[#F54748]  text-[#fff] h-fit py-2 px-4 font-sofia text-lg not-italic font-medium leading-normal capitalize rounded-full hover:bg-secondery transition-all ease-linear duration-500">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomFooter">
                    <div className="container">
                        <p className="text-black-2 font-inter text-base not-italic font-normal leading-normal text-center py-6">Copyright &copy; 2022 Foodhut.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;