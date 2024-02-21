"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { useAppContext } from '../_context/index';
import Cookies from "js-cookie";
import dynamic from 'next/dynamic'
import { OrderType, parentOrderType } from '@/type/type';
const UnauthorizedError = dynamic(() => import('../_components/UnauthorizedError/unauthorizedError'))
const Modale = dynamic(() => import('../_components/modale/page'))
const Pagination = dynamic(() => import('../_components/Pagination/page'))
function Orders ()  { 
  const { Orders} = useAppContext();
  const [items,setitems]= useState<Array<any>>([])
  const [messageError,setmessageError]=useState<boolean>(false)
  const [openModale,setopenModale]=useState<boolean>(false)
  const [oneOrder, setoneOrder] = useState<OrderType>({ id: "",_id: "",img:"",price:0,quantity:0,})
  const cookie = Cookies.get("cookie");
  const token = cookie ? atob(cookie) : null;
  console.log('host env',process.env.NEXT_PUBLIC_HOST)
  const handleOpenModal = (order: OrderType ) => {
    setopenModale(true)
    setoneOrder(order)
  }
  const role = Cookies.get('role');
  async function deletorder (id: string){
    try{
      const res = await fetch(process.env.NEXT_PUBLIC_HOST+id,{
      method:'DELETE',
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data= res.json()
    }catch(err){
      console.log('there was a problem with the fetch operation',err)
    }
  }
  const handileDelete = (orderId:string)=>{
    if(role !== "MANGER"){
      setmessageError(true);
    }else{
      deletorder(orderId)
      setitems((prevOrders) => prevOrders.filter((item) => item._id !== orderId))
    }
  }
  return (
    <>
    <UnauthorizedError messageError={messageError} setmessageError={setmessageError}/>
    <div className='p-5'>
      <div >
        {
          items.map((item:parentOrderType,index:number)=>
          <div key={index}>
            <div >
            <svg onClick={()=>handileDelete(item._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-trash3 hover:text-red-600 float-right my-4 cursor-pointer" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
            </div >
            <div className='w-11/12'>
            {
              
              item.items.map((item:OrderType ,index:number)=>
              <div className='flex items-center justify-between my-3' key={index}>
                <Image className='border-2 ' src={process.env.NEXT_PUBLIC_HOST+item.img} alt="Picture of the author" width={50} height={50} priority/>
                <p>Id Product :{item._id}</p>
                <p>Price: {item.price}</p>
                <p>quantity: {item.quantity}</p>
                <button onClick={()=>handleOpenModal(item)} className='bi bi-eye bg-purple-700 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                  </svg>
                </button>
              </div>)
            }
            </div>
          </div>)
        }
        {
          openModale && <Modale order={oneOrder} setopenModale={setopenModale} />
        }
      </div>
    </div>
    <Pagination items={Orders} setitemsPage={setitems} numberofitems={7} />
    </>
  )
}
export default React.memo(Orders)