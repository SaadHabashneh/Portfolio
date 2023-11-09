import React, {useState} from "react";
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from "../assets/logo.png";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return ( 
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={logo} alt="Logo Img" style={{width: "50px"}} />
        </div>
        {/* menu */}
            <ul className="hidden md:flex">
                <li className="hover:text-pink-600 duration-300">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:text-pink-600 duration-300">
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className="hover:text-pink-600 duration-300">
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="hover:text-pink-600 duration-300">
                <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
                </li>
            </ul>

        {/* mobile menu button */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? (<FaBars id="fabars" />) : (<FaTimes />)}
        </div>

        {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl hover:text-pink-600 duration-300">
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="py-6 text-4xl hover:text-pink-600 duration-300">
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className="py-6 text-4xl hover:text-pink-600 duration-300">
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="py-6 text-4xl hover:text-pink-600 duration-300">
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact Me</Link>
                </li>
            </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                    <a href="https://www.linkedin.com/in/saadhabashneh/" target="_blank" className="flex justify-between items-center w-full text-gray-300">LinkedIn <FaLinkedin size={30}/></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a href="https://github.com/SaadHabashneh" target="_blank" className="flex justify-between items-center w-full text-gray-300">GitHub <FaGithub size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
};

export default Navbar;
