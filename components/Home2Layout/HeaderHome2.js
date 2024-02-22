import React, { useState, useEffect } from "react";
import ChatComponent from "../chat";

const HeaderHome = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const handleNavigation = (route) => {
    setActiveLink(route);
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <img src="/assets/goda_logo.png"  className="h-10 w-auto" /> 
            <div className="px-3">Goda AI</div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <li onClick={() => handleNavigation("home")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "home" ? " text-blue-500 animation-active " : " text-black-500 hover:text-blue-500 a")}>Home</li>
            <li onClick={() => handleNavigation("chat")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "chat" ? " text-orange-500 animation-active " : " text-black-500  ")}>Chat</li>
            <li onClick={() => handleNavigation("profile")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "profile" ? " text-orange-500 animation-active " : " text-black-500  ")}>Profile</li>
          </ul>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <li onClick={() => handleNavigation("home")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "home" ? "  border-orange-500 text-orange-500" : " border-transparent")}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Trang chủ
            </li>
            <li onClick={() => handleNavigation("chat")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "chat" ? "  border-orange-500 text-orange-500" : " border-transparent ")}>
              <img src="/assets/goda_logo.png"  className="h-10 w-auto" /> 
              Chat
            </li>
            <li onClick={() => handleNavigation("profile")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "profile" ? "  border-orange-500 text-orange-500" : " border-transparent ")}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Cá nhân
            </li>
          </ul>
        </div>
      </nav>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
        {activeLink === "home" && <div>Content for Home page</div>}
        {activeLink === "chat" && <ChatComponent/>}
        {activeLink === "profile" && <div>Content for Profile page</div>}
      </div>
    </>
  );
};

export default HeaderHome;
