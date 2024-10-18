import {FaSearch} from "react-icons/fa"
import {Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
    const { currentUser } = useSelector((state) => state.user || {});
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };

  useEffect(() => {

    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);





  return (
    <header className="bg-white shadow-md px-48">
      {/* left side menu */}
     <div className="container mx-auto flex justify-between items-center h-20">
     <div className="">
      <ul className="flex space-x-6">
        <Link to="/Buy">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Buy</li>
        </Link> <Link to="/Rent">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Rent</li>
        </Link> <Link to="/Sell">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Sell</li>
        </Link>
        <Link to="/Buy">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Home Loans</li>
        </Link> 
        <Link to="/Rent">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Find an Agent</li>
        </Link>
      </ul>
      </div>
      {/* logo in the center */}
      <div className="flex-shrink-0">
        <span className=''>
            <img className="w-20 h-20" src="/smart_realty.jpeg" alt="smart_realty"/>
        </span>
      </div>
      {/* Right Side Menu */}
      <div className="">
      <ul className="flex space-x-6">  
       <Link to="/Sell">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Manage Rentals</li>
        </Link>
        <Link to="/Buy">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Advertise</li>
        </Link>
        <Link to="/Rent">
          <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">Help</li>
        </Link>
        <Link to="/sign-in">
          <li className="font-medium">Sign In</li>
        </Link>
      </ul>
      </div>
     </div>

      {/* Sign In Button */}
      <div >
        
      </div>
     

        {/* <div className="flex items-center">
            <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                
            </h1>
            </Link>
            <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

          />
          <button>
          <FaSearch className="text-slate-600" />
          </button>
        </form>
            <ul className="flex gap-4"> */}
                
                {/* <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link> */}
            {/* </ul>
        </div> */}
    </header>
  )
}

export default Header