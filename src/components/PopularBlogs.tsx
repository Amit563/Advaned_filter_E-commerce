import { MessageCircle, ThumbsUp } from "lucide-react"


const PopularBlogs = () => {
    const blogs = [
        {
            title: "My Amazing blog title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },

        {
            title: "My Amazing blog title 2",
            author: "HuXn",
            likes: 150,
            comments: 24,
        },
        {
            title: "My Amazing blog title 3",
            author: "John",
            likes: 124,
            comments: 66,
        },
    ]
    return (
        <div className="bg-white p-5 w-[20rem] mt-4 border ml-5 rounded">
            <h2 className="text-xl font-bold mb-5">PopularBlogs</h2>
            {
                <ul>
                    {
                        blogs.map((blog, index) => (
                            <li className="mb-4" key={index}>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold mb-2">{blog.title}</span>
                                </div>
                                <span className="flex items-center mt-2">{blog.author}</span>
                                <div className="flex items-center mt-2">
                                    <MessageCircle size={16} />
                                    <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
                                    <ThumbsUp size={16} />
                                    <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default PopularBlogs