import hamburger from '../assets/more.png'

function Header() {
    return(
        <>
            <nav className="flex items-center justify-between px-5 py-4 bg-white/60 backdrop-blur-md sticky top-0 z-50 border-b border-green-900/30">
                <div className="text-2xl font-bold cursor-pointer">
                    <span className="bg-green-800 px-1 mr-0.5">Br</span>eaking 
                    <span className="bg-green-800 px-1 ml-1 mr-0.5">Ba</span>d
                </div>
                <ul className="hidden md:flex gap-8 uppercase  justify-center w-6xl ">
                    <li className="font-bold transition flex hover:text-green-800 cursor-pointer">Home</li>
                    <li className="font-bold transition flex  hover:text-green-800 cursor-pointer">Episodes</li>
                    <li className="font-bold transition flex  hover:text-green-800 cursor-pointer">Characters</li>
                    <li className="font-bold transition flex  hover:text-green-800 cursor-pointer">Gallery</li>
                    <li className="font-bold transition flex  hover:text-green-800 cursor-pointer">About</li>
                </ul>
                <div className="hamburger">
                    <img className="size-6 lg:hidden " src={hamburger}></img>
                </div>
                <button className='hidden lg:flex text-sm uppercase font-bold bg-green-800 px-4 py-1 cursor-pointer hover:bg-green-600'>
                    Enter the Lab
                </button>
            </nav>
        </>
    );
}
export default Header