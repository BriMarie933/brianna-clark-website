export default function Navbar() {
  return (
    <header className="sticky top-0 bg-black text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Brianna Clark
        </div>
        
        {/* Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="/store" className="hover:text-gray-300">Store</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}