import { Search, SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackendActor from "../utils/BackendActor";
import Loader from "./loader";
import useDebounce from "../utils/hooks/UseDebounce"; // Adjust the path as needed

export default function SearchBox() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Debounce the search query
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    // Perform the search when the debounced search query changes
    const searchProduct = async (query) => {
      if (query.length > 0) {
        setIsSearching(true);
        try {
          const products = await BackendActor.searchProduct(query);
          setSearchResults(products);
        } catch (e) {
          setSearchResults([]);
        }
        setIsSearching(false);
      } else {
        setSearchResults([]);
        setIsSearching(false);
      }
    };

    searchProduct(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const handleSearchAction = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const products = await BackendActor.searchProduct(searchQuery);
    setSearchResults(products);
  };

  const selectProduct = (product) => {
    navigate(`/products/${product.title.toLowerCase().trim().replaceAll(" ", "_").concat("_", product.id)}`, {
      state: { product },
      replace: true,
    });
    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleFormSubmit} method="POST" className="flex items-center w-fit relative">
      <div className="px-5 h-10 flex outline-none border border-yellow-500 focus-within:border-[3px] focus:border-yellow-500 rounded-full w-[300px]">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchAction}
          placeholder="Search electronics, furniture, clothes ..."
          className="h-full w-full outline-none"
        />
        <button type="submit" className="text-yellow-500 w-fit rounded-r-lg" title="Search SecureMart">
          <Search />
        </button>
      </div>
      {isSearching && (
        <div className="scale-[0.5]">
          <Loader size={20} />
        </div>
      )}
      {searchResults.length > 0 && (
        <ul className="absolute h-fit overflow-y-auto bg-slate-50/50 backdrop-blur-md border w-full top-[50px] rounded-2xl p-2.5">
          {searchResults.map((result) => (
            <li
              key={result.id}
              onClick={() => selectProduct(result)}
              className="cursor-pointer px-2.5 flex gap-1 items-center hover:bg-yellow-500 rounded-xl hover:text-white text-lg py-2"
            >
              <SearchIcon className="text-slate-300" size={20} />
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
