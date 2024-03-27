import facebook from "../../images/facebook.svg"
import whatsapp from "../../images/whatsapp.png";
import twitter from "../..//images/twitter.svg";
import instagram from "../../images/instagram.svg";
import gmail from "../../images/gmail.png";

const Footer = () => {
  const today = new  Date()
  const  year = today.getFullYear()
  const  month = today.getMonth ()
  const  day = today.getDate()


  return (
<>
<div id="aboutus" className=" flex justify-center bg-[#5f266d] text-white font-semibold my-[1rem] p-2">
    <div className="lg:w-[68rem] sm:text-sm lg:text-[1.1rem]">
      <p>
        The Zulaykha Global Academy* always offers *variety* for you
        because, of course!, your convenience is always our *priority*
        <br />
        let{"'"}s maximize this opportunity and learn to memorize the Glorious
        Book of Allah alongside freebies like _hadeeth, arabiyyah, tajweed
        rulings etc etc
      </p>
      <p>
        It{"'"}s believed that kids who memorize the Holy Quran have much better
        writing skills than their peers, as they store much vocabulary in
        their minds to use. It{"'"}s also believed that they have a better
        memory due to the practice of memorizing!
      </p>
      <p>
        Wouldn{"'"}t you love to wear the crown of honour on that day? The regal
        wear for parents of the hufaaz?
      </p>
    </div>
  </div>

  <div className="md:flex justify-evenly bg-[#431146] sm:text-sm  my-[-1rem] text-[#fdf7fb] lg:text-[1.1rem]  p-3 font-semibold sm:block">
    <div className="text-[#e99625]" id="contactus">
      <div className="text-[#ffff] my-[0.7rem]">Contact</div>
      <div>+2348133128088</div>
      <div>+2348035791134</div>
      
    </div>
    <div className="text-[#e99625] my-[0.7rem]">
      <div className="text-[#ffff]">Location</div>
      <div>Lagos</div>
      <div>35,Arobadade,after sawmill,Bariga</div>
    </div>
    <div className="text-[#e99625] my-[0.7rem]">
      <div className="text-[#ffff]">Connect</div>
      <div className="flex gap-2">
        <img
          src={gmail}
          alt="gmail"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="madrasahzulaykha@gmail.com">madrasahzulaykha@gmail.com</a>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={facebook}
          alt="facebook"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="https://web.facebook.com/Madrasatuzulaykha/about">
          The zulaykha Global Academy
          </a>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={instagram}
          alt="zully"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://bit.ly/3uOCOdD">The zulaykha_Global_Academy</a>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={twitter}
          alt="zully"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://bit.ly/3LLeijN">The zulaykha_Global_Academy</a>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={whatsapp}
          alt="zully"
          className="h-[2rem] w-[2rem] rounded-full"
        />
        <div>
          <a href="http://wa.me/2348133128088">
            The zulaykha_Global_Academy
          </a>
        </div>
      </div>
    </div>
    
  </div>
  <div className="text-center p-10 fonts-semibold bg-[#e99625] text-[0.8rem] text-[#fdf7fb]">Copyright © {`${year}`}.
   All rights reserved | Zulaykha_Global_Academy <br />
  <span className="bg-black-500 font-bold">{`${day} - ${month +1} - ${year} `}</span></div>
</>
  )
}

export default Footer