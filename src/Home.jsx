// shared components from scr folder
import Container from "./shared/container/Container"


// courousel images at line 168 - 201
import speech1 from "../src/images/speech1.jpg";
import speech2 from "../src/images/speech2.jpg";
import quote1 from "../src/images/quote1.jpg";
import feed1 from "../src/images/feed1.jpeg";
import feed2 from "../src/images/feed2.jpeg";
import reverts from "../src/images/reverts.jpeg";
import heroes from "../src/images/heroes.jpeg";
import ramahif from "../src/images/ramahif.jpeg";
import greeter from "../src/images/greeter.jpg"

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'




import { Carousel } from "@material-tailwind/react";


function Home() {

  // const notify = () => toast("please call or message this number!");

  const policy = () =>{

    Swal.fire({
      title: "Registration Policies",
      html: "(1)compulsory registration fee of 3,000 should be made to the account of the madrasah before given test, after which the student will be added to her appropriate class. <br/><br/>(2)Evidence of payment should be sent to the accountant on whatsapp via 08133128088 after which a form will be sent to the student to fill. <br/><br/>(3)payment of madrasah fee starts from the beginning of every month till the 29th day of the month.<br/><br/>(4)Anyone who will not be able to meetup payment deadline should talk to the accountant before the due date as delayed payment attracts 2,000 fine.<br/><br/>(5)Anyone who refuses to pay without pre-informing the accountant maybe removed from the class group.<br/><br/>(6)Please try to participate actively and follow the rules and regulations of the class.",
      color: "white",
      background: "#431146"
    });
  }



  const tahfeez = () =>{

    Swal.fire({
      title: "TAHFEEZ CLASS 1",
      html: "(General Classes) </br></br> Juz Mujaadila </br></br> Time: 6:15-7am",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146"
    });
  }

  const general = () =>{

    Swal.fire({
      title: "GENERAL CLASS",
      html: "Hifz,Khattu,Imla,Tajweed,Adab,Hadeeth,Arabiyyah,</br> Tilaawah/Qiraa'ah, 8.Adab </br></br> Time: 8:00-10:30am",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146"
    });
  }

  const grandMa = () =>{

    Swal.fire({
      title: "GRANDMAS CLASS",
      html: "Hifz,Khattu,Imla,Tajweed,Hadeeth,Arabiyyah,Tilaawah/Qiraa'ah,Adab,Aqeedah </br></br><strong>BUSY WIVES CLASS</strong></br></br>Hifz,Tilaawah,Tajweed",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146",
    });
  }

  const prive = () =>{

    Swal.fire({
      title: "PRIVATE CLASS",
      html: "Hifz,Khattu,Imla,Tajweed,Hadeeth,Arabiyyah,Tafsir,</br> Tilaawah/Qiraa'ah, 8.Adab  </br></br>Note: class days are negotiable </br></br>Once Weekly: 12,000 </br>Twice Weekly: 20,000 </br>Thrice Weekly: 28,000 </br>Monthly: 36,000",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146"
    });
  }

  const tahfeez2 = () =>{

    Swal.fire({
      title: "TAHFEEZ CLASS 2",
      html: "(private Classes) </br></br> Any surah </br></br> Time: Is negotiable",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146"
    });
  }


  const kids = () =>{

    Swal.fire({
      title: "KIDDIES CLASS",
      html: "(General Classes) </br>Pre-Nursery,nursery,Primary </br></br>Time:10-12:30pm <br/><br/> Notice: two or more kids attract 5% discount on total fee per semester only.",
      imageUrl: "https://i.postimg.cc/RVyytphd/zully-modified.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "zully-modified",
      color: "white",
      background: "#431146"
    });
  }
  
 
  return (
    <Container>
      {/* Introductry  text  from line 28 - 165*/}
      <div className="bg-[#f9dde8]">
       <div className="text-center font-extrabold  text-[#38103d] p-[1.5rem]">
        <div className="lg:text-[2.2rem] sm:text-sm">
          THE ZULAYKHA GLOBAL ACADEMY
        </div>
        <div className="lg:text-[1.9rem] lg:my-[1rem] sm:text-sm">ONLINE AND PHYSICAL CLASSES</div>
        <div className="lg:text-[1rem] sm:text-sm">
          ...building unique and pious women
        </div>
      </div> 


      

      <div className="text-center mt-[2rem]">
      {/* <ToastContainer /> */}
        <div className="text-[1rem]">
          Strictly for disciplined and morally upright muslim sisters,wives and
          mothers
        </div>
        <div className="text-[1rem]">Enroll your family for better future</div>
      </div>

       {/* registration policy */}

       <div className="text-center font-semibold my-[2rem]">
        <p>kindly <span className="text-blue-500 cursor-pointer hover:opacity-50" onClick={policy}>read</span> our registration policy</p>
       </div>

      {/* section3  available classes*/}
      <div className="mt-[3rem] flex justify-center">
        <div
          className="font-extrabold bg-[#f2878c] p-2 text-[#fdf7fb] w-[13rem] text-center text-[0.9rem] rounded"
        >
          AVAILABLE CLASSES ARE:
        </div>
      </div>











      <Carousel className="rounded-xl w-[30rem]">
      <img
        src={reverts
        }
        alt="reverts"
        className="h-full w-full object-cover"
      />
      <img
        src={reverts}
        alt="reverts"
        className="h-full w-full object-cover"
      />
      <img
        src={reverts}
        alt="reverts"
        className="h-full w-full object-cover"
      />
    </Carousel>














      <div id="indicators-carousel" className="relative w-[30rem]" data-carousel="static">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={reverts} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts"/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={reverts} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts"/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={reverts} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts"/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={reverts} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts"/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={reverts} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts"/>
        </div>
    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
































                          {/* class details line 145 to 275 */}
      <div className=" md:block justify-center  gap-5 lg:flex  justify-center  sm:block p-5">

        {/* genral class */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146] pt-2  rounded-lg font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[10rem]">
            GENERAL CLASS
          </div>
          <div onClick={general} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div className="my-[1rem] flex-col text-blue-300">
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">monthly</p><p>N12,000</p><p className="text-[#E99625]">semester</p><p>N42,000</p><p>sat and sun</p></div>
              <div>
                <button  className="bg-[#441d49] animate-bounce focus:animate-none hover:animate-none hover:opacity-50  border-dotted border-2 py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
              </div>
            </div>
          </div>
        </div>
       
        {/* private class */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146] pt-2  rounded-lg font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[11rem] text-[1.1rem]">
            PRIVATE CLASS
          </div>
          <div onClick={prive} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div className="my-[1rem] flex-col text-blue-300">
            <div className="">
            <div className="p-3 font-extrabold"><p>monthly</p><p className="text-[#E99625]">4 days per week</p><p>N36,000</p><p className="text-[#E99625]">duration:</p><p>1hr 30min</p></div>
              <div>
                <button  className="bg-[#441d49] animate-bounce border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
              </div>
            </div>
          </div>
        </div>
       
        {/* tahfeez class 1 */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146]  rounded-lg font-semibold text-[#3a1642] text-center pt-2  hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[11.1rem]">
            TAHFEEZ CLASS 1
          </div>
          <div onClick={tahfeez} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div className=" flex-col bg-[#431146] rounded-lg">
            <div className="mt-[1rem]">
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">monthly</p><p className="text-blue-300">N12,000</p></div>
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">mon-fri</p><p className="text-[#E99625]">duration:</p><p className="text-blue-300">40min</p></div>
              <div className="p-3">
                <button  className="bg-[#441d49] animate-bounce border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none   py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* tahfeez class 2 */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146] pt-2 rounded-lg font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[11rem]">
            TAHFEEZ CLASS 2
          </div>
          <div onClick={tahfeez2} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div className="my-[1rem] flex-col text-blue-300">
        
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">monthly <br />weekends</p><p>N10,000</p><p className="text-[#E99625]">weekdays</p><p>N18,000</p></div>

              <div>
                <button   className="bg-[#441d49] animate-bounce border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                 <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* kiddies class */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146] pt-2 rounded-lg font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[10rem] text-[1.1rem]">
            KIDDIES-CLASS
          </div>
          <div onClick={kids} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div id="classdays" className="my-[1rem] flex-col text-blue-300">
            <div className="">
              <div className="p-3 font-extrabold"><p className="text-[#E99625]">monthly</p><p>N12,500</p><p className="text-[#E99625]">semester</p><p>N45,000</p></div>
                <button  className="bg-[#441d49] animate-bounce border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
            </div>
          </div>
        </div>

        {/* grandmas and busy wives class */}
        <div className="my-[2rem] border drop-shadow-lg bg-[#431146] pt-2  rounded-lg font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49]  text-[#fdf7fb] w-[11.1rem] sm:flex-justify-center">
            GRANDMAS... CLASS
          </div>
          <div onClick={grandMa} className="text-yellow-200 cursor-pointer p-2 hover:opacity-50">(read more)</div>
          <div className="flex-col text-blue-300">
            <div className="mt-[1rem]">
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">monthly</p><p>N12,000</p></div>
            <div className="p-3 font-extrabold"><p className="text-[#E99625]">mon-fri</p><p className="text-[#E99625]">duration:</p><p>40min</p></div>
              <div className="p-3">
                <button  className="bg-[#441d49] animate-bounce border-dotted border-2 hover:opacity-50 focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                <a href="http://wa.me/2348133128088">08133128088</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* service days   from 278 - 290*/}
      <div className="flex justify-center my-[2rem]">
        <div className="border-[0.2rem] rounded border-[#f2878c] font-semibold text-[#3a1642] text-center">
          <div className="font-extrabold bg-[#f2878c] text-[#fdf7fb] md:w-[45rem] sm:w-[40rem] text-[0.9rem]">
            CLASS-DAYS
          </div>
          <div className="my-[1rem]">
            <div>Saturdays & Sundays</div>
            <div className="bg-[#3a1642] text-[#fdf7fb] font-bold">Time: WAT Zone</div>
            <div>8-10:30am</div>
          </div>
        </div>
      </div>

      {/* carousel div  at line  295 to 360 */}
      

<div className="flex justify-center my-[2rem] px-[1rem]">
<div id="default-carousel" className="relative w-[40rem]" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={quote1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="quote1" />
        </div>
        
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={feed2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="feed2" />
        </div>
        
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={feed1} className="absolute block w-full sm:h-[26rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="feed1" />
        </div>
        
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={speech2} className="absolute block w-full sm:h-[28rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="speech2" />
        </div>
        
        <div className="hidden duration-1000  ease-in-out" data-carousel-item>
            <img src={speech1} className="absolute block w-full sm:h-[28rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="speech1" />
        </div>

        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={reverts} className="absolute block w-full sm:h-[26rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reverts" />
        </div>

        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={heroes} className="absolute block w-full sm:h-[26rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="heroes" />
        </div>

        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={ramahif} className="absolute block w-full sm:h-[26rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="ramahif" />
        </div>

        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img src={greeter} className="absolute block w-full sm:h-[26rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="ramahif" />
        </div>
    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
    </div>
  
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

</div>


      {/*marquee-Element..... className activities  at 255 - 276 */}
      
        <marquee>
          <div className="flex gap-5 text-[#ffff]">
            
            <div className="bg-[#f2878c] w-[20rem] rounded text-center p-2 font-semibold">
               <a href="https://web.facebook.com/photo/?fbid=791221536355756&set=a.456047979873115">Feed muslims in Ramadan</a>
            </div>
            <div className="bg-[#f2878c] w-[29rem] rounded text-center p-2 font-semibold">
              <a href="#classdays">
                Class Days: Saturdays and Sundays.Time: 8:00am-10:00am
              </a>
            </div>
            
            <div className="bg-[#f2878c] w-[29rem] rounded text-center p-2 font-semibold">
              <a href="http://wa.me/2348133128088">
                kindly join our whatsapp group for daily spiritual updates
              </a>
            </div>
          </div>
        </marquee>
        </div>
    </Container>
  );
}
export default Home;
