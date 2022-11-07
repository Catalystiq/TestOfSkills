import Link from 'next/link'

export default function NavBar(){
    return (
        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 bg-black sticky font-mono">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/" className="flex items-center ">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">Test of Skills</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                        <li>
                        <Link href="/" className="block py-2 pr-4 pl-3  md:hover:bg-transparent   md:p-0 text-gray-400 md:dark:hover:text-white  hover:text-white md:dark:hover:bg-transparent">Tests</Link>
                        </li>
                        <li>
                            <Link href="/statistics" className="block py-2 pr-4 pl-3  md:hover:bg-transparent   md:p-0 text-gray-400 md:dark:hover:text-white  hover:text-white md:dark:hover:bg-transparent">Statistics</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 pr-4 pl-3  md:hover:bg-transparent   md:p-0 text-gray-400 md:dark:hover:text-white  hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}