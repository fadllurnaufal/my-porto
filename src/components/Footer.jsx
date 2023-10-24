import { Typography } from "@material-tailwind/react";
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

const Menu = [
  {
    title: "Menu",
    items: ["Home", "About", "Skills", "Projects", "Projects"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phoneNumber = "6282218803756";
  const handleWhatsAppLinkClick = () => {
    window.open(`https://wa.me/${phoneNumber}`);
  };

  const mailAddress = "fadllur.naufal@gmail.com";
  const sendMail = () => {
    const mailtoLink = `mailto:${mailAddress}`;

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

  return (
    <footer className="relative">
      <div className="mx-auto w-full">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between px-8">
          <Typography
            variant="small"
            className="mb-2 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a onClick={() => scrollToSection("Home")} className="cursor-pointer">
              <b className="font-serif">hi!</b>
            </a>
            . Created with 🖤 by <b>Naufal Fadllur</b> 
          </Typography>
          <div className="flex gap-x-4 text-blue-gray-900 sm:justify-center">
            <button
              onClick={handleLinkedinLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform duration-300 hover:drop-shadow-md"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color="#3C4245"
                className="w-4 h-4 sm:h-5 sm:w-5"
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
                className="w-4 h-4 sm:h-5 sm:w-5"
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
                className="w-4 h-4 sm:h-5 sm:w-5"
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
                className="w-4 h-4 sm:h-5 sm:w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
