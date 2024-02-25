import React, { useState, useEffect } from "react";
import ChatComponent from "../chat";
import Profile from "../Profile";
import HomeScreen from "../HomeScreen";
import PofileSVG from "../../public/assets/profile.svg"
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
            <img src="/assets/goda_logo.png" className="h-10 w-auto" />
            <div className="px-3">Goda AI</div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0ehMYR7XkkZq4KMuPRDKXuYevHvAkaYmLAvbfIbimRuVlSg/viewform" className="md:hidden px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-blue-500">Đánh giá chúng tôi</a>

          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <li onClick={() => handleNavigation("home")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "home" ? " text-blue-500 animation-active " : " text-black-500 hover:text-blue-500 a")}>Trang chủ</li>
            <li onClick={() => handleNavigation("chat")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "chat" ? " text- blue-500 animation-active " : " text-black-500  ")}>Trợ lí Goda AI</li>
            <li onClick={() => handleNavigation("profile")} className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" + (activeLink === "profile" ? " text- blue-500 animation-active " : " text-black-500  ")}>Cá nhân</li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0ehMYR7XkkZq4KMuPRDKXuYevHvAkaYmLAvbfIbimRuVlSg/viewform" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-blue-500">Đánh giá chúng tôi</a>
            </li>
          </ul>

        </nav>
        {/* <button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none hover:bg-blue-600">
                        <img src="/assets/goda_logo.png" className="h-10 w-auto" />

          </button> */}
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <li onClick={() => handleNavigation("home")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "home" ? "  border- blue-500 text- blue-500" : " border-transparent")}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-6 w-6" viewBox="0 0 50 50 ">
                <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
              </svg>
              Trang chủ
            </li>
            <li onClick={() => handleNavigation("chat")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "chat" ? "  border- blue-500 text- blue-500" : " border-transparent ")}>
              <img src="/assets/goda_logo.png" className="h-10 w-auto" />
              Chat
            </li>
            <li onClick={() => handleNavigation("profile")} className={"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "profile" ? "  border- blue-500 text- blue-500" : " border-transparent ")}>
              <PofileSVG className="h-8 w-8" />
              Cá nhân
            </li>
          </ul>
        </div>
      </nav>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
        {activeLink === "home" && <HomeScreen openChat={handleNavigation} />}
        {activeLink === "chat" && <ChatComponent />}
        {activeLink === "profile" && <Profile />}
      </div>
    </>
  );
};

export default HeaderHome;
