import { useEffect, useState } from "react"
import { useFilter } from "./FilterContext";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[]
}

const Sidebar = () => {
    const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, keyword, setKeyword } = useFilter()


    const [categories, setCategories] = useState<string[]>([]);

    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "Fashion",
        "trend",
        "shoes",
        "shirt"
    ])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data: FetchResponse = await response.json()
                const uniqueCategories = Array.from(
                    new Set(data.products.map((prodduct) => prodduct.category))
                )
                // console.log(uniqueCategories)
                setCategories(uniqueCategories)
            } catch (error) {
                console.log("Error fetching product", error)
            }
        }

        fetchCategories();

    }, [])

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined)
    }

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value) : undefined)
    }

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category)
    }

    const handleKeywordClick = (keyword: string) => {
        setKeyword(keyword)
    }

    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("")
        setMinPrice(undefined);
        setMaxPrice(undefined);
        setKeyword("");
    }



    return (
        <div className="x-64 p-5 h-screen ">
            <h1 className="text-2xl font-bold mb-5 mt-4">React Store</h1>
            <section >
                <input type="text" className="border-2 rounded px-2 py-2 w-full sm:mb-0" placeholder="Search product" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className="flex justify-center mt-3 items-center">
                    <input type="text" className="border-2 mr-2 px-5 py-2 mb-3 w-full" placeholder="Min" value={minPrice ?? ""} onChange={handleMinPriceChange} />
                    <input type="text" className="border-2 mr-2 px-5 py-2 mb-3 w-full" placeholder="Max" value={maxPrice ?? ""} onChange={handleMaxPriceChange} />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>
                </div>
                <section>
                    {
                        categories.map((category, index) => (
                            <label key={index} className="block mb-1">
                                <input type="radio" name="category" value={category} onChange={() => handleRadioChangeCategories(category)} className="mr-2 w-[16px] h-[16px]" checked={selectedCategory === category} />
                                {
                                    category.toUpperCase()
                                }
                            </label>
                        ))
                    }
                </section>
                <div className="mb-5 mt-4">
                    <h2 className="text-xl font-semibold mb-3">Keywords</h2>
                    <div>
                        {
                            keywords.map((keyword, index) => (
                                <button
                                    key={index} className="block mb-1 px-1 py-1 w-full text-left border rounder hover:bg-gray-200"
                                    onClick={() => handleKeywordClick(keyword)}>
                                    {keyword.toUpperCase()}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <button onClick={handleResetFilters} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-2">Reset Filters</button>
            </section>
        </div>
    )
}

export default Sidebar