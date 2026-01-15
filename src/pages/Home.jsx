import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              72Others
            </h1>
            <p className="text-2xl mb-4 text-gray-300">
              Where Men Are Sent in Pairs
            </p>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
              Modern accountability for men who refuse to go it alone. Find your anchor, choose your mission, go together.
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
              Self-help programs for men—such as Exodus 90, 75 Hard, and others—have helped countless men grow spiritually,
              mentally, and physically. But when corporate interests take over, these programs become expensive, inaccessible,
              or fade away entirely.
            </p>
            <p>
              <strong>Worse yet, the self-help industry keeps one critical thing hidden: membership data.</strong> They profit
              by keeping you isolated on their subscription platform. You complete a 90-day program, and then what? Communication
              stops. Your fraternity dissolves. You're on your own until the next scheduled program.
            </p>
            <p>
              But life doesn't wait for the next corporate program cycle. New Year's resolutions, Lent, the birth of a child,
              a personal crisis, or any other life motivator—these moments demand immediate action and brotherhood.
            </p>
            <p className="font-semibold text-gray-900">
              Men need a community that's always there, ready to step up to any challenge, not just when a company schedules it.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solution: Open-Source Brotherhood</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 text-center space-y-4">
            <p>
              <strong>We open-source the one thing the self-help industry wants to keep hidden: membership data.</strong> The WhatsApp
              community gives you direct access to other men seeking self-improvement. No corporate middleman. No subscription lock-in.
              Just brothers connecting freely.
            </p>
            <p>
              Whether you're starting a New Year's resolution, preparing for Lent, becoming a father, or facing any life challenge—your
              brothers are already there, ready to step up with you. One continuous community, not isolated program silos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F91D;</div>
              <h3 className="text-xl font-bold mb-3">Always-On Community</h3>
              <p className="text-gray-700">
                No silos. No program end dates. One continuous community where men connect, support each other, and tackle any challenge together.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F4AA;</div>
              <h3 className="text-xl font-bold mb-3">Form Fraternities Anytime</h3>
              <p className="text-gray-700">
                Create small groups of 4-8 brothers whenever life calls for it. Your motivation is the schedule, not corporate deadlines.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 text-4xl mb-4">&#x1F4D6;</div>
              <h3 className="text-xl font-bold mb-3">Any Program, Any Time</h3>
              <p className="text-gray-700">
                Choose from Christian programs (Exodus 90, That Man Is You) or secular alternatives (75 Hard, The Strenuous Life)—
                start whenever you need them, not when a corporation schedules it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About 72Others */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">What is 72Others?</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl mb-6 text-center">
              The name comes from <strong>Luke 10</strong> - where Jesus sent 72 disciples
              in pairs to every town.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Not the Famous Twelve</h3>
                <p>
                  These weren't the celebrity apostles. They were the "others" -
                  regular men willing to do the work. That's who we are.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Sent in Pairs</h3>
                <p>
                  They went two-by-two because the journey is too hard alone.
                  Find your anchor partner, form your fraternity, go together.
                </p>
              </div>
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
                  Select from Christian programs, secular alternatives, or create your own. Your fraternity commits together.
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
