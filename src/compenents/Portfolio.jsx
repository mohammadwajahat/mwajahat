import React from 'react';
import CabWebsite from '../assets/portfolio/cabwebsite.png';
import reacherscars from '../assets/portfolio/reacherscars.jpg';
import abbotscars from '../assets/portfolio/abbotscars.jpg';
import BloggingWeb from '../assets/portfolio/Blogging.png';
import RenovationWebsite from '../assets/portfolio/RenovationWebsite.png';
import PoolBasket from '../assets/portfolio/PoolBasket.png';
import Citysouthdental from '../assets/portfolio/Citysouthdental.png';
import BuyAndSell from '../assets/portfolio/BuyAndSell.png';
import Umselegal from '../assets/portfolio/Umselegal.png';
import RecruitmentStaffingAgency from '../assets/portfolio/RecruitmentStaffingAgency.png';
import BestPriceMovers from '../assets/portfolio/bestpricemovers.png';
import AICSImmigration from '../assets/portfolio/aicsimmigration.png';
import peao from '../assets/portfolio/ProfessionalsEntrepreneurAssociationOntario.png';
import azizifx from '../assets/portfolio/InternationalCurrencyTransferProvider.png';
import oneshotmarketing from '../assets/portfolio/oneshotmarketing.png';
import moonlightinsulation from '../assets/portfolio/moonlightinsulatio.png';
import promptplumbing from '../assets/portfolio/promptplumbingltd.png';

const Portfolio =()=>{
  return(
    <div name='portfolio' className='w-full md:h-screen-[800px] pt-20 text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 text-grey-300 border-yellow-400'>Portfolio</p>
            <p className='py-6'>Check out some of my recent work</p>                    
            </div>

          {/*Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-44'>

            {/*Grid Items */}
            <div style={{backgroundImage: `url(${CabWebsite})`}} className='shadow-lg shadow-[#160404] group container rounded-md flex justify-center items-center mx-auto content-div'>
              { /*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Cab Booking Website
                  </span>
                  <div className=' pt-8 text-center'>
                      <a href="https://a2zhertscars.uk/" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                      </a>
                      <span>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                      </span>
                  </div>
              </div>
            </div>

          {/*Grid Items */}
          <div style={{backgroundImage: `url(${reacherscars})`}} className='shadow-lg shadow-[#160404] group container rounded-md flex justify-center items-center mx-auto content-div'>
            { /*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Cab Booking Website
                </span>
                <div className=' pt-8 text-center'>
                    <a href="https://reacherscars.co.uk/" target="_blank">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                    </a>
                    <span>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                    </span>
                </div>
            </div>
          </div>
              

              {/*Grid Items */}
              <div style={{backgroundImage: `url(${abbotscars})`}} className='shadow-lg shadow-[#160404] group container rounded-md flex justify-center items-center mx-auto content-div'>
                { /*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Cab Booking Website
                    </span>
                    <div className=' pt-8 text-center'>
                        <a href="https://abbotscars.com/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                        </a>
                        <span>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                        </span>
                    </div>
                </div>
              </div>
               {/*Grid Items */}
            <div style={{backgroundImage: `url(${BloggingWeb})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              { /*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Blogging
                  </span>
                  <div className=' pt-8 text-center'>
                      <a href="https://e-commercepk.com/" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                      </a>
                      <span>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                      </span>
                  </div>
              </div>
            </div>


             {/*Grid Items */}
             <div style={{backgroundImage: `url(${RenovationWebsite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             { /*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                      Sharkbite Renovations
                 </span>
                 <div className=' pt-8 text-center'>
                     <a href="https://sharkbiterenovations.ca/" target="_blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                     </a>
                     <span>
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                     </span>
                 </div>
             </div>
           </div>

            {/*Grid Items */}
            <div style={{backgroundImage: `url(${PoolBasket})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              { /*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Pool Basket
                  </span>
                  <div className=' pt-8 text-center'>
                      <a href="https://pool-basket-filter.com/" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                      </a>
                      <span>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                      </span>
                  </div>
              </div>
            </div>

             {/*Grid Items */}
             <div style={{backgroundImage: `url(${Citysouthdental})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             { /*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                      City South Dental
                 </span>
                 <div className=' pt-8 text-center'>
                     <a href="https://citysouthdental.com/" target="_blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                     </a>
                     <span>
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                     </span>
                 </div>
             </div>
           </div>


            {/*Grid Items */}
            <div style={{backgroundImage: `url(${BuyAndSell})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              { /*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                        Buy and Sell
                  </span>
                  <div className=' pt-8 text-center'>
                      <a href="https://usedbuysell.com/" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                      </a>
                      <span>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                      </span>
                  </div>
              </div>
            </div>


             {/*Grid Items */}
             <div style={{backgroundImage: `url(${Umselegal})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             { /*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                       Umse Legal
                 </span>
                 <div className=' pt-8 text-center'>
                     <a href="https://umselegal.com/" target="_blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                     </a>
                     <span>
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                     </span>
                 </div>
             </div>
           </div>


            {/*Grid Items */}
            <div style={{backgroundImage: `url(${RecruitmentStaffingAgency})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              { /*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                        Recruitment & Staffing Agency
                  </span>
                  <div className=' pt-8 text-center'>
                      <a href="https://seekerstaffing.ca/" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                      </a>
                      <span>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                      </span>
                  </div>
              </div>
            </div>

             {/*Grid Items */}
             <div style={{backgroundImage: `url(${BestPriceMovers})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             { /*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                        Best Price Movers
                 </span>
                 <div className=' pt-8 text-center'>
                     <a href="https://bestpricemovers.ca/" target="_blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                     </a>
                     <span>
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                     </span>
                 </div>
             </div>
           </div>


                {/*Grid Items */}
                <div style={{backgroundImage: `url(${AICSImmigration})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                { /*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                           AICS Immigration
                    </span>
                    <div className=' pt-8 text-center'>
                        <a href="https://aicsimmigration.com/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                        </a>
                        <span>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                        </span>
                    </div>
                </div>
              </div>


                    {/*Grid Items */}
             <div style={{backgroundImage: `url(${peao})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
             { /*Hover Effects*/}
             <div className='opacity-0 group-hover:opacity-100'>
                 <span className='text-2xl font-bold text-white tracking-wider'>
                        Professionals and Entrepreneurs Association of Ontario
                 </span>
                 <div className=' pt-8 text-center'>
                     <a href="https://peao.ca/" target="_blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                     </a>
                     <span>
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                     </span>
                 </div>
             </div>
           </div>

                {/*Grid Items */}
                 <div style={{backgroundImage: `url(${azizifx})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 { /*Hover Effects*/}
                 <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                            International Currency Transfer Provider
                     </span>
                     <div className=' pt-8 text-center'>
                         <a href="https://azizifx.com/" target="_blank">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                         </a>
                         <span>
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                         </span>
                     </div>
                 </div>
               </div>

                {/*Grid Items */}
                <div style={{backgroundImage: `url(${oneshotmarketing})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                { /*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                           GROW YOUR BUSINESS WITH ONE-SHOT MARKETING
                    </span>
                    <div className=' pt-8 text-center'>
                        <a href="https://oneshotmarketing.ca/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                        </a>
                        <span>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                        </span>
                    </div>
                </div>
              </div>

              {/*Grid Items */}
                <div style={{backgroundImage: `url(${moonlightinsulation})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                { /*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                          Moon Light Sulation
                    </span>
                    <div className=' pt-8 text-center'>
                        <a href="https://moonlightinsulation.ca/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                        </a>
                        <span>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                        </span>
                    </div>
                </div>
              </div>

              {/*Grid Items */}
                <div style={{backgroundImage: `url(${promptplumbing})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                { /*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                            Prompt Plumbing
                    </span>
                    <div className=' pt-8 text-center'>
                        <a href="https://promptplumbingltd.ca/" target="_blank">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                        </a>
                        <span>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>GitHub</button>
                        </span>
                    </div>
                </div>
              </div>
             <br></br>
              <div className='flex justify-center bg-yellow-400 hover:border-yellow-400 font-bold uppercase text-black py-2 w-44 h-10 text-center border-2 '>
              <button><a href='https://docs.google.com/spreadsheets/d/1buwruUCC92KCCIHkzPYNMtgXAdz04LDeSU_IDOuC3Oc/edit?usp=sharing' target="_blank">Check More Work</a></button>
              </div>
          </div>
         
      </div>
    </div>
  )

}

export default Portfolio;