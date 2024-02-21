import React from 'react'
import Image from 'next/image'
import { OrderType } from '../../../type/type';
const Modale = ({order,setopenModale}:{ order: OrderType, setopenModale: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <div aria-hidden="true" className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
            <div className='relative w-full cursor-pointer pointer-events-none transition p-4 mt-48'>
                <div className='flex w-1/3 text-center p-4 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto '>
                    <Image className='w-1/2' src={process.env.NEXT_PUBLIC_HOST+order.img} alt="Picture of the author" width={100} height={100} priority/>
                    <section className='text-start'>
                        <p>Price: {order.price}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Id Product: {order.id}</p>
                        <button className='absolute top-4 right-5 text-red-500' onClick={() => setopenModale(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="nonzero" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modale