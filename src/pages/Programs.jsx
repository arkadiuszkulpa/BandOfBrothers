import { Link } from 'react-router-dom';

export default function Programs() {
  const christianPrograms = [
    {
      name: 'Exodus 90',
      duration: '90 days',
      description: 'A rigorous spiritual exercise designed to help men break free from slavery to their vices and experience freedom in Jesus Christ. Combines prayer, asceticism, and fraternity.',
      practices: ['Daily prayer (including 20min silent prayer)', 'Cold showers', 'Fasting on Wednesdays and Fridays', 'Regular exercise', 'Limited technology', 'Weekly fraternity meetings', 'Minimum 7 hours sleep'],
      type: 'Christian/Catholic',
      website: 'https://exodus90.com/'
    },
    {
      name: 'That Man Is You',
      duration: '26 weeks',
      description: 'A men\'s leadership program that honestly addresses the pressures and temptations men face, harmonizing science with Church teaching to develop the vision of man fully alive.',
      practices: ['Weekly sessions', 'Video presentations', 'Small group discussions', 'Scripture study'],
      type: 'Christian/Catholic',
      website: 'https://paradisusdei.org/that-man-is-you/'
    },
    {
      name: '33 Days to Morning Glory',
      duration: '33 days',
      description: 'A do-it-yourself retreat in preparation for Marian consecration, featuring the teachings of four giants of Marian spirituality.',
      practices: ['Daily readings (5-10 minutes)', 'Prayer and reflection', 'Journaling'],
      type: 'Christian/Catholic',
      website: 'http://33daystomorningglory.com/'
    },
    {
      name: 'Into the Breach',
      duration: '12 episodes',
      description: 'A groundbreaking video series from the Knights of Columbus exploring what it means to be a Catholic man, inspired by Bishop Olmsted\'s apostolic exhortation.',
      practices: ['Weekly video sessions', 'Group discussion', 'Personal reflection', 'Service to others'],
      type: 'Christian/Catholic',
      website: 'https://www.kofc.org/en/what-we-do/faith-in-action-programs/faith/into-the-breach.html'
    }
  ];

  const secularPrograms = [
    {
      name: '75 Hard',
      duration: '75 days',
      description: 'A transformative mental toughness program created by Andy Frisella that requires strict adherence to five daily tasks for 75 consecutive days with zero compromise.',
      practices: ['Two 45-minute workouts (one must be outdoors)', 'Follow a diet (no alcohol or cheat meals)', '1 gallon of water', '10 pages of non-fiction reading', 'Daily progress photo'],
      type: 'Secular',
      website: 'https://andyfrisella.com/pages/75hard-info'
    },
    {
      name: '75 Soft',
      duration: '75 days',
      description: 'A more sustainable alternative to 75 Hard, designed for those seeking lifestyle change without extreme rigidity. Allows flexibility while maintaining discipline.',
      practices: ['One 45-minute workout (active recovery days allowed)', 'Eat well (only drink on social occasions)', '3 litres of water daily', '10 pages of any book'],
      type: 'Secular',
      website: null,
      websiteNote: 'Community-driven variation of 75 Hard'
    },
    {
      name: 'The Strenuous Life',
      duration: 'Ongoing',
      description: 'Based on Theodore Roosevelt\'s philosophy, a program by Art of Manliness for developing physical fitness, mental resilience, and practical skills through 50+ skill badges.',
      practices: ['Physical challenges', '12-week initiation', 'Skill badge system', 'Service projects', 'Brotherhood accountability'],
      type: 'Secular',
      website: 'https://strenuouslife.co/'
    },
    {
      name: 'Iron Council',
      duration: 'Ongoing membership',
      description: 'A brotherhood of men committed to becoming better leaders at home, at work, and in their communities. Founded by Ryan Michler of Order of Man.',
      practices: ['Weekly calls and challenges', 'Battle Buddy accountability', 'Brotherhood events', 'Leadership training'],
      type: 'Secular',
      website: 'https://orderofman.com/'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Pick a Programme</h1>
          <p className="text-xl lg:text-2xl text-primary-400 mb-6 font-medium">
            Whatever structure you want to use—Exodus 90, 75 Hard, or something else entirely.
            The programme is the vehicle, not the destination.
          </p>
          <p className="text-xl lg:text-2xl text-primary-400 font-bold">
            Don't do it alone. Find brothers to walk it with you.
          </p>
        </div>
      </section>

      {/* Programs Side-by-Side Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Secular Programs Column (Left) - lighter amber */}
            <div className="bg-amber-50/50 rounded-xl p-6 lg:p-8 border border-amber-100">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-amber-800 border-b border-amber-200 pb-4">
                Secular Programs
              </h2>
              <div className="space-y-6">
                {secularPrograms.map((program, index) => (
                  <div key={index} className="bg-white border border-amber-200 rounded-lg p-5 hover:shadow-md hover:border-amber-300 transition">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        {program.practices.map((practice, idx) => (
                          <li key={idx}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    {program.website ? (
                      <a
                        href={program.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition"
                      >
                        Visit Official Website
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : program.websiteNote && (
                      <p className="text-sm text-gray-500 italic">{program.websiteNote}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Christian Programs Column (Right) - more pronounced amber/yellow */}
            <div className="bg-amber-100 rounded-xl p-6 lg:p-8 border border-amber-200">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-amber-900 border-b border-amber-300 pb-4">
                Christian Programs
              </h2>
              <div className="space-y-6">
                {christianPrograms.map((program, index) => (
                  <div key={index} className="bg-white border border-amber-300 rounded-lg p-5 hover:shadow-md hover:border-amber-400 transition">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                      <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        {program.practices.map((practice, idx) => (
                          <li key={idx}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    {program.website && (
                      <a
                        href={program.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-900 transition"
                      >
                        Visit Official Website
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Create Your Own Program</h2>
            <p className="text-gray-700 mb-6">
              Your fraternity can also design a custom program that fits your specific needs and goals.
              Combine elements from different programs or create something entirely new.
            </p>
            <p className="text-gray-700">
              The key is commitment, accountability, and brotherhood. The structure is less important than the journey you take together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            You need someone else on the same journey.
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Period.
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
