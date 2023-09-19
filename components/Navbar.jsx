import Link from "next/link";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { PiTiktokLogoThin } from "react-icons/pi";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Booking",
    path: "/booking",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#eccdee] h-[60px] py-8 text-black">
      <div className="flex justify-around items-center">
        <div className="flex gap-x-8 text-[17px]">
          {links.map((link) => (
            <Link href={link.path}>{link.name}</Link>
          ))}
        </div>
        <div className="text-xl">Hair Jem</div>
        <div className="flex gap-x-6 items-center text-[18px]">
          <AiOutlineInstagram className="cursor-pointer" />
          <AiOutlineFacebook className="cursor-pointer" />
          {/* <PiTiktokLogoThin /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
