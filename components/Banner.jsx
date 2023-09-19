import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#eccdee] to-[#e0e0e0]">
      <div className="container mx-auto py-[100px]">
        <div className="flex justify-around">
          <article className="text-black flex-1 flex flex-col items-start pl-[150px] justify-start">
            <div className="flex items-center gap-x-4">
              <div className="w-[100px] bg-black h-[2px]"></div>
              {/* <p className="text-sm">Ho, Ghana</p> */}
              <p className="text-sm">
                Welcome to <span className="font-semibold">Hair Jem</span>
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-[70px] font-semibold leading-[70px] mb-[40px]">
                All for the <br /> sake of your
                <br />
                <span className="text-[#e24fe2]">beauty</span>
              </h3>
            </div>
            <Link
              href="/booking"
              className="bg-black text-white py-2 px-10 rounded-full"
            >
              Booking Now
            </Link>
          </article>
          {/* <div className=" flex-1 relative">
            <div className="relative w-[800px] h-full">
              <Image src="/2.png" fill className="object-contain" />
            </div>
            <div className="bg-gradient-to-b from-[#e1a2e6] to-[#c7c4c4] w-[350px] h-[542px] rounded-t-full absolute top-0"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
