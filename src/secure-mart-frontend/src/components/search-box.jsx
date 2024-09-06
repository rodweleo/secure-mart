import { Search, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import BackendActor from "../utils/BackendActor";
import Loader from "./loader";

export default function SearchBox() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const searchProduct = async (query) => {
    if (query.length > 0) {
      try {
        const response = await BackendActor.searchProduct(query);
        const modRes = JSON.parse(response);
        if (modRes) {
          setSearchResults(modRes.products);
          setIsSearching(false);
        }
        setIsSearching(false);
      } catch (e) {
        setSearchResults([])
        setIsSearching(false);
      }
    } else {
      setSearchResults([])
      setIsSearching(false);
    }
  }

  const handleSearchAction = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      setIsSearching(true)
      setTimeout(() => {
        searchProduct(searchQuery);
      }, 500)
    } else {
      setSearchResults([])
      setIsSearching(false)
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
      <div className='px-5 h-10 flex outline-none border border-yellow-500 focus-within:border-[3px] focus:border-yellow-500 rounded-full w-[300px]'>
        <input type="search" onChange={handleSearchAction} placeholder='Search electronics, furniture, clothes ...' className="h-full w-full outline-none" />
        <button type="submit" className='text-yellow-500 w-fit rounded-r-lg' title="Search SecureMart"><Search /></button>
      </div>
      {isSearching && <div className="scale-[0.5]">
        <Loader size={20} /></div>}

      {searchResults && searchResults.length > 0 ? <ul className="absolute h-[400px] overflow-y-scroll bg-slate-50/50 backdrop-blur-md border w-full top-[50px] rounded-2xl p-2.5">{searchResults.map((result) => (
        <li key={result.id} onClick={() => selectProduct(result)} className="cursor-pointer px-2.5 flex gap-1 items-center hover:bg-yellow-500 rounded-xl hover:text-white text-lg py-2"><SearchIcon className="text-slate-300" size={20} />{result.title}</li>
      ))} </ul> : null}

    </form>
  )
}