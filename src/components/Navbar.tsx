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
    <header className=" h-24 flex justify-center items-center px-4">
      <div className="flex justify-between items-center w-full px-4 gap-8 max-w-screen-xl">
        <div className="h-full w-[120px] lg2:h-[50px] lg2:w-max flex items-center justify-center">
          <Image
            src={"/assets/images/oak-logo.png"}
            alt="OAK Logo"
            width={170}
            height={170}
            objectFit="contain"
            className="min"
          />
        </div>

        <nav className="hidden md:flex justify-between items-center gap-5 lg:gap-6 lg2:gap-12 md:tracking-normal font-semibold text-sm text-nowrap">
          {navLinks.map((option) => (
            <Link href={`${option.url}`} key={option.title}>
              {option.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3">
          <button className="border border-primary rounded-[.2rem] py-3 px-5 md:py-3 md:px-6 text-primary hover:bg-primary hover:text-slate-300/90 transition-colors">
            <span className="md:text-base font-semibold tracking-tighter">
              CONTATO
            </span>
          </button>
          <button className="bg-[#1E2326] md:hidden border border-black rounded-[.2rem] h-[50px] w-[50px] flex flex-col items-center justify-center gap-1">
            <div className="bg-slate-300/90 h-[2px] w-[40%]" />
            <div className="bg-slate-300/90 h-[2px] w-[40%]" />
            <div className="bg-slate-300/90 h-[2px] w-[40%]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
