import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <header className="bg-gray-900 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Brianna Clark</h1>
            <nav className="flex space-x-4">
              <a href="#art" className="hover:text-gray-400">Art</a>
              <a href="#about" className="hover:text-gray-400">About</a>
              <a href="#photography" className="hover:text-gray-400">Photography</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 p-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Brianna Clark</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
