import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-400">
              72Others
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-primary-400 transition">
              Home
            </Link>
            <Link to="/programs" className="hover:text-primary-400 transition">
              Programs
            </Link>
            <Link to="/how-it-works" className="hover:text-primary-400 transition">
              How It Works
            </Link>
            <Link
              to="/join-whatsapp"
              className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
