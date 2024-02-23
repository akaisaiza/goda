import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-30 ">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex items-center">
            <img src="/assets/goda_logo.png" className="h-10 w-auto mb-6" />
            <div className="px-3">Goda AI</div>
          </div>

          <p className="mb-4">
            <strong className="font-medium">Goda AI</strong> là một ứng dụng hỗ trợ tìm kiếm các địa điểm đi chơi
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div> */}
            <div>
             Liên hệ qua : <a href="mailto:godaai.official.com"><strong className="font-medium">godaai.official.com</strong> </a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Goda AI</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Sản phẩm</p>
          <ul className="text-black-500 ">
            <li className="my-2  cursor-pointer transition-all">
              Tải xuống ứng dụng{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
              Miễn phí{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2  cursor-pointer transition-all">
              Goda AI ?{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
              Tính năng{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
              Về chúng tôi{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-whitle-500 cursor-pointer transition-all">
              Quảng cáo{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
              Trở thành đối tác{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
