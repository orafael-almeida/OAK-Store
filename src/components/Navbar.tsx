import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { title: "A OAK", url: "#" },
  { title: "MÉTODO", url: "#" },
  { title: "SERVIÇOS", url: "#" },
  { title: "CASES", url: "#" },
  { title: "BLOG", url: "#" },
  { title: "CARREIRA", url: "#" },
];

const Navbar = () => {
  return (
    <header className="h-24 flex justify-center items-center px-4">
      <div className="flex justify-between items-center w-full px-4 gap-8 ">
        <div className="h-full">
          <Image
            src={"/assets/images/oak-logo.png"}
            alt="OAK Logo"
            width={150}
            height={150}
            objectFit="contain"
          />
        </div>

        <nav className="hidden md:flex justify-between items-center gap-4 tracking-normal font-semibold text-sm">
          {navLinks.map((option) => (
            <Link href={`${option.url}`} key={option.title}>
              {option.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3">
          <button className="border border-primary rounded-[.2rem] py-3 px-5 md:py-2 md:px-6 text-primary hover:bg-primary hover:text-white transition-colors">
            <span className="md:text-xs font-semibold tracking-tight">
              CONTATO
            </span>
          </button>
          <button className="bg-black md:hidden border border-black rounded-[.2rem] py-3 px-5"></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
