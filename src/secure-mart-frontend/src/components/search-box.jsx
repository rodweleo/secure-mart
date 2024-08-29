import { Search } from "lucide-react";

export default function SearchBox(){
    return (
        <form method="POST" action="#" className='h-11 flex items-center w-fit'>
          <input type="search" className='px-6 h-full outline-none border border-yellow-500 focus:border-2 focus:border-yellow-500 rounded-l-lg w-[400px]' placeholder='Search'/>
          <button type="submit" className='bg-yellow-500 w-fit px-6 h-full rounded-r-lg text-white' title="Search SecureMart"><Search/></button>
        </form>
    )
}