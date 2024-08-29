import { Search, SearchIcon } from "lucide-react";
import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function SearchBox() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const searchProduct = async (query) => {

    if (query.length > 0) {
      try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
        setSearchResults(res.data.products)
      } catch (e) {
        setSearchResults([])
      }
    } else {
      setSearchResults([])
    }
  }

  const handleSearchAction = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      setTimeout(() => {
        searchProduct(searchQuery);
      }, 500)
    } else {
      setSearchResults([])
    }
  }

  //console.log(searchResults)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const selectProduct = (product) => {
    navigate(`/products/${product.title.toLowerCase().trim().replaceAll(" ", "_").concat("_", product.id)}`, {
      state: {
        product: product
      },
      replace: true
    });
    setSearchResults([])
  }

  return (
    <form onSubmit={handleFormSubmit} method="POST" className='flex items-center w-fit relative'>
      <div className='px-6 h-12 flex outline-none border border-yellow-500 focus:border-2 focus:border-yellow-500 rounded-full w-[400px]'>
        <input type="search" onChange={handleSearchAction} placeholder='Search' className="h-full w-full outline-none" />
        <button type="submit" className='text-yellow-500 w-fit rounded-r-lg' title="Search SecureMart"><Search /></button>
      </div>

      {searchResults && searchResults.length > 0 ? <ul className="absolute h-[400px] overflow-y-scroll bg-slate-50/50 backdrop-blur-md border w-full top-[50px] rounded-2xl p-2.5">{searchResults.map((result) => (
        <li key={result.id} onClick={() => selectProduct(result)} className="cursor-pointer px-2.5 flex gap-1 items-center hover:bg-yellow-500 rounded-xl hover:text-white text-lg py-2"><SearchIcon className="text-slate-300" size={20} />{result.title}</li>
      ))} </ul> : null}

    </form>
  )
}