import { CodeSquare } from "lucide-react";
import { useEffect, useState } from "react"

interface Author {
    name: string;
    isFollowing: boolean;
    image: string;
}

const TopSellers = () => {
    const [author, setAuthor] = useState<Author[]>([])

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=5")
                const data = await response.json();


                const authorsData: Author[] = data.results.map((user: any) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    isFollowing: false,
                    image: user.picture.medium
                }))

                setAuthor(authorsData)
                // console.log(authorsData)

            } catch (error) {
                console.log(`Error fetching authors: ${error}`)
            }
        }

        fetchData()

    }, [])

    const handleFollowClick = (index: number) => {
        setAuthor((prevAuthor) => prevAuthor.map((authors, i) => i === index ? { ...authors, isFollowing: !authors.isFollowing } : authors)
        )
    }

    return (
        <div className="bg-white p-5 mx-5 mt-[5rem] border w-[20rem] rounded">
            <h2 className="text-xl font-bold mb-5">Top Sellers</h2>

            <ul>
                {author.map((authod, index) => (
                    <li key={index} className="flex items-center justify-between mb-4">
                        <section className="flex justify-center items-center">
                            <img src={authod.image} alt={authod.name} className="w-[25%] h-[25%] justify-center rounded-full" />
                            <span className="ml-4">{authod.name}</span>
                        </section>
                        <button className={`py-1 px-3 rounded ${authod.isFollowing ? "bg-red-500 text-white" : "bg-black text-white"}`} onClick={() => handleFollowClick(index)}
                        >
                            {authod.isFollowing ? "Unfollow" : "Follow"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopSellers