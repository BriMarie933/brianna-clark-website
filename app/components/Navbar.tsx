import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/favicon.ico" // Replace with your actual logo path
            alt="Brianna Clark Logo"
            className="w-16 h-16 rounded-lg shadow-md" // Larger size and soft corners
          />
          {/* Site Title */}
          <div className="text-2xl font-bold text-white">
            <Link href="/">Brianna Clark</Link>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <span className="hover:text-gray-300">Store</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-gray-300">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
