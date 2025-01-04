import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const TopBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:font-normal text-sm bg-primary text-white font-bold text-center p-3 font-sm lg2:tracking-tighter gap-4">
      <div className="hidden lg2:flex ml-4 gap-4">
        <span>Central Comercial</span>
        <Link href={"tel:55017981905881"}>(017) 98190-5881</Link>
        <Link href={"tel:5501131361594"}>(011) 3136-1594</Link>
      </div>
      <p className="px-4 font-bold">
        Promovemos uma transformação digital efetiva em sua empresa
      </p>
      <Link href={"#contato"} className="hidden lg2:flex font-bold">
        Vamos Conversar?
      </Link>
      <div className="flex gap-4 md:mr-14">
        <Link href={"https://www.linkedin.com/company/76051272/admin/"}>
          <FaLinkedinIn />
        </Link>
        <Link href={"https://www.instagram.com/oak.tecnologia/"}>
          <FaInstagram />
        </Link>
        <Link
          href={"https://www.facebook.com/oak.tecnologia/?ref=pages_you_manage"}
        >
          <FaFacebookF />
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=5517991790042"}>
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
