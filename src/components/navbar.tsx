import React, { useState } from "react";

const Navbar: React.FC = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
          <span className="text-3xl text-bold mr-1 pt-2">Logo</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={
                !open
                  ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          } `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 text-xl text-gray-700 hover:text-gray-500 duration-500 cursor-pointer"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
