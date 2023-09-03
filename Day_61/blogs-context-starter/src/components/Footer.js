import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext)
    return (

        <div className='flex justify-evenly  bg-slate-300 items-center border shadow-md shadow-[#beb3b3]  mt-2'>
            <div className='flex gap-x-5'>
            <div>{page > 1 &&
                (<button className='text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 m-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ' onClick={() => handlePageChange(page - 1)}>Previous</button>)
            }
            </div>
            <div>{page < totalPages &&
                (<button className='text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-8 py-2 m-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ' onClick={() => handlePageChange(page + 2)}>Next</button>)
            }
            </div>
            </div>
            <div>
            <p> page {page} of {totalPages}</p>
            </div>
        </div>
    )
}

export default Footer