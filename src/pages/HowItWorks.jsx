import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">How 72Others Works</h1>
          <p className="text-xl text-gray-300">
            A simple, grassroots approach to building fraternities and transforming lives.
          </p>
        </div>
      </section>

      {/* Why 72Others? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why 72Others?</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              <strong>The name comes from Luke 10</strong> - Jesus sent 72 disciples in pairs to every town.
              Not the famous twelve, but everyone else willing to do the work.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              They went in pairs because the journey is too hard alone. That's our model:
              pairs within fraternities, missions chosen together, support that doesn't quit.
            </p>
            <p className="text-lg text-gray-700">
              We're building Luke 10 for modern men - rooted in scripture, practical for today.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">The Journey</h2>

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
                  Click the "Join Community" button and you'll be redirected to our WhatsApp Community.
                  This is a broad network of men who are all interested in self-improvement and spiritual growth.
                </p>
                <p className="text-gray-700">
                  <strong>Why WhatsApp?</strong> It's free, widely used, and allows us to build without corporate infrastructure.
                  No apps to download, no subscriptions to pay for.
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
                <h3 className="text-2xl font-bold mb-3">Find Your Fraternity</h3>
                <p className="text-gray-700 mb-4">
                  In the community, you'll connect with other men. Through conversation and coordination,
                  form a small fraternity of 4-8 brothers.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Matching criteria:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Location/Time zone:</strong> Schedule weekly meetings that work for everyone</li>
                  <li><strong>Worldview:</strong> Christian, Catholic, secular, etc.</li>
                  <li><strong>Program interest:</strong> Which program you want to follow</li>
                  <li><strong>Commitment level:</strong> Ensure everyone is equally serious</li>
                </ul>
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
                <h3 className="text-2xl font-bold mb-3">Select a Program</h3>
                <p className="text-gray-700 mb-4">
                  As a fraternity, choose which program you want to follow together. Options include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>75 Hard (75-day mental toughness program)</li>
                  <li>Exodus 90 (90-day spiritual exercise)</li>
                  <li>That Man Is You (26-week Christian program)</li>
                  <li>The Strenuous Life (ongoing practical skills)</li>
                  <li>Custom program designed by your fraternity</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Commit and Begin</h3>
                <p className="text-gray-700 mb-4">
                  Your fraternity commits to the program together. Set a start date, create your own WhatsApp group
                  for daily check-ins, and begin the journey.
                </p>
                <p className="text-gray-700">
                  <strong>Key elements:</strong> Daily accountability, weekly meetings (video or in-person),
                  honest conversations, and mutual support through struggles.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Complete and Continue</h3>
                <p className="text-gray-700 mb-4">
                  Finish the program together. Celebrate victories. Learn from failures. Then decide as a fraternity:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Start another program together</li>
                  <li>Continue meeting for ongoing accountability</li>
                  <li>Help new men form their own fraternities</li>
                  <li>All of the above</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why This Approach Works</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">No Corporate Gatekeepers or Silos</h3>
              <p className="text-gray-700">
                Corporate programs silo men into individual programs—once it's over, communication stops. Our WhatsApp community
                keeps everyone connected in one place, ready to tackle the next challenge together, whether that's a New Year's
                resolution, Lent, fatherhood, or any life motivator. No waiting for the next program cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Proven Structure</h3>
              <p className="text-gray-700">
                Small fraternities (4-8 men) have been the foundation of men's spiritual growth for centuries.
                Accountability, brotherhood, and shared struggle create transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Free and Accessible</h3>
              <p className="text-gray-700">
                No subscription fees. No paywalls. Just men helping men become better versions of themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Flexible and Adaptable</h3>
              <p className="text-gray-700">
                Choose the program that fits your needs. Christian or secular. Intense or moderate.
                The community supports all paths to self-improvement.
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
              <h3 className="text-xl font-bold mb-2">What if I don't find a fraternity right away?</h3>
              <p className="text-gray-700">
                Be patient. As the community grows, more men will join. In the meantime, introduce yourself,
                share your goals, and start conversations. Fraternities form organically.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Do I need to be Christian to join?</h3>
              <p className="text-gray-700">
                Our model is rooted in Luke 10, and we're honest about that. We welcome men from all backgrounds
                who respect the biblical foundation and want accountability with other men. If scripture-based
                community isn't for you, this probably isn't the right fit - and that's okay.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What if my fraternity falls apart?</h3>
              <p className="text-gray-700">
                It happens. Life gets in the way. If your fraternity dissolves, return to the community and
                form a new one. Or help others stay committed to theirs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Is this officially affiliated with any programs?</h3>
              <p className="text-gray-700">
                No. We are an independent grassroots movement. We respect and recommend various self-help programs
                (both Christian and secular), but we are not officially connected to any organization. We simply
                provide the open-source community connection that the self-help industry keeps behind paywalls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl mb-8">
            Thousands of men are waiting to walk this journey with you.
          </p>
          <Link
            to="/join-whatsapp"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition inline-block"
          >
            Join WhatsApp Community
          </Link>
        </div>
      </section>
    </div>
  );
}
