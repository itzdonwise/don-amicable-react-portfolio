import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  {Link} from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },

    {
      id: 5,
      link: "contact",
    },
  ];


  // const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = 50;
  //     const currentScrollY = 0
  //       window.scrollY || document.documentElement.scrollTop;

  //     if (currentScrollY > scrollThreshold) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [])
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-gradient-to-b from-gray-500 to-gray-900 fixed px-4 z-50">
      <Link to="home"  smooth duration={1000}  className="text-5xl font-logoFont ml-2  z-10">Amicable</Link>

      {/* destop view */}

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200" >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
        
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden "
      >
        {nav ? <FaTimes size={30} />:  <FaBars size={30}  /> }
      </div>
      {nav  && (
        
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500  md:hidden">
      {Links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-grey-500 text-4xl py-2 "
        >
          <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link} </Link>
          
        </li>
      ))}
    </ul>

      )}

    </div>
  );
};

export default Navbar;
