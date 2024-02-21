"use client"
import React,{useState,useEffect} from 'react'
interface PaginationProps {
    items: Array<any>
    setitemsPage: (items: Array<any>) => void;
    numberofitems:number
}
const Pagination: React.FC<PaginationProps> = ({items,setitemsPage,numberofitems}) => {
    const itemsPerPage = numberofitems;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsOnPage = items.slice(startIndex, endIndex);
        setitemsPage(itemsOnPage);
    }, [currentPage, items, setitemsPage, itemsPerPage]);
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };
    return (
    <>
    <div className= 'pagination flex pag w-full border border-gray-900 bg-white p-1 '>
            {Array.from({ length: totalPages }).map((_, index) => (
                <div key={index}>
                    <button
                        onClick={() => handlePageChange(index + 1)}
                        className={`${currentPage === index + 1?"bg-zinc-950 mx-1 text-gray-50 font-bold py-2 px-4 rounded-full":"bg-gray-200 mx-1 hover:bg-zinc-950 hover:text-gray-50 font-bold py-2 px-4 rounded-full"} `}>
                        {index + 1}
                    </button>
                </div>
            ))}
    </div>
    </>
    )
}
export default Pagination