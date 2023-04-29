import React, { useEffect, useState } from 'react'

import axios from 'axios';


interface DetailsProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}





const Details = ({ userId, id, title, body }: DetailsProps) => {
    useState()
    useEffect(() => {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const url = 'https://jsonplaceholder.typicode.com/posts'
        // const posts = response.data;

        const get = async () => {
            try {

                const res = await axios.get<DetailsProps>(url)
                console.log(res)

                //   setUsers(res.data)
                //   setIsLoading(false)

            } catch (error: any) {
                // console.log(error)

                //   if (error instanceof CanceledError) return;
                //   setError((error as AxiosError).message);
                //   setIsLoading(false)
            }
        }
        get()
    }, [])
    return (
        <>
        </>
        // <div>
        //     <h1>Posts</h1>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Title</th>
        //                 <th>Body</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {/* {posts.map(post => (
        //   <tr key={post.id}>
        //     <td>{post.id}</td>
        //     <td>{post.title}</td>
        //     <td>{post.body}</td>
        //   </tr>
        // ))} */}
        //         </tbody>
        //     </table>
        // </div>
    )
}
export default Details;