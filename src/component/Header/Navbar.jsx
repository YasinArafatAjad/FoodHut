import { Link } from "react-scroll";
import Logo from './img/Logo.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Navbar.css';
import '../../index.css';
import { FaBarsStaggered,FaXmark } from "react-icons/fa6";
import { useState } from "react";
import MobileAppBtn from './compo/MobileAppBtn.jsx';
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const navHandler = ()=> {
        setNav(!nav);
    };    
    return (
        <>
            <nav id="Navbar" className="Navbar">
                <div className="row">
                    <div className="container relative">
                        <div className="col flex justify-between items-center w-full px-3 py-4 absolute top-0 left-0 z-[99999999]">
                            <div className="logo">
                                <LazyLoadImage effect="blur" src={Logo} className="md:w-4/5 xl:w-full"/>
                            </div>
                            <div className={`navItem flex flex-col lg:flex-row items-start lg:items-center gap-y-[15vh] bg-[rgba(255,255,255,0.25)] lg:bg-[transparent] h-[100vh] lg:h-auto w-[40vw] min-w-[250px] lg:w-auto fixed top-0 ${nav ? `right-0`:`-right-[100vh]`} px-8 lg:px-0 py-12 lg:py-0 shadow-2xl lg:shadow-none lg:static lg:gap-[2vw] xl:gap-[3vw] 2xl:gap-[4vw] 4k:gap-[6vw] transition-all ease-in duration-500`}>
                                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-[5vh] pt-[10vh] lg:pt-0 lg:gap-[2vw] xl:gap-[3vw] 4k:gap-[4vw]">
                                    <li>
                                        <Link to="" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative" >
                                        Today special offers
                                        <span className="navline bg-primary h-0.5 w-0 absolute -bottom-2 left-0 transition-all ease-in duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        Why FoodHut
                                        <span className="navline bg-primary h-0.5 w-0 absolute -bottom-2 left-0 transition-all ease-in duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        Our Menu
                                        <span className="navline bg-primary h-0.5 w-0 absolute -bottom-2 left-0 transition-all ease-in duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        Our Popular food
                                        <span className="navline bg-primary h-0.5 w-0 absolute -bottom-2 left-0 transition-all ease-in duration-300"></span>
                                        </Link>
                                    </li>
                                </ul>
                                <MobileAppBtn />
                            </div>
                            {nav ? <FaXmark onClick={()=>navHandler()} size={40} className="lg:hidden z-[999999999]"/> : <FaBarsStaggered onClick={()=>navHandler()} size={40} className="lg:hidden z-[999999999]"/>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;