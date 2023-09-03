import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Loader from './Loader'

const Blog = () => {
    const {posts ,loading} = useContext(AppContext)
  return (
    <div className='flex flex-col justify-center items-center gap-y-3 mt-6'>
        {
            loading ? (
                <Loader/>
            ) : 
            (
                posts.length === 0 ? 
                (
                    <div>
                        <h1>404</h1>
                    </div>
                ) : 
                (
                    posts.map ( (post) => (
                        <div key={post.id}  className=' w-[630px] gap-y-3 justify-center items-center' >
                            <p className=' font-bold'>{post.title}</p>
                            <p className=' text-[13px]'>By <spam>{post.author}</spam> on <span>{post.category} </span> </p>
                            <p className=' text-[13px] mb-4'> Posted on <spam>{post.date}</spam> </p>
                            <p>{post.content} </p>
                            <div className='flex text-blue-600 underline gap-x-2 text-[13px] mb-1'>
                                {post.tags.map( (tag, index) => {
                                    return <p key={index}>{`# ${tag}`} </p>
                                } )}
                            </div>
                         
                        </div>
                    ))

                )
            )
        }
    </div>
  )
}

export default Blog