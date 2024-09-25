import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

export const Header: React.FC = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/*  Logo  */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Sajib<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*  Desktop nav  */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*  Mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
