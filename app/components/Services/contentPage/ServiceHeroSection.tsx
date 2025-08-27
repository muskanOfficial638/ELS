import { apiPath } from "@/app/utils/api-path";
import Image from "next/image";

interface HeroProps {
  feature_image: string;
  title: string;
}

const ServiceHeroSection: React.FC<HeroProps> = ({
  feature_image,
  title,
}: HeroProps) => {
  return (
    <section className="relative w-full flex items-start md:items-center justify-center">
      <Image
        src={`${apiPath}/storage/${feature_image}`}
        alt="Hero background"
        className="inset-0 w-full md:h-[473x] h-[501px] opacity-95 object-cover"
        width={1440}
        height={700}
      />
      {/* Overlay */}
      <div className="absolute inset-0 md:h-[500px] h-[501px] bg-gradient-to-b from-black/60 to-black/20 bg-opacity-40 z-0" />

      <div
        className="absolute z-10 text-white text-center px-4 md:mt-0 lg:mt-0 top-[25%] md:top-[35%] lg:top-[35%]"
        // style={{
        //   transform: "translate(-50%, -50%)",
        // }}
      >
        {/* desktop heading */}
        <h1 className="font-body md:text-[55px] text-[35px] font-bold tracking-[0.8px] sm:tracking-[0.8px]">
          {/* Bussiness Formation & Set-Up */}
          {title}
        </h1>

        {/* mobile heading */}
        {/* <h1 className="font-body text-[43px] font-bold tracking-[0.8px] whitespace-nowrap md:hidden lg:hidden">
          Bussiness <br/> Formation & <br/>Set-Up
        </h1> */}

        <p className="font-sans mt-2 text-sm tracking-[0.8px] sm:tracking-[0.7px]">
          Service / {title}
        </p>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
