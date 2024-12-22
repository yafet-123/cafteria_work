import React from 'react'
import { MainHeader } from '../components/common/MainHeader';
import Hero from '../components/Home/Hero';
import {Categories} from '../components/Home/Categories';

import { getAllCategory } from "../data/menu";

import { useSession } from "next-auth/react";

import heroImage1 from  '../public/hero1.jpg';
import heroImage2 from  '../public/hero2.jpg';
import heroImage3 from  '../public/hero3.jpg';
import heroImage4 from  '../public/hero4.jpg';
import heroImage5 from  '../public/hero1.jpg';

export default function Home({all_category}) {
  console.log(all_category)
  const HeroImage = [
    {
      id:1,
      image:heroImage1,
    },
    {
      id:2,
      image:heroImage2,
    },
    {
      id:3,
      image:heroImage3,
    },
    {
      id:4,
      image:heroImage4,
    },
    {
      id:5,
      image:heroImage5,
    },
  ]
  return (
    <React.Fragment>
      <MainHeader title="Cafteria Menu: Home" />
      <div className="bg-[#dedee0]">
        <Hero 
          title="TRUST OUR EXPERIENCE"
          description={`Discover fresh salads, hearty brunches, and refreshing drinks crafted to delight your taste buds. 
          Whether it’s a quick coffee or a relaxed meal, every bite is unforgettable.`}
          style="lg:flex-row"
          heroImage={HeroImage}
        />
        <Categories Categories={all_category} />
      </div>
    </React.Fragment>
  );
}

export const getStaticProps = async (context) => {
  const all_category = getAllCategory();

  if (!all_category) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_category: all_category },
    revalidate: 3600,
  };
};
