import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import clsx from "clsx"
const Header = () => {
  const { currentUser } = useSelector((state) => state.user || {});
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


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

  const navLinks = [ 
    { 
      label: 'Buy', 
      link:'/buy' 
    },
    {
      label: 'Rent', 
      link:'/Rent' 
    },
    {
      label: 'Sell', 
      link:'/sell' 
    },
    {
      label: 'Home Loans', 
      link:'/loans' 
    },
    {
      label: 'Find an Agent', 
      link:'/agent' 
    },
    {
      label: 'Manage Rentals', 
      link:'/rentals' 
    },
    {
      label: 'Advertise', 
      link:'/advertise' 
    },
    {
      label: 'Help', 
      link:'/help' 
    },
   ]

  return (
    <header className="bg-white shadow-md flex justify-between items-center py-6 px-8">
      <section className="flex items-center gap-4">
        <FiMenu onClick={()=> setIsOpen(true)} className="text-3xl cursor-pointer" />
        <div className="">
          <ul>
            <Link to="/Buy" className="text-2xl">
              <li className="hidden sm:inline text-gray-800 hover:text-blue-500 font-medium">
                Buy
              </li>
            </Link>
          </ul>
        </div>
      </section>
      <div className={clsx("fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all", isOpen && "translate-x-0")}>
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-full">
          <IoCloseOutline onClick={() => setIsOpen(false)} className="mt-0 mb-0 text-2xl cursor-pointer text-blue-500"/>
          {navLinks.map((d, i)=> (
               <Link key={i} to={d.link} className="text-base font-medium">
               {d.label}
               <hr className="mt-4 w-[100vw] mx-0 px-0"/>
              </Link>
          ))}
        </section>
      </div>
      <section>
        <ul>
          <Link to="/sign-in">
            <li className="font-medium">Sign In</li>
          </Link>
        </ul>
      </section>

      {/* <div className="container mx-auto flex justify-between items-center h-20 font-semibold">
     <div className="text-lg font-extrabold">
      <ul className="flex items-center gap-[4vw]">
         <Link to="/Rent">
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
      </div> */}
      {/* logo in the center */}
      {/* <div className="flex-shrink-0">
        <span className=''>
            <img className="w-20 h-20" src="/smart_realty.jpeg" alt="smart_realty"/>
        </span>
      </div>
      {/* Right Side Menu */}
      {/* <div className="">
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
        
      </ul>
      </div>
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div> */}
      {/* </div>
      <div >
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
            <a href="#" className="block text-gray-300 hover:text-white">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white">About</a>
            <a href="#" className="block text-gray-300 hover:text-white">Services</a>
            <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      )}
        
      </div> */}

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
  );
};

export default Header;
