import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">72Others</h3>
            <p className="text-gray-400">
              Find your anchor. Choose your mission. Go together.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-400">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-primary-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-400 hover:text-primary-400">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <Link
              to="/join-whatsapp"
              className="inline-block bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg transition"
            >
              Find Your Anchor
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 72Others. Where men are sent in pairs.</p>
        </div>
      </div>
    </footer>
  );
}
