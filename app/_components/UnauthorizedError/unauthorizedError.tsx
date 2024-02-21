import React from 'react'
const UnauthorizedError = ({messageError,setmessageError}:{messageError:boolean,setmessageError:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <>
        {
        messageError&& 
        <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <div aria-hidden="true" className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
            <div className='relative w-full cursor-pointer pointer-events-none transition p-4 mt-48'>
            <div className='text-center w-full p-4 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm'>
                <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className='text-xl font-normal text-gray-500 mt-5 mb-6'>Unauthorized Access</p>
                <button
                    onClick={() => setmessageError(false)}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:text-sm">
                        OK
                </button>
            </div>
            </div>
        </div>
        </div>
    }
        </>
    )
}

export default UnauthorizedError