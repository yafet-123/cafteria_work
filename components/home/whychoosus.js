import Image from 'next/image'

export function WhyChooseus () {
  const features =[
    {
      image : "/features-icon-1.png",
      head : 'Hygienic Food',
      text : "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      image : "/features-icon-2.png",
      head : 'Healthy Food',
      text : "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      image : "/features-icon-3.png",
      head : 'Recipie',
      text : "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      image : "/features-icon-4.png",
      head : 'Recipie',
      text : "Lorem Ipsum is simply dummy printing and typesetting.",
    }
  ]
  return(
    <section className="relative flex flex-col justify-center items-center w-full h-full lg:h-[100vh] bg-[#151617] p-5 lg:p-24" aria-label="event">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#d6b987] text-xl label-2 text-center">Why Choose Us</p>
        <Image 
          className="w-[100px] text-[#e3c48f]" 
          src='/separator.svg'
          width="100px"
          height="50%"
        />
        <h2 className="text-5xl text-white font-medium leading-light text-center mb-5 italic">Our Strength</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5">
        { features.map((feature,index)=>(
          <li key={index}>
            <div className={`relative flex flex-col justify-center items-center p-5 hover:scale-105 ${ index % 2 == 0  ? 'bg-[#131414]' : 'bg-[#121111]' } `}>
              <div className="hover:scale-110" style={{ transition: 'transform 250ms ease-in-out' }}>
                <Image 
                  src={feature.image} 
                  width="75" 
                  height="75" 
                  loading="lazy"
                  alt="Lorem Ipsum is simply dummy printing and typesetting." 
                  className="transition ease-in-out duration-300 delay-300 hover:scale-110 hover:rotate-180"

                />
              </div>

              <h3 className="font-bold text-white italic text-xl lg:text-3xl uppercase font-bold tracking-wider text-center my-5 px-[10px] py-[2px]">
                {feature.head}
              </h3>
              <p className="text-lg lg:text-xl italic text-center capitalize font-normal text-white">
                {feature.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <img 
        src="/shape-7.png" 
        width="208" 
        height="178" 
        loading="lazy" 
        alt="shape" 
        className="absolute overflow-visible block top-[-100px] right-0 hidden lg:flex"
      />

      <img 
        src="/shape-8.png" 
        width="120" 
        height="115" 
        loading="lazy" 
        alt="shape"
        className="absolute overflow-visible block bottom-[80px] left-0 hidden lg:flex"
      />
      
    </section>
  )
};