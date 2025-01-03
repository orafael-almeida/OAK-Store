import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const TopBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:font-normal text-sm bg-primary text-white font-bold text-center p-3 font-sm tracking-tighter">
      <div className="flex ml-4 gap-4">
        <span>Central Comercial</span>
        <span>(017) 98190-5881</span>
        <span>(011) 3136-1594</span>
      </div>
      <p className="px-4 font-bold">
        Promovemos uma transformação digital efetiva em sua empresa
      </p>
      <p className="font-bold">Vamos Conversar?</p>
      <div className="flex gap-5 md:mr-14">
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
