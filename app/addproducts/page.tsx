'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import * as jsCookie from 'js-cookie';
import {DataCollection} from "../../type/type"
import dynamic from 'next/dynamic'
const UnauthorizedError = dynamic(() => import('../_components/UnauthorizedError/unauthorizedError'))

const Addproducts = () => {
  const [imgbrand,setimgbrand]=useState(null)
  const [fileimg1,setimg1]=useState(null)
  const [fileimg2,setimg2]=useState(null)
  const [fileimg3,setimg3]=useState(null)
  const [messageError,setmessageError]=useState<boolean>(false)
  const [dataCollection, setdataCollection] = useState<DataCollection>({
    rating: 0,
    discount: 0,
    price: 0,
    quantity:1,
    oldprice: 0,
    type: '',
    title: '',
    brandname: '',
    taxStatus: '',
    returnPolicy: '',
    popularity:'',
    new: 'New',
    brandstatus: '',
    title_ar: '',
    brandname_ar: '',
    taxStatus_ar: '',
    returnPolicy_ar: '',
    popularity_ar:'',
    new_ar: 'جديد',
    brandstatus_ar: '',
  });
  const handleFileChange = (e: any, imgKey:string) => {
    const file = e.target.files[0];
      switch (imgKey) {
        case 'imgbrand':
          setimgbrand(file);
          break;
        case 'img1':
          setimg1(file);
          console.log(file)
          break;
        case 'img2':
          setimg2(file);
          break;
        case 'img3':
          setimg3(file);
          break;
        default:
          break;
      }
  };
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setdataCollection((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    //data to be sent
    const formData =new FormData();
    formData.append('rating', dataCollection.rating.toString());
    formData.append('price', dataCollection.price.toString());
    formData.append('quantity', dataCollection.quantity.toString());
    formData.append('discount', dataCollection.discount.toString());
    formData.append('oldprice', dataCollection.oldprice.toString());
    formData.append('type', dataCollection.type);
    formData.append('title', dataCollection.title);
    formData.append('brandname', dataCollection.brandname);
    formData.append('taxStatus', dataCollection.taxStatus);
    formData.append('returnPolicy', dataCollection.returnPolicy);
    formData.append('popularity', dataCollection.popularity);
    formData.append('new', dataCollection.new);
    formData.append('brandstatus', dataCollection.brandstatus);
    formData.append('title_ar', dataCollection.title_ar);
    formData.append('brandname_ar', dataCollection.brandname_ar);
    formData.append('taxStatus_ar', dataCollection.taxStatus_ar);
    formData.append('returnPolicy_ar', dataCollection.returnPolicy_ar);
    formData.append('popularity_ar', dataCollection.popularity_ar);
    formData.append('new_ar', dataCollection.new_ar);
    formData.append('brandstatus_ar', dataCollection.brandstatus_ar);
    formData.append('imgbrand', imgbrand ?? '');
    formData.append('img1', fileimg1 ?? '');
    formData.append('img2', fileimg2 ?? '');
    formData.append('img3', fileimg3 ?? '');
  async function sendData() {
    const encodertoken = jsCookie.default.get('cookie');
    const token = encodertoken ? atob(encodertoken) : null;
    try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    setmessageError(true)
  } catch (error) {
    console.error('Error during fetch:', error);
  }
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await sendData();
  };
  return (
    <>
      <UnauthorizedError messageError={messageError} setmessageError={setmessageError}/>
      <form  onSubmit={handleSubmit}  className=" bg-white p-8 rounded shadow-md">
      <div className='grid grid-cols-3 gap-3'>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Reating:</label>
        <input
          type="number"
          name="rating"
          value={dataCollection.rating}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min={1}
          max={5}
          required
        />
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Discount:</label>
          <input
            type="number"
            name="discount"
            required
            value={dataCollection.discount}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min={1}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">price:</label>
          <input
            type="number"
            name="price"
            required
            value={dataCollection.price}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min={1} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Old Price:</label>
          <input
            type="number"
            name="oldprice"
            required
            value={dataCollection.oldprice}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min={1}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
          <input
            type="text"
            name="type"
            required
            value={dataCollection.type}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">title English:</label>
          <input
            type="text"
            name="title"
            required
            value={dataCollection.title}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brand Name:</label>
            <input
              type="text"
              name="brandname" 
              required
              value={dataCollection.brandname}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">tax Status:</label>
          <input
            type="text"
            name="taxStatus"
            required
            value={dataCollection.taxStatus}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Return Policy:</label>
          <input
            type="text"
            name="returnPolicy"
            required
            value={dataCollection.returnPolicy}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brand Status:</label>
          <input
            type="text"
            name="brandstatus"
            required
            value={dataCollection.brandstatus}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">title Arabic:</label>
          <input
            type="text"
            name="title_ar"
            required
            value={dataCollection.title_ar}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brand Name Arabic:</label>
          <input
            type="text"
            name="brandname_ar"
            required
            value={dataCollection.brandname_ar}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">taxStatus Arabic:</label>
          <input
            type="text"
            name="taxStatus_ar"
            required
            value={dataCollection.taxStatus_ar}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">returnPolicy Arabic:</label>
          <input
            type="text"
            name="returnPolicy_ar"
            required
            value={dataCollection.returnPolicy_ar}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brandstatus Arabic:</label>
          <input
            type="text"
            name="brandstatus_ar"
            required
            value={dataCollection.brandstatus_ar}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">popularity</label>
          <select 
          id="popularity"
          name="popularity"
          required
          value={dataCollection.popularity}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white">
            <option value="Bestseller">Bestseller</option>
            <option value="Most popler">Most Popular</option>
            <option value="Tranding">Tranding</option>
          </select>
          </div>
        <div className="mb-4">
          <label htmlFor="popularity_ar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">popularity Arabic</label>
          <select 
          id="popularity_ar"
          name="popularity_ar"
          required
          value={dataCollection.popularity_ar}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white">
            <option value="الاكثر مبيعا">الاكثر مبيعا</option>
            <option value="الاكثر شعبية">الاكثر شعبية </option>
            <option value="الشائع">الشائع</option>
          </select>
          </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-1/4 mb-4'>
          <div className="mx-auto max-w-xs">
            <label htmlFor='imgbrand' className=" mb-1 block text-sm font-medium text-gray-700">Img brand</label>
            <input 
            required
            onChange={(e) => handleFileChange(e, 'imgbrand')}
            type="file" 
            id='imgbrand'
            name='imgbrand'
            className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-950 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
          </div>
        </div>
        <div className='w-1/4 mb-4'>
          <div className="mx-auto max-w-xs">
            <label htmlFor='img1' className="mb-1 block text-sm font-medium text-gray-700">Img 1 </label>
            <input 
            id='img1'
            name='img1'
            required
            onChange={(e) => handleFileChange(e, 'img1')} 
            type="file" 
            className=" mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-950 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
          </div>
        </div>
        <div className='w-1/4 mb-4'>
          <div className="mx-auto max-w-xs">
            <label htmlFor='img2' className="mb-1 block text-sm font-medium text-gray-700">Img 2</label>
            <input 
            required
            onChange={(e) => handleFileChange(e, 'img2')}
            id='img2'
            name='img2'
            type="file" 
            className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-950 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white  focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
          </div>
        </div>
        <div className='w-1/4 mb-4'>
          <div className="mx-auto max-w-xs">
            <label htmlFor='img3' className="mb-1 block text-sm font-medium text-gray-700">Img 3</label>
            <input 
            required
            onChange={(e) => handleFileChange(e, 'img3')}
            id='img3'
            name='img3'
            type="file" 
            className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-950 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white  focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-3 bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Product
      </button>
      </form>
    </>
  )
}

export default Addproducts