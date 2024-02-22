
import React from "react";
import { useAppContext } from "../../_context/index";
import NumberCounter from "../animationCounte/page";
const Cards = () => {
    const { Orders } = useAppContext();
    const { Users } = useAppContext();
    return (
        <>
        <section className="flex my-3">
            <div className="w-40 mx-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 rounded-sm border-neutral-100 bg-purple-700 text-white p-2">
                    Users
                </div>
                <div className="p-2">
                    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    total Users
                    </p>
                    <NumberCounter endValue={Users.length || 0} />
                </div>
            </div>
            <div className="w-40 mx-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 rounded-sm border-neutral-100 bg-rose-800 text-white p-2">
                    Orders
                </div>
                <div className="p-2">
                    <p className="mb-4 text-sm text-neutral-600">total Order</p>
                    <NumberCounter endValue={Orders.length || 0} />
                </div>
            </div>
        </section>
        <section className="flex my-3">
            <div className="w-40 mx-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 rounded-sm border-neutral-100 bg-emerald-800 text-white p-2">
                    Products
                </div>
                <div className="p-2">
                    <p className="mb-4 text-sm text-neutral-600">total products</p>
                    <NumberCounter endValue={25} />
                </div>
            </div>
            <div className="w-40 mx-2 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 rounded-sm border-neutral-100 bg-yellow-500 text-white p-2">
                    Today&#39;s Orders
                </div>
                <div className="px-4 py-2">
                    <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    Orders
                    </p>
                    <NumberCounter endValue={Orders.slice(0, 5).length} />
                </div>
            </div>
        </section>
        </>
    );
};
export default Cards
