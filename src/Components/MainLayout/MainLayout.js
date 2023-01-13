import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BiCalendar, BiCog, BiLayout, BiLogOut } from "react-icons/bi";
import { BsRecordFill } from "react-icons/bs";
import "./MainLayout.css";

const MainLayout = () => {
  const [submenu, setSubmenu] = useState(false);
  const [searchbar, setSearchbar] = useState();
  const [closemenu, setCloseMnu] = useState(false);
  const [submenuid, setSubmenuid] = useState("");

  // const menuitemclick = document.getElementById("menuitemclick");

  const handleclick = () => {
    setCloseMnu(!closemenu);
  };

  const handlesubclick = (e) => {
    setSubmenu(!submenu);
    setSubmenuid("submenuclicked");
    console.log("e.target");
  };

  window.document.addEventListener("click", (e) => {
    if (e.target?.id !== "menuitemclick") {
      if (submenuid !== "submenuclicked") {
        setCloseMnu(false);
        setSubmenuid("");
      }else{
        setCloseMnu(true)
        setSubmenuid("");
      }

    }
  });
  

  return (
    <div>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div
          className={`lg:col-span-2 lg:relative lg:w-[100%] bg-primary lg:pl-0 lg:pr-0 min-h-[100vh] lg:block lg:justify-start  ${
            closemenu ? "md:block md:w-1/2 absolute top-0 left-0 z-50 w-[80vw] pl-12 pr-12" : "hidden"
          }`}
        >
          <div className="h-[80px] flex lg:justify-start justify-center lg:pl-12 text-white items-center">
            <img
              className="w-14 h-14"
              src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
              alt=""
            />
            <span className="text-3xl font-bold ml-3">NextGen</span>
          </div>
          <div>
            <div className="">
              <ul className="text-white mt-14 text-xl">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center lg:pl-12 py-1 my-1"
                    }
                  >
                    <BiLayout></BiLayout>{" "}
                    <span className="ml-2 ">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/attendance"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout>{" "}
                    <span className="ml-2 ">Attendance</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/employees"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout>{" "}
                    <span className="ml-2 ">Employees</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/leaves"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout> <span className="ml-2 ">Leaves</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/expense"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout> <span className="ml-2 ">Expense</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/notice"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout> <span className="ml-2 ">Notice</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/department"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#eeeeee49] flex justify-start items-center py-1 lg:pl-12 my-1"
                        : "flex justify-start items-center py-1 lg:pl-12 my-1"
                    }
                  >
                    <BiLayout></BiLayout>{" "}
                    <span className="ml-2 ">Departments</span>
                  </NavLink>
                </li>
                <li>
                  <ul className="text-white mt-8">
                    <li>
                      <NavLink
                        id="submenuclick"
                        onClick={handlesubclick}
                        className={`flex justify-start items-center my-1 lg:ml-6 -ml-7`}
                      >
                        {submenu ? (
                          <FaAngleDown></FaAngleDown>
                        ) : (
                          <FaAngleRight></FaAngleRight>
                        )}
                        <BiCog className="ml-2"></BiCog>{" "}
                        <span className="ml-2 ">Setting</span>
                      </NavLink>
                      <ul className={`${submenu ? "block" : "hidden"}`}>
                        <li className="flex justify-start items-center lg:pl-20 my-1">
                          <p>
                            <BsRecordFill className="w-[6px] mr-2"></BsRecordFill>
                          </p>
                          <p>Approval</p>
                        </li>
                        <li className="flex justify-start items-center lg:pl-20 my-1">
                          <p>
                            <BsRecordFill className="w-[6px] mr-2"></BsRecordFill>
                          </p>
                          <p>Leave</p>
                        </li>
                        <li className="flex justify-start items-center lg:pl-20 my-1">
                          <p>
                            <BsRecordFill className="w-[6px] mr-2"></BsRecordFill>
                          </p>
                          <p>Office Setting</p>
                        </li>
                        <li className="flex justify-start items-center lg:pl-20 my-1">
                          <p>
                            <BsRecordFill className="w-[6px] mr-2"></BsRecordFill>
                          </p>
                          <p>My Subscription</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="text-white flex justify-start items-center lg:pl-12 mt-6">
                  <BiLogOut className="text-white font-bold rotate-180"></BiLogOut>{" "}
                  <span className="ml-2 pb-1">Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* outlet  */}
        <div className="lg:col-span-10">
          <div className=" bg-[#FFFFFF] pl-12 pr-6">
            <div className="h-[80px] flex justify-between items-center">
              <div className="flex justify-start items-center">
                <div className="lg:hidden mr-3">
                  <label className="btn btn-circle swap swap-rotate">
                    <input
                      onClick={handleclick}
                      id="menuitemclick"
                      type="checkbox"
                    />
                    <svg
                      className="swap-off fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    <svg
                      className="swap-on fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                  </label>
                </div>
                <div className="btn-group rounded-r-md lg:flex hidden relative  lg:btn-group-horizontal">
                  {searchbar?.length > 0 ? (
                    ""
                  ) : (
                    <div className="absolute top-[6px] left-2">
                      <AiOutlineSearch className="w-5 h-5"></AiOutlineSearch>
                    </div>
                  )}
                  <input
                    onChange={(e) => setSearchbar(e.target.value)}
                    type="search"
                    placeholder="SEARCH"
                    className="pl-9 pr-2 rounded-l-md focus:outline-none text-[12px] lg:w-[300px] text-sm border "
                  />
                  <button className="btn btn-sm btn-primary rounded text-[12px] text-white">
                    Search
                  </button>
                </div>
              </div>
              <div>
                <ul className="flex justify-end items-center">
                  <li className="lg:hidden mr-4">
                    <AiOutlineSearch className="w-[30px] h-[20px]"></AiOutlineSearch>
                  </li>
                  <li className="mr-4">
                    <BiCalendar className="w-[30px] h-[20px]"></BiCalendar>
                  </li>
                  <li className="mr-4">
                    <div className="bellnotify">
                      <AiOutlineBell className="w-[30px] h-[20px] bellnotify block"></AiOutlineBell>
                    </div>
                  </li>
                  <li className="mr-2">
                    <div className="avatar">
                      <div className=" w-[50px] h-[50px] border rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-12 bg-[#F4F4F4] min-h-[90vh] mx-4 rounded">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
