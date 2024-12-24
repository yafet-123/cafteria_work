import Image from 'next/image'

export function Categories ({Categories}) {
  console.log(Categories)
  return(
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-2 lg:px-10 py-10">
      { Categories.map((Category,index)=>(
        <div 
          key={index}
          className={`relative flex flex-col ${
              Category.id % 2 == 1 ? "bg-[#11665b] text-white" : "bg-[#E6E6E6]"
          }`}
        >
          <div className="relative w-full h-96">
            <Image
              src={Category.imagePath.src}
              alt="Category of cafteria Menu"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-around p-4">
            <h1 className="font-bold text-xl md:text-3xl mb-5">{Category.categoryName}</h1>
            <p className="font-normal text-md md:text-xl text-justify">
              {Category.categoryDescreption}
            </p>

            <div className="my-10 bg-transparent">
              <button onClick={() => handleSeeTour(Category.id)}>
                <h5
                  className={`absolute bottom-6 font-bold font-monospace hover:border-black text-xl mt-1 w-40 items-center justify-center hover:scale-105 transition duration-400 p-2 text-white ${
                    Category.id % 2 == 1
                      ? "bg-gradient-to-r from-green-500 to-[#11665b]-500"
                      : "bg-gradient-to-r from-green-800 to-[#11665b]-800"
                  }`}
                >
                  KNOW MORE
                </h5>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
};