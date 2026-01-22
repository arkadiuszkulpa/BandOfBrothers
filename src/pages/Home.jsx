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
              You've tried to change alone. It didn't work. Find your anchor, choose your mission, go together.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/join-whatsapp"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
              >
                Find Your Anchor
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

      {/* Why We Fail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why We Fail</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              You've done Exodus 90. Maybe twice. Maybe five times. And each time, when the 90 days end,
              you drift back. Back to the habits you swore to break. Back to the man you promised you'd never be again.
            </p>
            <p>
              Here's the hard truth: <strong>you don't need a programme to change your life.</strong> If you had
              the self-discipline, you'd just do it. You wouldn't need 90 days of structure or a checklist or
              an app tracking your cold showers.
            </p>
            <p>
              But you don't. Neither do we. Many of us failed for 10, 15 or 50 years before waking up, and we're still terrified we'll
              keep failing until we wake up old men with lives not properly lived.
            </p>
            <p className="font-semibold text-gray-900">
              So we turn to programmes. And programmes fail us. Not because they're bad—but because they
              miss the one thing that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* The Loneliness */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Loneliness</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              We no longer know how to have real relationships with men. Our fathers didn't teach us.
              Society didn't show us.
            </p>
            <p>At best, we know how to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spend nights at a bar talking about football</li>
              <li>Sit in front of multiplayer games fighting virtual battles that lead nowhere</li>
              <li>Climb corporate ladders surrounded by "friends" who'd forget our names in a quarter</li>
            </ul>
            <p>
              In all of this, we are still alone.
            </p>
            <p>
              That friend you share a pint with every other night? He doesn't truly know you. You've never
              opened your heart to him. And even your wife—even if she's your closest friend in the world—will
              never fully understand a man's reality.
            </p>
            <p className="font-semibold text-gray-900 text-xl">
              We cannot do this alone.
            </p>
          </div>
        </div>
      </section>

      {/* The Squad */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Squad</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4 mb-12">
            <p>
              You do not go to war alone.
            </p>
            <p>
              Even the largest army must be divided down to individual squads who know and trust each other.
              And within those squads, you have your battle buddy. The one who has your back when everything goes wrong.
            </p>
            <p>
              You don't charge into fire because a general told you to. You do it because <strong>you're in
              this together.</strong> At some point, the result becomes irrelevant. Death? No problem. You lay
              down your life for something greater. For a cause—but a cause you fight for with your closest
              brothers beside you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-primary-600 text-4xl mb-4">&#x1F3DB;</div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-700">
                The army. All of us, connected. A movement of men seeking change.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-primary-600 text-4xl mb-4">&#x1F46B;</div>
              <h3 className="text-xl font-bold mb-3">Fraternities</h3>
              <p className="text-gray-700">
                The squad. 4-8 brothers who know and trust each other. Your accountability group.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-primary-600 text-4xl mb-4">&#x2693;</div>
              <h3 className="text-xl font-bold mb-3">Anchors</h3>
              <p className="text-gray-700">
                The battle buddy. Your pair. The one who won't let you fall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission - 72Others */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">The Mission</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl mb-6 text-center">
              This is why we're called <strong>72Others.</strong>
            </p>
            <p className="text-center mb-6">
              In Luke 10, Jesus sent not the Apostles, but 72 other disciples into the world.
              And He sent them <strong>in pairs.</strong>
            </p>
            <p className="text-center mb-6">
              Not alone. Never alone.
            </p>
            <div className="bg-white p-6 rounded-lg mt-8">
              <p className="text-center text-lg">
                Whatever path you come from—Christian, atheist, agnostic. Whatever stage of life you're at.
                Whatever structure you want to use— Christian programmes like Exodus 90, secular programmes like 75 Hard, or a new approach you designed and want to share with others.
              </p>
              <p className="text-center text-xl font-bold mt-4 text-gray-900">
                Don't do it alone.
              </p>
              <p className="text-center text-lg mt-2">
                You need someone else on the same journey. Period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Premise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">The Premise</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            This community is <strong>free.</strong> And it's <strong>yours.</strong>
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Join the WhatsApp Community</h3>
                <p className="text-gray-700">
                  Connect with men who are on the same journey. Free, no subscriptions, no gatekeeping.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Pick a Programme</h3>
                <p className="text-gray-700">
                  Choose from Christian programs (Exodus 90, That Man Is You), secular alternatives
                  (75 Hard, The Strenuous Life), or create your own.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Find or Form a Fraternity</h3>
                <p className="text-gray-700">
                  Join an existing group or recruit brothers from the community. Form groups of 4-8 men.
                  Pair up into anchors for daily support. That's it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            The Commitment
          </h2>
          <p className="text-xl mb-4 text-gray-300">
            The defining characteristic of men in this community is simple: <strong>they seek change.</strong>
          </p>
          <p className="text-lg mb-8 text-gray-400">
            They are not satisfied with the status quo. They want more and they're hungry to find it.
            They are sinners. They are faulty. Just like everyone else. But they will not give up.
          </p>
          <p className="text-2xl font-bold mb-8">
            Will you?
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/join-whatsapp"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Find Your Anchor
            </Link>
            <Link
              to="/how-it-works"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
