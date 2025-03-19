import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SubhoHazra07" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/subho-hazra-162c/",
  },
  { icon: <FaFacebook />, path: "https://www.facebook.com/tapan.hazra.5095" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/subho_hazra03/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
