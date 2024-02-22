"use client";
import {Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,PointElement,LineElement} from "chart.js";
import { ArcElement } from "chart.js";
import { dataBar, dataLine } from "@/public/data/data";
import dynamic from 'next/dynamic'
const Cards = dynamic(() => import('./_components/cards/page'))
const NewOrders = dynamic(() => import('./_components/newOrders/page'))
const NewUser = dynamic(() => import('./_components/newUser/page'))
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,LineElement,PointElement,ArcElement);
export default function Home() {
  return (
    <>
    <main className="flex ">
      <div className="mx-2 w-3/5 h-2/5">
        <Bar data={dataBar} />
        <div className="flex mt-4 w-4/1">
            <NewOrders/>
            <NewUser/>
        </div>
      </div>
      <div className="ml-3" >
        <Cards/>
        <div className="w-full h-64 ml-5
          ">
           <Line width={130} height={100} data={dataLine}   />
        </div>
      </div>
    </main>
    </>
  );
}
