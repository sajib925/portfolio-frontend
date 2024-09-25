import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const socials = [
    {icon: <FaGithub/>, path: "/"},
    {icon: <FaLinkedinIn/>, path: "/"},
    {icon: <FaTwitter/>, path: "/"},
]

export const Social = ({containerStyles, iconStyles}: { containerStyles: string; iconStyles: string }) => {
    return (
        <div className={containerStyles}>
            {socials.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={iconStyles}>{link.icon}</Link>
                )
            })}

        </div>
    )
}