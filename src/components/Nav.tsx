"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

export const links: { name: string, path: string }[] = [
    {
        name: "Home",
        path: "/"
    }, {
        name: "Resume",
        path: "/resume"
    }, {
        name: "Work",
        path: "/work"
    }, {
        name: "Contact",
        path: "/contact"
    }
]


export const Nav: React.FC = () => {

    const pathName = usePathname()
    return (
        <nav className='flex gap-8 items-center'>
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path}
                          className={`${link.path === pathName ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
                )
            })}
        </nav>

    )
}