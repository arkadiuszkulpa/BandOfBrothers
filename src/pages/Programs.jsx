import { Link } from 'react-router-dom';

export default function Programs() {
  const christianPrograms = [
    {
      name: 'Exodus 90',
      duration: '90 days',
      description: 'A rigorous spiritual exercise designed to help men break free from slavery to their vices and experience freedom in Jesus Christ. Combines prayer, asceticism, and fraternity.',
      practices: ['Daily prayer and meditation', 'Cold showers', 'Fasting', 'Exercise', 'Limited technology', 'Weekly fraternity meetings'],
      type: 'Christian/Catholic'
    },
    {
      name: 'That Man Is You',
      duration: '26 weeks',
      description: 'A men\'s program focused on the vision of authentic manhood, presented in the context of the battle between God and Satan.',
      practices: ['Weekly sessions', 'Video presentations', 'Small group discussions', 'Scripture study'],
      type: 'Christian/Catholic'
    },
    {
      name: 'The 33 Days to Morning Glory',
      duration: '33 days',
      description: 'Marian consecration program that leads men to a deeper relationship with Mary and through her to Jesus Christ.',
      practices: ['Daily readings', 'Prayer', 'Reflection'],
      type: 'Christian/Catholic'
    },
    {
      name: 'Into the Breach',
      duration: 'Ongoing',
      description: 'Apostolic exhortation calling men to authentic Catholic masculinity. Can be used as a fraternity study program.',
      practices: ['Regular meetings', 'Study and discussion', 'Sacraments', 'Service'],
      type: 'Christian/Catholic'
    }
  ];

  const secularPrograms = [
    {
      name: '75 Hard',
      duration: '75 days',
      description: 'A transformative mental toughness program that requires strict adherence to five daily tasks for 75 consecutive days.',
      practices: ['Two 45-minute workouts', 'Follow a diet', '1 gallon of water', '10 pages of reading', 'Progress photo'],
      type: 'Secular'
    },
    {
      name: 'The Strenuous Life',
      duration: 'Ongoing',
      description: 'Based on Theodore Roosevelt\'s philosophy, a program for developing physical fitness, mental resilience, and practical skills.',
      practices: ['Physical challenges', 'Skill development', 'Service projects', 'Self-improvement'],
      type: 'Secular'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Pick a Programme</h1>
          <p className="text-xl text-gray-300 mb-4">
            Whatever structure you want to use—Exodus 90, 75 Hard, or something else entirely.
            The programme is the vehicle, not the destination.
          </p>
          <p className="text-lg text-gray-400">
            <strong>Don't do it alone.</strong> Find brothers to walk it with you.
          </p>
        </div>
      </section>

      {/* Christian Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Christian Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {christianPrograms.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Practices:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {program.practices.map((practice, idx) => (
                      <li key={idx}>{practice}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-500 italic">{program.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secular Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Secular Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {secularPrograms.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Practices:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {program.practices.map((practice, idx) => (
                      <li key={idx}>{practice}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-500 italic">{program.type}</div>
              </div>
            ))}
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
