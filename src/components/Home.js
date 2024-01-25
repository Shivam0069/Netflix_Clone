import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
 
  const backgroundStyle = {
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", 
  };
  return (
   
    <div className="bg-black">
      <section
        style={backgroundStyle}
        className={` h-screen object-cover w-full`}
      >
        <div className=" max-w-6xl mx-auto ">
          <div className="flex justify-between ">
            <img src="/Netflix.png" className="h-20 w-48 ml-9" />
            <div className="flex space-x-5 mr-20">
              <select className="m-auto bg-transparent text-white px-4 py-1 border rounded-md">
                <option className="text-black" value="English">English</option>
                <option  className="text-black" value="Hindi">हिंदी</option>
              </select>
              <button  onClick={() => navigate('/login')} className=" bg-red-600 m-auto text-white px-3 py-1 text-md rounded-md">
                sign in
              </button>
            </div>
          </div>
          <div className="mt-32 ml-24 mr-10">
            <h1 className="text-5xl font-bold text-white text-center">
              Enjoy big movies, hit series and more from ₹149.
            </h1>
            <p className="text-white text-center mt-10 text-2xl font-semibold">
              Join today. Cancel anytime.
            </p>
            <p className="text-white text-xl text-center mt-10 font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="text-center mt-10">
              <button onClick={()=>navigate('/login')}  className="text-white bg-red-600 text-2xl px-3 py-1 rounded-md font-semibold h-12 w-48">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-20 mb-20 gap-1">
        <div className="items-start justify-center flex flex-col">
          <div className="text-white font-bold text-5xl mb-5">
            Enjoy on your TV
          </div>
          <div className="text-white text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>
        <div className="relative h-96">
          <img
            src="/tv.png"
            className="absolute top-0 right-0 w-full h-full z-1"
          />
          <video
            muted
            autoPlay
            loop
            className="absolute top-[33px] right-[71px] w-[73%] h-[79%] z-2"
          >
            <source src="/video2.m4v" type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-20 mb-20 gap-1">
        <div className="">
          <img src="/Mobile.jpg" className="  h-96 w-[1000px] " />
        </div>
        <div className="items-start justify-center flex flex-col">
          <div className="text-white font-bold text-[44px] mb-5">
            Download your shows to watch offline
          </div>
          <div className="text-white text-2xl">
            Save your favourites easily and always have something to watch.
          </div>
        </div>
      </div>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-20 mb-20 gap-1">
        <div className="items-start justify-center flex flex-col">
          <div className="text-white font-bold text-[44px] mb-5">
            Watch everywhere
          </div>
          <div className="text-white text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div className="relative h-[300px] w-[480px]">
          <img
            src="/Device.png"
            className=" absolute top-0 right-0 h-full w-full z-1  "
          />
          <video
            muted
            autoPlay
            loop
            className="absolute h-[170px] top-4 left-[82px]  z-2"
          >
            <source src="/video1.m4v" type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 mt-20 mb-20 gap-1">
        <div className="">
          <img src="/Children.png" className="  h-96 w-[1000px] " />
        </div>
        <div className="items-start justify-center flex flex-col">
          <div className="text-white font-bold text-[44px] mb-5">
            Create profiles for kids
          </div>
          <div className="text-white text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </div>
        </div>
      </div>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-6xl mx-auto mt-14">
        <div className="text-5xl font-bold text-white text-center">
          Frequently Asked Questions
        </div>
        <div className="mt-8">
          <div className="bg-[#414141] text-white text-2xl py-7 pl-5 mb-2">
            What is Netflix?
          </div>
          <div className="bg-[#414141] text-white text-2xl py-7 pl-4 mb-2">
            How much does Netflix cost?
          </div>
          <div className="bg-[#414141] text-white text-2xl py-7 pl-4 mb-2">
            Where can I watch?
          </div>
          <div className="bg-[#414141] text-white text-2xl py-7 pl-4 mb-2">
            How do I cancel?
          </div>
          <div className="bg-[#414141] text-white text-2xl py-7 pl-4 mb-2">
            What can I watch on Netflix?
          </div>
          <div className="bg-[#414141] text-white text-2xl py-7 pl-4 mb-2">
            Is Netflix good for kids?
          </div>
        </div>
        <div className="mt-10">
          <div className="text-white text-center text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="mb-20">
            <form className="text-center mt-5">
              <button
                onClick={() => navigate('/login')}
                className="text-white bg-red-600  text-2xl px-3 py-1 rounded-md font-semibold h-12 w-48"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] h-2"></div>
      <div className="max-w-6xl mx-auto text-[#B3B3AD] mt-16 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex space-x-1">
            <div className="">Questions? Call</div>
            <div className="underline">000-800-919-1694</div>
          </div>
          <div className="grid grid-cols-4 mt-5 gap-3 text-sm">
            <div className="underline">FAQ</div>
            <div className="underline">Help Center</div>
            <div className="underline">Account</div>
            <div className="underline">Media Centre</div>
            <div className="underline">Investor Relations</div>
            <div className="underline">Jobs</div>
            <div className="underline">Ways to Watch</div>
            <div className="underline">Terms of Use</div>
            <div className="underline">Privacy</div>
            <div className="underline">Cookie Preferences</div>

            <div className="underline">Corporate Information</div>
            <div className="underline">Contact Us</div>
            <div className="underline">Speed Test</div>
            <div className="underline">Legal Notices</div>
            <div className="underline">Only on Netflix</div>
          </div>
          <button className="text-white text-md border bg-[#0F0F0F] border-[#B3B3AD] rounded-md px-8 mt-5 py-1">
            English
          </button>
          <div className="mt-5 text-sm ">Netflix India</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
