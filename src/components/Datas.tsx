// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSpinner } from 'react-icons/fa';



// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }


// const Datas = () => {
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);


//     useEffect(() => {

//         const apiUrl: any = process.env.NEXT_PUBLIC_API_URL


//         setIsLoading(true);
//         axios
//             .get(apiUrl)

//             .then((response) => {
//                 setPosts(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <FaSpinner className="animate-spin h-6 w-6 text-gray-500" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <p className="text-red-500">{error}</p>
//             </div>
//         );
//     }

//     // return (

//     //     <div className="flex flex-col items-center justify-center">
//     //         <h1 className="text-2xl font-bold mb-6">Posts</h1>
//     //         <table className="border-collapse border border-gray-400">
//     //             <thead>
//     //                 <tr className="bg-gray-200 text-gray-700">
//     //                     <th className="border border-gray-400 py-2 px-4">ID</th>
//     //                     <th className="border border-gray-400 py-2 px-4">Title</th>
//     //                     <th className="border border-gray-400 py-2 px-4">Body</th>
//     //                     <th className="border border-gray-400 py-2 px-4">UserID</th>
//     //                 </tr>
//     //             </thead>
//     //             <tbody>
//     //                 {posts.map((post) => (
//     //                     <tr key={post.id} className="bg-white text-gray-700">
//     //                         <td className="border border-gray-400 py-2 px-4">{post.id}</td>
//     //                         <td className="border border-gray-400 py-2 px-4">{post.title}</td>
//     //                         <td className="border border-gray-400 py-2 px-4">{post.body}</td>
//     //                         <td className="border border-gray-400 py-2 px-4 text-yellow-600">{post.userId}</td>
//     //                     </tr>
//     //                 ))}
//     //             </tbody>
//     //         </table>
//     //     </div>
//     // );


//     // return (
//     //     <div className="flex flex-col items-center justify-center">
//     //         <h1 className="text-2xl font-bold mb-6">100 Posts</h1>
//     //         <div className="overflow-x-auto">
//     //             <table className="min-w-full divide-y divide-gray-400 border-separate">
//     //                 <thead>
//     //                     <tr className="bg-indigo-200 text-gray-700">
//     //                         <th className="border border-gray-400 py-2 px-4">ID</th>
//     //                         <th className="border border-gray-400 py-2 px-4">Title</th>
//     //                         <th className="border border-gray-400 py-2 px-4">Body</th>
//     //                         <th className="border border-gray-400 py-2 px-4">UserID</th>
//     //                     </tr>
//     //                 </thead>
//     //                 <tbody>
//     //                     {posts.map((post) => (
//     //                         <tr key={post.id} className="bg-white text-gray-700">
//     //                             <td className="border border-gray-400 py-2 px-4  sm:border-gray-100 px-1">{post.id}</td>
//     //                             <td className="border border-gray-400 py-2 px-4  sm:border-gray-100 px-1">{post.title}</td>
//     //                             <td className="border border-gray-400 py-2 px-4  sm:border-gray-100 px-1">{post.body}</td>
//     //                             <td className="border border-gray-400 py-2 px-4 text-yellow-600  sm:border-gray-100 px-1">{post.userId}</td>
//     //                         </tr>
//     //                     ))}
//     //                 </tbody>
//     //             </table>
//     //         </div>
//     //     </div>
//     // );





// }

// export default Datas;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Datas = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl: any = process.env.NEXT_PUBLIC_API_URL;

        setIsLoading(true);
        axios
            .get(apiUrl)
            .then((response) => {
                setPosts(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <FaSpinner className="animate-spin h-6 w-6 text-gray-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-6">100 Posts</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-400 border-separate">
                    <thead>
                        <tr className="bg-indigo-200 text-gray-700">
                            <th className="border border-gray-400 py-2 px-4">ID</th>
                            <th className="border border-gray-400 py-2 px-4">Title</th>
                            <th className="border border-gray-400 py-2 px-4">Body</th>
                            <th className="border border-gray-400 py-2 px-4">UserID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="bg-white text-gray-700">
                                <td className="border border-gray-400 py-2 px-4 ">{post.id}</td>
                                <td className="border border-gray-400 py-2 px-4 ">{post.title}</td>
                                <td className="border border-gray-400 py-2 px-4 ">{post.body}</td>
                                <td className="border border-gray-400 py-2 px-4 text-yellow-600 ">{post.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Datas;
