import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaCog, FaEye } from 'react-icons/fa';
import './Attendance.css'

const Attendance = () => {
  const [paginationid, setPaginationid] = useState(2)
  const [loading, setLoading] = useState(false)
  const [tabledata, setTabledata] = useState()

  useEffect(() => {
    setLoading(true);
    fetch(`companystatus.json`)
      .then((res) => res.json())
      .then((data) => {
        setTabledata(data[0]);
        setLoading(false);
      });
  }, []);

    return (
      <div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center ">
          <h4 className=" lg:text-[26px] text-3xl font-bold">Attendance</h4>
          <div className="flex justify-end items-center">
            <button className="btn btn-sm btn-primary capitalize mr-8 text-white rounded">
              Report Download
            </button>
            <button className="btn bg-transparent border-0 hover:bg-transparent">
              <FaCog className="text-primary w-7 h-7"></FaCog>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 my-2">
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Jan 03, 2023</div>
              <AiOutlineCalendar></AiOutlineCalendar>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Department</div>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Attendance</div>
              <FaAngleDown></FaAngleDown>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Present</div>
              <FaAngleDown></FaAngleDown>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 my-8">
            <div>
              <div className="bg-white p-3 rounded border-2">Check In</div>
            </div>
            <div>
              <div className="bg-white p-3 rounded border-2">Location</div>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Designation</div>
              <FaAngleDown></FaAngleDown>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded border-2">
              <div className="">Department</div>
              <FaAngleDown></FaAngleDown>
            </div>
          </div>
        </div>

        {/* last method */}
        <div className="mt-[60px]">
          <div className="overflow-x-auto w-full bg-white p-3 rounded">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="bg-white border-b-2 w-[30px]">
                    <label>
                      <input type="checkbox" />
                    </label>
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Employee Name
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Department
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Check In
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Check Out
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Remarks
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Hours
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Overtime
                  </th>
                  <th className="bg-white font-semibold text-slate-400 border-b-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <th>Loading...</th>
                  </tr>
                ) : (
                  tabledata?.employestatus?.map((item, idx) => (
                    <tr key={idx} className="hover">
                      <th>
                        <label>
                          <input type="checkbox" />
                        </label>
                      </th>
                      <td>Joen Doe</td>
                      <td>HR & Admin</td>
                      <td>
                        <span
                          className={`${
                            item?.checkin.split(":")[0] <= 9 &&
                            item?.checkin.split(":")[1].split(" ")[0] < 46
                              ? "bg-green-600 text-sm rounded-[10px] px-2 text-white"
                              : "rounded-[10px] px-2 text-white bg-red-600"
                          }`}
                        >
                          {item?.checkin}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`${
                            item?.checkout.split(":")[0] > 6
                              ? "bg-green-600 text-sm rounded-[10px] px-2 text-white"
                              : "rounded-[10px] px-2 text-white bg-red-600"
                          }`}
                        >
                          {item?.checkout}
                        </span>
                      </td>
                      <td>
                        {item?.checkout.split(":")[0] < 6 && (
                          <img src="docicon.png" alt="" />
                        )}
                        {item?.checkin.split(":")[0] >= 10 && (
                          <img src="docicon.png" alt="" />
                        )}
                      </td>
                      <td></td>
                      <td></td>
                      <th>
                        <button className="btn btn-ghost text-xl btn-xs">
                          <FaEye className=''></FaEye>
                        </button>
                      </th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="flex justify-end mt-6 mb-6 lg:mr-12">
              <div className="btn-group ">
                <button
                  onClick={() =>
                    paginationid > 1 ? setPaginationid(paginationid - 1) : ""
                  }
                  className="btn bg-white text-slate-900 border-0 btn-sm hover:bg-slate-400 hover:text-white"
                >
                  <FaAngleLeft></FaAngleLeft>
                </button>
                {[...Array(5)].map((item, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => setPaginationid(idx + 1)}
                      className={` ${
                        paginationid === idx + 1
                          ? "bg-slate-300 rounded-[7px] text-white"
                          : "bg-white"
                      }  btn-sm border-0 hover:rounded-[7px] hover:text-white hover:bg-slate-300`}
                    >
                      <span className="text-black ">{idx + 1}</span>
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    paginationid < 5
                      ? setPaginationid(paginationid + 1)
                      : setPaginationid(5)
                  }
                  className="btn bg-white text-slate-900  border-0 btn-sm hover:bg-slate-400 hover:text-white"
                >
                  <FaAngleRight></FaAngleRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Attendance;