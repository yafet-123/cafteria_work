import Link from "next/link"
import Image from "next/image"

const Hero = ({title , description, style, heroImage}) => {
  return ( 
    <div className={`text-white flex flex-col ${style} items-center justify-between w-full h-full lg:h-[45rem] pt-24 mb-5 lg:mb-20`}>
      <div className="w-full lg:w-1/2 px-5 lg:px-10">
          <h1 className="text-left text-[40px] md:text-5xl lg:text-6xl">
          </h1>
          <p className="text-black font-semibold text-left md:tracking-wider mb-4 text-lg md:text-xl lg:text-3xl">
            {description}
          </p>
      </div>

      <div className="flex flex-col w-full h-full px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
          <div className="lg:pr-10 hidden lg:flex flex-col">
            <div className="w-full h-full lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5 lg:py-0">
              <Image
                className=""
                alt="why choose us image"
                src={heroImage[0].image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="w-full h-full lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5 lg:py-0">
              <Image
                className=""
                alt="why choose us image"
                src={heroImage[1].image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="lg:pr-10 flex flex-col py-10">
            <div className="hidden lg:flex w-full h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
              <Image
                className=""
                alt="why choose us image"
                src={heroImage[2].image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full h-[25rem] lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
              <Image
                className=""
                alt="why choose us image"
                src={heroImage[3].image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;