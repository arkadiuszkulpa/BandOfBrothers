import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function WhatsAppRedirect() {
  const [countdown, setCountdown] = useState(5);
  // TODO: Replace with your actual WhatsApp Community invite link
  const whatsappLink = 'https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Uncomment when you have the actual WhatsApp link
          // window.location.href = whatsappLink;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleJoinNow = () => {
    // Uncomment when you have the actual WhatsApp link
    // window.location.href = whatsappLink;
    alert('WhatsApp community link will be added here. For now, this is a demo.');
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="text-green-600 text-6xl mb-6">
            <svg
              className="w-24 h-24 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-4">Join the Band of Brothers Community</h1>

          <p className="text-xl text-gray-700 mb-6">
            You're about to join our WhatsApp Community where you'll connect with men committed to self-improvement and spiritual growth.
          </p>

          {countdown > 0 ? (
            <div className="mb-8">
              <p className="text-gray-600 mb-2">Redirecting in</p>
              <div className="text-5xl font-bold text-primary-600">{countdown}</div>
            </div>
          ) : (
            <div className="mb-8">
              <p className="text-gray-600">Click the button below to join</p>
            </div>
          )}

          <button
            onClick={handleJoinNow}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition inline-block mb-6"
          >
            Join WhatsApp Community Now
          </button>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-bold mb-3">What to Expect:</h3>
            <ul className="text-left text-gray-700 space-y-2 max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Introductions from other men looking for fraternities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Announcements about programs starting soon</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Opportunities to form or join a fraternity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Support and encouragement from the community</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Don't have WhatsApp?</p>
            <p className="mt-2">
              Download it for free:{' '}
              <a
                href="https://www.whatsapp.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                WhatsApp Download
              </a>
            </p>
          </div>

          <div className="mt-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
