import React from 'react'
import { useAppContext } from "../../_context/index";
import Link from "next/link";
import Image from "next/image";
import { OrderType} from "../../../type/type";
function NewOrders () {
    const { Orders } = useAppContext();
    const newOrder = Orders.slice(0, 3);
    return (
        <div className="w-72 bg-white border border-gray-200 rounded-lg shadow sm:px-4 sm:py-3">
        <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
            New Orders
        </h5>
        <Link
            className="text-sm font-medium text-purple-700 hover:text-purple-500 mt-1 ml-2 "
            href="/orders"
        >
            View all
        </Link>
        </div>
        <div className="flow-root">
        <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
        >
            {newOrder.map((item:any, index: number) => (
            <div key={index}>
                {item.items.map((order:OrderType, index: number) => (
                <li key={index} className="py-3 sm:py-2 ">
                    <div className="flex items-center ">
                    <div className="flex-shrink-0 ">
                        <Image
                        className="border p-1 w-10 h-10 rounded-full"
                        src={`${process.env.NEXT_PUBLIC_HOST+order.img}`}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        priority
                        />
                    </div>
                    <div className="flex-1 text-center min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Quantity: {order.quantity}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $ {order.price}
                    </div>
                    </div>
                </li>
                ))}
            </div>
            ))}
        </ul>
        </div>
    </div>
    )
}

export default NewOrders
