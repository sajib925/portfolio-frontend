import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sajib925" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/sajib-ahmed-70a906238/",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/profile.php?id=100008890392675",
  },
  { icon: <FaTelegramPlane />, path: "https://t.me/@SajibAhmed15" },
];

export const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={iconStyles}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};
