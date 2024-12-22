import Head from 'next/head';
import React,{useState,useEffect} from "react";

export const MainHeader = ({ title, image , quotes, shareUrl, type, news }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`
          A small cafeteria is a cozy and welcoming spot offering a variety of freshly brewed coffee, tea, and simple, delicious meals. 
          Whether you're stopping by for a quick breakfast, a light lunch, or an afternoon snack, our menu features freshly baked 
          pastries, sandwiches, and healthy salads. With a focus on quality ingredients and friendly service, our cafeteria is 
          the perfect place to relax, enjoy great food, and catch up with friends or work in a comfortable setting.
        `}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />

        <meta property="og:url" content={`https://cafteria.vercel.app${shareUrl}`}/>
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="1233665570615472" />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content={quotes} />
        <meta property="og:description" content={quotes} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </Head>
    </div>
  );
};
