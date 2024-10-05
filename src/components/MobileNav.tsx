"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "@/components/Nav";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        {/*  Logo  */}
        <div className="my-10 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sajib
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/*  Nav  */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${link.path === pathname ? "border-b-2 border-accent text-accent" : ""} text-xl capitalize transition-all hover:text-accent`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
