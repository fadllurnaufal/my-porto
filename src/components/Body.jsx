import "../App.css";
import "swiper/css";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import React, { useEffect, useState, Component, useRef } from "react";
import ParticlesBg from "particles-bg";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Carousel,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faLinkedinIn,
  faPhp,
  faJs,
  faReact,
  faLaravel,
  faGit,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(
  fab,
  faGoogle,
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedinIn,
  faPhp
);

export function Body({pageTitle}) {

  useEffect(() => {
    document.title = pageTitle || "Naufal Fadllur";
  }, [pageTitle]);

  const [text, setText] = useState("");
  const phrases = ["Web Developer.", "UI/UX Designer.", "Freelancer."];
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const delay = 1000;

  //AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });

    //Animation Write and Delete
    let phraseIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let isDeleting = false;

    const typeAndDelete = () => {
      const currentPhrase = phrases[phraseIndex];
      const currentChar = isDeleting
        ? currentPhrase.slice(0, charIndex)
        : currentPhrase.slice(0, charIndex + 1);

      setText(currentChar);

      if (isTyping && charIndex === currentPhrase.length) {
        setTimeout(() => {
          isTyping = false;
          isDeleting = true;
          setTimeout(typeAndDelete, deleteSpeed);
        }, delay);
      } else if (!isTyping && charIndex === 0) {
        isDeleting = false;
        isTyping = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeAndDelete, typingSpeed);
      } else {
        setTimeout(typeAndDelete, isTyping ? typingSpeed : deleteSpeed);
      }

      charIndex += isTyping ? 1 : -1;
    };

    typeAndDelete();
  }, []);

  //Linked Button Handle
  const phoneNumber = "6282218803756";
  const handleWhatsAppLinkClick = () => {
    window.open(`https://wa.me/${phoneNumber}`);
  };

  const mailAddress = "fadllur.naufal@gmail.com";
  const sendMail = () => {
    const mailtoLink = `mailto:${mailAddress}?subject=Subjek%20Email&body=Isi%20Pesan%20Email`;

    window.location.href = mailtoLink;
  };

  const linkedinUsername = "fadllurnaufal";
  const handleLinkedinLinkClick = () => {
    window.open(`https://www.linkedin.com/in/${linkedinUsername}/`);
  };

  const githubUsername = "fadllurnaufal";
  const handleGitHubLinkClick = () => {
    window.open(`https://github.com/${githubUsername}`, "_blank");
  };

  //Modal Image
  const cardData = [
    {
      imageSrc: ["/BK/HomeBK.png", "/BK/DashboardBK.png", "/BK/SiswaBK.png"],
      title: "Sisfo BK SMK Negeri 6 Bandung",
      content:
        "This application is created to digitize the processes that are traditionally carried out in the counseling division of SMK Negeri 6 Bandung, which are still done manually, into a web-based system.",
      jobTitle: "Web Developer",
      year: "2022",
      technologies: ["Laravel, ", "MySQL, ", "Tailwind CSS"],
    },
    {
      imageSrc: [
        "/Stock/HomeStock.png",
        "/Stock/DashboardStock.png",
        "/Stock/DaftarStock.png",
      ],
      title: "Elmoure Management Inventory",
      content:
        "This inventory management application is created using the FIFO (First-In, First-Out) method.",
      jobTitle: "Backend Developer",
      year: "2022",
      technologies: ["Laravel, ", "Javascript,", "MySQL, ", "Bootstrap"],
    },
    {
      imageSrc: [
        "/DT/HomeDT.png",
        "/DT/MonitoringDT.png",
        "/DT/Monitoring2DT.png",
      ],
      title: "Daarut Tauhid",
      content:
        "In this application, I have created new features for monitoring students and student reports.",
      jobTitle: "Web Developer",
      year: "2022",
      technologies: ["PHP, ", "Javascript, ", "MySQL, ", "Bootstrap"],
    },
    {
      imageSrc: [
        "/Diagnose/DashboardPakar.png",
        "/Diagnose/HomePakar.png",
        "/Diagnose/IlmuPakar.png",
      ],
      title: "Expert System",
      content:
        "This application is created to complete my final projected (Thesis).",
      jobTitle: "Web Developer",
      year: "2023",
      technologies: ["PHP, ", "MySQL, ", "Bootstrap"],
    },
    {
      imageSrc: ["/Eyelash/Home.png", "/Eyelash/Booking.png"],
      title: "Kumaw Eyelash Specialist",
      content:
        "This application is created for booking online customers kumaw eyelash specialist",
      jobTitle: "Web Developer",
      year: "2023",
      technologies: ["PHP, ", "Javascript, ", "MySQL, ", "Tailwind CSS"],
    },
    {
      imageSrc: ["/Movie/Home1.png", "/Movie/Home2.png"],
      title: "Whatmovies?",
      content:
        "This application is created for learning ReactJS and RestApi using tmdb Api",
      jobTitle: "Frontend Developer",
      year: "2023",
      technologies: ["ReactJs, ", "API, ", "Tailwind CSS"],
    },
  ];

  const [openDialog, setOpenDialog] = React.useState(
    Array(cardData.length).fill(false)
  );

  const handleOpenDialog = (index) => {
    const newOpenDialog = [...openDialog];
    newOpenDialog[index] = !newOpenDialog[index];
    setOpenDialog(newOpenDialog);
  };

  const [download, setDownloaded] = useState(false);

  function handleDownload() {
    if (!download) {
      const fileLoc = "/CV-MuhammadNaufal.pdf";

      const a = document.createElement("a");
      a.href = fileLoc;

      a.download = "CV-MuhammadNaufalFadllurRohman.pdf";

      a.click();
      a.remove();
      setDownloaded(true);
    }
  }

  return (
    <>
      <section
        id="Home"
        className="h-screen flex flex-col justify-center items-center"
      >
        <ParticlesBg type="cobweb" bg={true} />
        <div className="text-center">
          <Typography
            color="blue-gray"
            className="sm:text-xl font-bold uppercase tracking-wider py-4"
          >
            Hello, World! 🌍
          </Typography>
          <Typography
            variant="h3"
            color="blue-gray"
            className="text-4xl sm:text-5xl font-sans font-bold tracking-wide"
          >
            Muhammad Naufal
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium mt-2 sm:text-xl font-serif"
          >
            I'm <span className="font-semibold font-sans">{text}</span>
            <span className="cursor-blink font-light">|</span>
          </Typography>
        </div>
        <div className="inline-flex gap-x-10 p-2 mt-10">
          <button
            onClick={handleLinkedinLinkClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform duration-300 hover:drop-shadow-md"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#3C4245"
              className="w-5 h-5 sm:h-6 sm:w-6"
            />
          </button>
          <button
            onClick={sendMail}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform duration-300 hover:drop-shadow-md"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              color="#3C4245"
              className="w-5 h-5 sm:h-6 sm:w-6"
            />
          </button>
          <button
            onClick={handleWhatsAppLinkClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform duration-300 hover:drop-shadow-md"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#3C4245"
              className="w-5 h-5 sm:h-6 sm:w-6"
            />
          </button>
          <button
            onClick={handleGitHubLinkClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform duration-300 hover:drop-shadow-md"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#3C4245"
              className="w-5 h-5 sm:h-6 sm:w-6"
            />
          </button>
        </div>
      </section>
      <section
        id="About"
        className="flex flex-col justify-center items-center mx-auto max-w-screen-xl sm:h-[calc(100vh-60px)] pt-20 sm:pt-0"
      >
        <div className="flex sm:flex-row flex-col w-full self-center gap-x-10">
          <div
            className="relative sm:w-[500px] w-[125px] mx-auto sm:mx-0 sm:mt-0"
            data-aos="zoom-in-right"
          >
            <img
              src="/profile.png"
              alt="Profile Picture"
              className="max-w-full sm:rounded-none sm:border-none rounded-full border-2 border-solid border-blue-gray-900 "
            />
            <span className="absolute bottom-0 top-5 sm:top-10 left-10 sm:left-20 right-0 -z-10 translate-x-1">
              <svg
                width={75}
                height={75}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[300px] sm:h-[300px]"
              >
                <path
                  fill="#000000"
                  d="M37.4,-59.5C46.4,-52.5,50,-38.5,52.3,-26.1C54.5,-13.7,55.3,-2.8,54.8,8.6C54.3,20,52.4,31.9,46.2,41.4C40.1,50.8,29.6,57.9,16.8,65.2C4.1,72.6,-10.9,80.3,-22,76.4C-33.1,72.4,-40.4,56.9,-50.6,44.3C-60.8,31.7,-74,22.1,-80.6,8.6C-87.2,-4.9,-87.2,-22.4,-78.8,-34C-70.5,-45.7,-53.7,-51.6,-39.2,-56.1C-24.6,-60.5,-12.3,-63.6,1,-65.1C14.2,-66.6,28.5,-66.5,37.4,-59.5Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col self-center w-full px-4">
            <div
              className="mt-6 sm:mt-0 text-center sm:text-left"
              color="blue-gray"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="uppercase font-sans sm:text-2xl"
                data-aos="fade-down"
              >
                Let's
              </Typography>
              <Typography
                color="blue-gray"
                className="uppercase font-sans font-medium text-sm sm:text-lg"
                data-aos="fade-left"
              >
                Introduce About
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="uppercase font-sans font-extrabold break-before-auto sm:text-4xl"
                data-aos="fade-up"
              >
                Myself
              </Typography>
            </div>
            <Typography
              variant="paragraph"
              color="gray"
              className="italic mt-6 sm:mt-6 text-justify sm:text-justify"
              data-aos="fade-left"
            >
              Hello, my name <strong>Muhammad Naufal Fadllur Rohman</strong>, but you can call me <strong>Naufal</strong>. I am a web developer with over 2 years of experience. I graduated from Widyatama University in Bandung and have been actively involved in the tech industry since late 2021. Throughout my career, I’ve contributed to various projects through full-time roles, internships, and freelance work. I specialize in technologies such as PHP, JavaScript, C#, VB.NET, ASP.NET, React.js, Laravel, CodeIgniter, MySQL, and more. Below are some of the projects I’ve worked on.
            </Typography>
            <div
              className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-2 mt-6 sm:mt-8"
              data-aos="fade-up"
            >
              <Button
                onClick={sendMail}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me!
              </Button>
              <Button
                variant="outlined"
                onClick={handleDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Skills"
        className="flex flex-col justify-center items-center font-sans mx-auto max-w-screen-xl sm:pt-20 pt-20"
      >
        <div className="px-4 sm:px-0">
          <div className=" flex flex-col">
            <Typography
              variant="h5"
              color="blue-gray"
              className="top-0 sm:text-3xl uppercase"
              data-aos="fade-right"
            >
              Skills
            </Typography>
            <Typography
              color="gray"
              className="top-0 mt-4 sm:text-base text-sm"
              data-aos="fade-left"
            >
              I have completed projects with various technologies as a developer
              to develop an applications.
            </Typography>
          </div>
          <div
            className="grid sm:grid-cols-3 sm:gap-x-10 gap-y-10 sm:gap-y-20 mt-14"
            data-aos="fade-up"
          >
            <div className="w-full flex flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faPhp}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  PHP
                </Typography>
              </div>
            
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have used PHP, along with frameworks such as Laravel and CodeIgniter, to develop robust backend systems, REST APIs, and database-driven web applications.
                </Typography>
              </div>
            </div>

            <div className="w-full flex flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faJs}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  Javascript
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have used JavaScript for developing dynamic UI components, form validations, asynchronous data handling (using Fetch/AJAX), and integrating with some frameworks.
                </Typography>
              </div>
            </div>

            <div className="w-full flex flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
              <FontAwesomeIcon
                color="#263238"
                className="w-7 h-7 sm:h-8 sm:w-8"
              ></FontAwesomeIcon>
              <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  C#
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I've used C# to develop backend logic for web applications, create reusable components, and work with the .NET framework to build secure and scalable code.
                </Typography>
              </div>
            </div>

            <div className="w-full flex gap-x-2 items-start">
              <div>
              <FontAwesomeIcon
                color="#263238"
                className="w-7 h-7 sm:h-8 sm:w-8"
              ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  VB
                </Typography>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have experience developing desktop applications using VB.NET and Windows Forms, focusing on creating user-friendly interfaces, handling business logic, and connecting with local or remote databases.
                </Typography>
              </div>
            </div>

            <div className="w-full flex-col gap-x-2 items-start">
            <div className="w-full flex gap-x-2">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#263238" d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z">
                  </path>
                </svg>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  NextJs
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have used Next.js to build front-end web applications for several projects, focusing on performance, scalability, and seamless user experience.
                </Typography>
              </div>
            </div>

            <div className="w-full flex flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faReact}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  ReactJs
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have used React.js to develop responsive and dynamic user interfaces, focusing on component-based architecture and efficient state management.
                </Typography>
              </div>
            </div>

            <div className="w-full flex flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faLaravel}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  Laravel
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I’ve used Laravel as the backend for projects with front-end technologies like React.js and Next.js and managing data flow efficiently between server and client.
                </Typography>
              </div>
            </div>

            <div className="w-full flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <svg
                  viewBox="0 0 24 24"
                  height="32px"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path
                    fill="#263238"
                    d="M11.466 0c.88 1.423-.28 3.306-1.207 4.358-.899 1.02-1.992 1.873-2.985 2.8-1.066.996-2.091 2.044-2.967 3.213-1.753 2.339-2.827 5.28-2.038 8.199.788 2.916 3.314 4.772 6.167 5.429-1.44-.622-2.786-2.203-2.79-3.82-.003-1.765 1.115-3.262 2.505-4.246-.167.632-.258 1.21.155 1.774a1.68 1.68 0 0 0 1.696.642c1.487-.326 1.556-1.96.674-2.914-.872-.943-1.715-2.009-1.384-3.377.167-.685.588-1.328 1.121-1.787-.41 1.078.755 2.14 1.523 2.67 1.332.918 2.793 1.612 4.017 2.688 1.288 1.132 2.24 2.661 2.047 4.435-.208 1.923-1.736 3.26-3.45 3.936 3.622-.8 7.365-3.61 7.44-7.627.093-3.032-1.903-5.717-5.158-7.384.19.48.074.697-.058.924-.55.944-2.082 1.152-2.835.184-1.205-1.548.025-3.216.197-4.855.215-2.055-1.073-4.049-2.67-5.242z"
                  ></path>
                </svg>

                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  Codeigniter
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  CodeIgniter has been my go-to framework for building fast and straightforward web applications, especially when working on projects that require minimal setup and high performance.
                </Typography>
              </div>
            </div>

            <div className="w-full flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#263238"
                    d="M21.875 7.568c-.156 0-.26.021-.365.047v.016h.016c.073.135.193.24.286.365c.073.141.135.286.203.427l.021-.021c.125-.089.188-.229.188-.443c-.052-.063-.063-.13-.109-.188c-.052-.089-.167-.135-.24-.203zM7.693 25.161H6.459a70.224 70.224 0 0 0-.359-5.88h-.01l-1.88 5.88h-.943l-1.865-5.88h-.016a98.982 98.982 0 0 0-.26 5.88H.001a74.98 74.98 0 0 1 .547-7.375h1.531l1.781 5.417h.01l1.797-5.417h1.458c.323 2.688.516 5.146.573 7.375zm5.354-5.442c-.5 2.729-1.167 4.714-1.984 5.948c-.646.953-1.349 1.432-2.115 1.432c-.203 0-.453-.063-.755-.188v-.656c.151.021.323.036.516.036c.359 0 .646-.104.865-.297c.26-.24.391-.51.391-.807c0-.208-.099-.625-.307-1.26l-1.349-4.208h1.214l.969 3.146c.219.719.313 1.214.271 1.5c.536-1.417.906-2.969 1.115-4.646zm16.437 5.442h-3.51v-7.375h1.182v6.469h2.328zm-4.427.178l-1.354-.667c.12-.099.234-.208.339-.333c.578-.672.865-1.677.865-3c0-2.443-.958-3.661-2.875-3.661c-.938 0-1.672.307-2.198.927c-.573.677-.865 1.677-.865 2.995c0 1.297.255 2.245.766 2.854c.469.542 1.172.818 2.115.818c.349 0 .672-.042.964-.13l1.766 1.031l.484-.833zm-4.39-1.657c-.302-.479-.448-1.25-.448-2.313c0-1.859.563-2.786 1.693-2.786c.589 0 1.026.224 1.302.667c.297.484.448 1.245.448 2.297c0 1.87-.568 2.813-1.693 2.813c-.594 0-1.026-.224-1.307-.667zm-2.209-.562c0 .625-.229 1.141-.693 1.536c-.458.401-1.068.604-1.844.604c-.724 0-1.417-.229-2.099-.688l.318-.635c.583.292 1.109.438 1.589.438c.443 0 .792-.099 1.042-.292c.25-.198.401-.474.401-.823c0-.438-.307-.813-.865-1.125c-.516-.286-1.552-.875-1.552-.875c-.563-.411-.839-.849-.839-1.573c0-.599.208-1.078.625-1.443c.422-.375.958-.557 1.625-.557a3.37 3.37 0 0 1 1.87.547l-.286.635a3.623 3.623 0 0 0-1.417-.307c-.38 0-.672.094-.875.276s-.328.411-.328.698c0 .438.313.813.885 1.135c.526.286 1.583.891 1.583.891c.578.406.865.844.865 1.557zm12.506-7.807c-.714-.016-1.266.057-1.729.255c-.13.052-.344.052-.365.219c.073.073.083.188.146.286c.109.177.292.417.464.542c.188.146.375.292.568.417c.349.214.74.339 1.083.552c.193.125.391.286.583.417c.099.068.161.188.286.229v-.026c-.063-.078-.078-.193-.141-.286c-.089-.089-.177-.167-.266-.255a4.212 4.212 0 0 0-.927-.901c-.286-.193-.911-.464-1.026-.792l-.016-.021c.193-.016.422-.089.609-.141c.302-.078.583-.063.896-.141a7.21 7.21 0 0 0 .427-.125v-.078c-.161-.161-.281-.38-.448-.531a11.645 11.645 0 0 0-1.469-1.094c-.281-.182-.635-.297-.932-.448c-.104-.052-.286-.078-.344-.167c-.161-.198-.255-.453-.37-.688a23.772 23.772 0 0 1-.729-1.552c-.161-.349-.255-.693-.453-1.016c-.917-1.516-1.917-2.432-3.448-3.333c-.328-.188-.724-.266-1.141-.365c-.224-.01-.443-.026-.667-.036c-.146-.063-.286-.229-.411-.313c-.51-.323-1.823-1.016-2.193-.099c-.24.583.354 1.151.563 1.443c.151.208.344.438.453.667c.063.156.078.318.141.479c.141.391.276.828.464 1.193c.099.188.203.385.328.552c.073.099.198.141.224.302c-.125.182-.135.448-.203.667c-.323 1.01-.198 2.255.255 3c.146.224.484.714.938.526c.401-.161.313-.667.427-1.115c.026-.109.01-.177.063-.25v.021c.13.25.255.49.37.74c.271.438.755.891 1.156 1.193c.214.161.38.438.646.536v-.026h-.021c-.057-.078-.13-.115-.203-.177a4.999 4.999 0 0 1-.469-.536c-.37-.5-.703-1.052-.995-1.62a10.88 10.88 0 0 1-.385-.859c-.052-.104-.052-.266-.141-.318c-.135.193-.333.359-.427.604c-.172.38-.188.854-.255 1.344c-.031.01-.016 0-.031.021c-.286-.073-.385-.365-.49-.615c-.271-.635-.313-1.651-.083-2.38c.063-.188.328-.776.224-.953c-.057-.172-.234-.271-.328-.406c-.12-.167-.24-.38-.323-.568c-.214-.5-.318-1.052-.552-1.552c-.104-.229-.292-.469-.443-.682c-.172-.24-.359-.411-.49-.693c-.047-.099-.109-.26-.036-.365c.016-.073.052-.099.125-.12c.115-.099.448.026.563.083c.328.13.604.255.88.443c.125.089.26.255.422.302h.188c.286.063.604.016.87.099c.474.151.901.37 1.286.609a7.963 7.963 0 0 1 2.776 3.052c.109.203.156.391.255.604c.182.443.417.885.604 1.307s.365.849.635 1.198c.135.188.667.286.911.38c.177.083.453.156.609.25c.307.188.609.401.896.609c.146.099.589.323.615.5z"
                  />
                </svg>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  MySql
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I have experience using MySQL as the primary relational database in various projects, handling data modeling, query optimization, and database integration for both web and desktop applications.
                </Typography>
              </div>
            </div>

            <div className="w-full flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faGitAlt}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  Git
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I've used Git in my several projects, enabling efficient collaboration, code management, and tracking changes through platforms like GitHub and GitLab.
                </Typography>
              </div>
            </div>

            <div className="w-full flex-col gap-x-2 items-start">
              <div className="w-full flex gap-x-2">
                <FontAwesomeIcon
                  color="#263238"
                  icon={faFigma}
                  className="w-7 h-7 sm:h-8 sm:w-8"
                ></FontAwesomeIcon>
                <Typography
                  color="blue-gray"
                  variant="h5"
                  className="sm:text-2xl"
                >
                  Figma
                </Typography>
              </div>
              <div>
                <Typography className="text-sm sm:text-base mt-2 text-justify">
                  I use Figma for UI/UX design, wireframing, and prototyping, collaborating with teams to create intuitive, responsive interfaces before development begins.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Projects"
        className="flex flex-col justify-center items-center font-sans mx-auto max-w-screen-xl sm:pt-20 pt-20 "
      >
        <div className="px-4 sm:px-0">
          <div className=" flex flex-col ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="top-0 sm:text-3xl uppercase"
              data-aos="fade-right"
            >
              Projects
            </Typography>
            <Typography
              color="gray"
              className="top-0 mt-4 sm:text-base text-sm"
              data-aos="fade-left"
            >
              I have completed projects with various technologies as a developer
              to develop an applications.
            </Typography>
          </div>
          <div
            className="grid sm:grid-cols-3 gap-y-5 sm:gap-x-5 mt-14"
            data-aos="fade-up"
          >
            {/*  Card 1 */}
            {cardData.map((data, index) => (
              <Card
                key={index}
                className="w-full min-h-[40rem] max-w-[26rem] shadow-lg hover:scale-105 transform duration-300"
              >
                <CardHeader
                  floated={false}
                  color="blue-gray"
                  onClick={() => handleOpenDialog(index)}
                  className="cursor-pointer  "
                >
                  <img src={data.imageSrc[0]} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/20" />
                </CardHeader>
                <Dialog
                  size="lg"
                  open={openDialog[index]}
                  handler={() => handleOpenDialog(index)}
                >
                  <DialogHeader className="justify-between">
                    <div className="flex items-center gap-3">
                      <div className="-mt-px flex flex-col sm:gap-y-1">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {data.title}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="text-xs font-normal"
                        >
                          {data.year}
                        </Typography>
                      </div>
                    </div>
                  </DialogHeader>
                  <DialogBody>
                    <Carousel
                      className="rounded-xl"
                      navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                          {new Array(length).fill("").map((_, i) => (
                            <span
                              key={i}
                              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                  ? "w-8 bg-black"
                                  : "w-4 bg-black/50"
                              }`}
                              onClick={() => setActiveIndex(i)}
                            />
                          ))}
                        </div>
                      )}
                    >
                      {data.imageSrc.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ))}
                    </Carousel>
                  </DialogBody>
                  <DialogFooter className="flex flex-col justify-start">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-medium mt-2"
                    >
                      Using :
                    </Typography>
                    <Typography color="gray">{data.technologies}</Typography>
                  </DialogFooter>
                </Dialog>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {data.title}
                    </Typography>
                  </div>
                  <Typography color="gray">{data.content}</Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium mt-2"
                  >
                    As :
                  </Typography>
                  <Typography color="gray">{data.jobTitle}</Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium mt-2"
                  >
                    In :
                  </Typography>
                  <Typography color="gray">{data.year}</Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium mt-2"
                  >
                    Using :
                  </Typography>
                  <Typography color="gray">{data.technologies}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="Footer" className=""></section>
    </>
  );
}
