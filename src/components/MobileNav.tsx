"use client"
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";
import {links} from "@/components/Nav";

export const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent'/>
            </SheetTrigger>
            <SheetContent>
                {/*  Logo  */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold'>Sakil
                            <span className='text-accent'>.</span>
                        </h1>

                    </Link>
                </div>
                {/*  Nav  */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        links.map((link, index) => {
                            return (
                                <Link key={index} href={link.path}
                                      className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                            )
                        })
                    }
                </nav>

            </SheetContent>
        </Sheet>
    )
}