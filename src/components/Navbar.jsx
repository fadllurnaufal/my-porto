import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => scrollToSection("Home")}
          className="flex items-center hover:text-gray-600 transition-colors cursor-pointer"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => scrollToSection("About")}
          className="flex items-center hover:text-gray-600 transition-colors cursor-pointer"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => scrollToSection("Skills")}
          className="flex items-center hover:text-gray-600 transition-colors cursor-pointer"
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={() => scrollToSection("Projects")}
          className="flex items-center hover:text-gray-600 transition-colors cursor-pointer"
        >
          Projects
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const [showShadow, setShowShadow] = React.useState(false);
  const [transparentBackground, setTransparentBackground] =
    React.useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowShadow(true);
      setTransparentBackground(false); // Set latar belakang tidak transparan saat digulir
    } else {
      setShowShadow(false);
      setTransparentBackground(true); // Set latar belakang transparan saat tidak digulir
    }
  };

  const handleWindowResize = () => {
    window.innerWidth >= 960 && setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navbarClass = showShadow ? "shadow-md" : "";
  const navbarBackgroundClass = transparentBackground ? "bg-transparent" : "";
  const navbarBlurClass = showShadow ? "backdrop-blur-md" : "";

  return (
    <div className="">
      <Navbar
        className={`fixed top-0 z-10 h-max max-w-full rounded-none py-4 px-4 sm:px-32 sm:py-3 shadow-none backdrop-blur-none transform duration-300 ${navbarClass} ${navbarBackgroundClass} ${navbarBlurClass}`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="mr-4 cursor-pointer py-1 font-serif"
          >
            hi!
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3CenterLeftIcon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSimple;
