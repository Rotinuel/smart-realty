const Header = () => {
  return (
    <header>
        <div>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className=''>
                    <img className="w-24 h-24" src="/smart_realty.jpeg" alt="smart_realty"/>
                </span>
            </h1>
        </div>
        <form action="">
            <input type="text" placeholder="Search..." className="bg-transparent" />
        </form>
    </header>
  )
}

export default Header