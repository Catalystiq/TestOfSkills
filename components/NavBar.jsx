import Link from 'next/link'

export default function NavBar(){
    return (
        <nav className="  py-3 bg-black font-mono">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/" className="flex items-center ">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">Test of Skills</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                        <li>
                        <Link href="/" className="p-0 text-gray-400 md:dark:hover:text-white  hover:text-white">Tests</Link>
                        </li>
                        <li>
                            <Link href="/statistics" className="p-0 text-gray-400 md:dark:hover:text-white  hover:text-white">Statistics</Link>
                        </li>
                        <li>
                            <Link href="/about" className="p-0 text-gray-400 md:dark:hover:text-white  hover:text-white">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}