import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import './Home.css'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const data = [
  {
    name: "Nov 1",
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Nov 4",
    uv: 1800,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Nov 8",
    uv: 2300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nov 12",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov 16",
    uv: 2500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Nov 20",
    uv: 2200,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Nov 24",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov 28",
    uv: 700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov 30",
    uv: 3590,
    pv: 4300,
    amt: 2100,
  },
];



const Home = () => {
    const [companystatus, setCompanystatus] = useState()
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(`companystatus.json`)
        .then(res => res.json())
        .then(data => {
            setCompanystatus(data[0]);
            setLoading(false)
        })
    },[])

  return (
    <div>
      <h4 className="text-[30px] font-bold leading-8">Dashboard</h4>

      <div className="mt-12">
        <h5 className="mb-3 font-bold">Company Status</h5>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {loading ? (
            <div>Loading....</div>
          ) : (
            companystatus?.companystatus?.map((item, idx) => (
              <div key={idx} className="bg-white rounded-md p-[26px] ">
                <div className="flex justify-start items-center mb-[20px]">
                  <FaUsers></FaUsers>
                  <span className="text-[#A5A5A5] text-sm capitalize ml-2">
                    {item?.title}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-[43px]">
                  <p className="text-[36px] font-bold">{item?.totalemployee}</p>
                  <button className="btn btn-sm text-[12px] text-white btn-primary rounded-md capitalize">
                    view all
                  </button>
                </div>
                <hr className="mb-[23px]" />
                <div>
                  <div className="avatar-group -space-x-3">
                    <div className="avatar">
                      <div className="w-8 h-8">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 h-8">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 h-8">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 h-8">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8 h-8">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-8 h-8 bg-neutral-focus text-neutral-content">
                        <span>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <h5 className="mb-3 font-bold">Expense Report</h5>
            <div className="bg-white rounded p-[20px]">
              <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center">
                <div>
                  <ul className="flex text-sm justify-start items-center md:ml-12 lg:ml-12 text-slate-500">
                    <li className="text-sm mr-2">Day</li>
                    <li className="text-sm mr-2">week</li>
                    <li className="text-sm mr-2">Month</li>
                    <li className="text-sm mr-2">Year</li>
                  </ul>
                </div>
                <button className="btn btn-sm btn-primary lg:mb-0 mb-2 text-white capitalize">
                  Expport Details
                </button>
              </div>
              <div className="text-[10px]">
                <p className="text-[26px] lg:ml-12 md:ml-12 text-center lg:text-start md:text-start lg:mb-0 mb-2 font-bold">
                  ৳45,000
                </p>
                <ResponsiveContainer height={230}>
                  <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 0,
                      right: 20,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#4f48d8be"
                          stopOpacity={1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d873"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#1509f0fd"
                      fill="url(#colorUv)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="mb-3 font-bold">Task Summary</h5>
            <div className=" border-dashed border-2 border-primary rounded lg:w-1/2 p-[16px]">
              <p>Total task</p>
              <p className="font-bold">112</p>

              <div className="mb-5">
                <div className="mt-[28px]">
                  <p className="mb-1">Completed</p>
                  <div className="mainproggress">
                    <p className={`after:w-[60%] `}>
                      {" "}
                      <span className="text-slate-400">50</span>/80
                    </p>
                  </div>
                </div>
                <div className="mt-[28px]">
                  <p className="mb-1">In Proggress</p>
                  <div className="mainproggress">
                    <p className="after:w-[5%] ">15/112</p>
                  </div>
                </div>
                <div className="mt-[28px]">
                  <p className="mb-1">Pending</p>
                  <div className="mainproggress">
                    <p className="after:w-[30%]">30/80</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
