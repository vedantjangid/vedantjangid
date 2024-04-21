import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Threads } from "../data/db";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vedant-jangid-0a1907204/",
      title: "Linkedin",
    },

    {
      icon: Github,
      url: "https://github.com/vedantjangid",
      title: "Github",
    },

    {
      icon: Instagram,
      url: "https://www.instagram.com/dev.vedant/",
      title: "Instagram",
    },

    {
      icon: Threads,
      url: "https://www.threads.net/@dev.vedant",
      title: "Threads",
    },
  ];
  return (
    <div className="">
      <ul className="flex flex-row gap-5 items-center">
        {socialLinks.map((link, index) => (
          <li key={index} className="text-beige text-xl">
            <Link to={link.url}>{<link.icon />}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
