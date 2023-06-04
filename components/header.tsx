import Link from 'next/link';

function Header() {
    return (
        <header>
            <h1 className="text-3xl md:text-5xl font-bold text-center py-8">🚴 Biker Bagels 🥯</h1>
            <nav className="w-full shadow-md md:flex-wrap">
                <ul className="flex justify-center text-neutral-600">
                    <li className="hover:bg-gray-100 ">
                        <Link className="block p-4" href="/">Home</Link>
                    </li>
                    <li className="hover:bg-gray-100">
                        <Link className="block p-4" href="/bagels">Bagels</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;