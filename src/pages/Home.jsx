import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Band of Brothers
            </h1>
            <p className="text-2xl mb-4 text-gray-300">
              A Grassroots Movement for Men Seeking Self-Improvement
            </p>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
              When corporate programs fail us, we unite. Join a community of men committed to
              spiritual growth, accountability, and transformation through structured programs like Exodus 90.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/join-whatsapp"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
              >
                Join the Community
              </Link>
              <Link
                to="/programs"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Problem</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              Exodus 90 and similar programs have helped countless men grow spiritually and develop discipline.
              But when corporate interests take over, these programs become expensive, inaccessible, or fade away entirely.
            </p>
            <p>
              Fraternities dissolve. Men who are ready to change their lives can't find brothers to journey with them.
              The structure and accountability that made these programs effective disappears.
            </p>
            <p className="font-semibold text-gray-900">
              But the need for brotherhood and transformation doesn't go away.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F91D;</div>
              <h3 className="text-xl font-bold mb-3">Unite Men</h3>
              <p className="text-gray-700">
                Connect with men who share your commitment to growth, regardless of where corporate programs have gone.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F4AA;</div>
              <h3 className="text-xl font-bold mb-3">Form Fraternities</h3>
              <p className="text-gray-700">
                Create small groups of 4-8 brothers who will hold each other accountable and walk the journey together.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F4D6;</div>
              <h3 className="text-xl font-bold mb-3">Follow Programs</h3>
              <p className="text-gray-700">
                Access Exodus 90, other Christian programs, or secular alternatives - all free, community-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Join the WhatsApp Community</h3>
                <p className="text-gray-700">
                  Connect with other men who are interested in self-improvement programs. No fees, no corporate gatekeeping.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Find or Form a Fraternity</h3>
                <p className="text-gray-700">
                  Match with 3-7 other men based on location, worldview, and schedule. Your fraternity becomes your accountability group.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Choose a Program</h3>
                <p className="text-gray-700">
                  Select from Exodus 90, other Christian programs, or secular alternatives. Your fraternity commits together.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Walk the Journey Together</h3>
                <p className="text-gray-700">
                  Complete the program together. Support each other. Grow stronger. Then help others do the same.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Learn More About Our Approach →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of men who refuse to let corporate greed stop their spiritual growth.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/join-whatsapp"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Join WhatsApp Community
            </Link>
            <Link
              to="/subscribe"
              className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition border-2 border-white"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
