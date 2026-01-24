import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">The Premise Is Simple</h1>
          <p className="text-xl text-gray-300">
            This community is free. And it's yours.
          </p>
        </div>
      </section>

      {/* The Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">The Structure</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              You do not go to war alone. Even the largest army must be divided down to
              individual squads who know and trust each other.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">&#x1F3DB;</div>
                <h3 className="font-bold text-lg mb-2">Community</h3>
                <p className="text-gray-600 text-sm">The army. All of us, connected.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">&#x1F46B;</div>
                <h3 className="font-bold text-lg mb-2">Fraternities</h3>
                <p className="text-gray-600 text-sm">The squad. 4-8 brothers who know and trust each other.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">&#x2693;</div>
                <h3 className="font-bold text-lg mb-2">Anchors</h3>
                <p className="text-gray-600 text-sm">The battle buddy. Your pair. The one who won't let you fall.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Three Steps. That's It.</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Join the WhatsApp Community</h3>
                <p className="text-gray-700 mb-4">
                  Connect with men who are on the same journey. Free, no subscriptions, no gatekeeping.
                </p>
                <p className="text-gray-700">
                  WhatsApp is free and widely used. No apps to download, no accounts to create.
                  Just brothers connecting directly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Pick a Programme</h3>
                <p className="text-gray-700 mb-4">
                  Whatever structure you want to use—Exodus 90, 75 Hard, That Man Is You,
                  The Strenuous Life, or something else entirely.
                </p>
                <p className="text-gray-700">
                  Christian or secular. Intense or moderate. The programme is the vehicle,
                  not the destination.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Find or Form a Fraternity</h3>
                <p className="text-gray-700 mb-4">
                  Ask for existing groups who might take you in. Or create your own and recruit
                  brothers from the community.
                </p>
                <p className="text-gray-700 font-semibold">
                  Form groups of 4-8 men. Pair up into anchors for daily support. That's it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why This Works</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Proven Structure</h3>
              <p className="text-gray-700">
                Small groups of 4-8 men have been the foundation of men's spiritual and personal growth
                for centuries. Accountability, brotherhood, and shared struggle create transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Free and Accessible</h3>
              <p className="text-gray-700">
                No subscription fees. No paywalls. No corporate gatekeeping.
                Just men helping men become better versions of themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Flexible</h3>
              <p className="text-gray-700">
                Choose the programme that fits your needs. Start when life calls for it,
                not when a corporate schedule allows. Your motivation is the schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Always Connected</h3>
              <p className="text-gray-700">
                One continuous community. When a programme ends, your brothers are still there.
                Ready for the next challenge. Ready when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Do I need to be Christian to join?</h3>
              <p className="text-gray-700">
                Our model is rooted in Luke 10—72 disciples sent in pairs. We're honest about that
                foundation. But we welcome men from all paths: Christian, atheist, agnostic.
                Whatever stage of life you're at. If you seek change and won't give up, you belong here.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What if I can't find a fraternity right away?</h3>
              <p className="text-gray-700">
                Be patient. Introduce yourself, share your goals, start conversations.
                Fraternities form organically as men connect over shared programmes and timezones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What if my fraternity falls apart?</h3>
              <p className="text-gray-700">
                It happens. Life gets in the way. Return to the community and form a new one.
                The community remains. Your brothers remain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Is this officially affiliated with any programmes?</h3>
              <p className="text-gray-700">
                No. We are an independent grassroots movement. We respect and recommend various
                programmes—both Christian and secular—but we are not officially connected to any organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            The Commitment
          </h2>
          <p className="text-xl mb-4 text-gray-300">
            The defining characteristic of men in this community: <strong>they seek change.</strong>
          </p>
          <p className="text-lg mb-8 text-gray-400">
            They are not satisfied with the status quo. They are sinners. They are faulty.
            But they will not give up.
          </p>
          <p className="text-2xl font-bold mb-8">
            Will you?
          </p>
          <Link
            to="/join-whatsapp"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition inline-block"
          >
            Find Your Anchor
          </Link>
        </div>
      </section>
    </div>
  );
}
