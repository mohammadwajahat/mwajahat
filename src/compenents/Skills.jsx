import React from 'react';

// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import AWS from '../assets/aws.png';
// import SEO from '../assets/seo.png';
// import GoogleAds from '../assets/googleads.jpeg';
// import MetaAds from '../assets/metaads.jpeg';
// import Mongo from '../assets/mongo.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Shopify from '../assets/shopify.png';
import WordPress from '../assets/WordPress.png';




const Skills =()=>{
  return(
      <div name='skills' className='bg-[#0a192f] text-gray-300 cursor-pointer'>
          {/*container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full scroll pt-44'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Skills</p>
            <p className='py-4'>These are the technologies we have worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 pb-44'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='py-4'>HTML5</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
              <p className='py-4'>CSS3</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
            <p className='py-4'>Javascript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={ReactImg} alt="Reactjs icon" />
          <p className='py-4'>Reactjs</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
          <p className='py-4'>Tailwind</p>
          </div>

          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Shopify} alt="AWS icon" />
          <p className='py-4'>Shopify</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={WordPress} alt="AWS icon" />
          <p className='py-4'>WordPress</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
        <p className='py-4'>GitHub</p>
          </div>
          {/* 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Node} alt="Node icon" />
          <p className='py-4'>Node</p>
            </div>
            */}
            {/*
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
            <p className='py-4'>FireBase</p>
            </div>
             */}
              {/* 
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
            <p className='py-4'>MongoDB</p>
              </div>
                */}
                {/* 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
            <p className='py-4'>AWS</p>
              </div>
                */}

                  {/* 
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SEO} alt="AWS icon" />
                <p className='py-4'>SEO</p>
                  </div>
                    */}
                    {/* 
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GoogleAds} alt="AWS icon" />
                  <p className='py-4'>Google Ads</p>
                    </div>
                      */}
                      {/*
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MetaAds} alt="AWS icon" />
                  <p className='py-4'>Meta Ads</p>
                    </div>
                     */}
          </div>
        </div>
      </div>
  )
}

export default Skills;