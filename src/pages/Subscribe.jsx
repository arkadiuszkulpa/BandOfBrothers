import { useState } from 'react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

export default function Subscribe() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    location: '',
    interests: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      await client.models.Subscriber.create({
        email: formData.email,
        name: formData.name || undefined,
        location: formData.location || undefined,
        interests: formData.interests || undefined,
        source: 'website_subscribe',
        dateJoined: new Date().toISOString(),
        status: 'active',
        whatsappJoined: false,
      });

      setStatus('success');
      setMessage('Successfully subscribed! Check your email for program updates and reminders.');
      setFormData({ email: '', name: '', location: '', interests: '' });
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again or join us directly on WhatsApp.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Stay Connected</h1>
          <p className="text-xl text-gray-300">
            Get notified when brothers near you are forming fraternities.
          </p>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Newsletter Signup</h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                {message}
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="London, UK"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Helps us connect you with local fraternities
                </p>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Program Interests (Optional)
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="e.g., Exodus 90, 75 Hard, Christian programs..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                We'll send you occasional updates and program reminders. Unsubscribe anytime.
                No spam, ever.
              </p>
            </div>
          </div>

          {/* What You'll Receive */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">What You'll Receive</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-primary-600 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Program Reminders</h4>
                  <p className="text-gray-600">
                    Get notified when programs like Exodus 90 are starting, so you can join a forming fraternity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary-600 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Fraternity Opportunities</h4>
                  <p className="text-gray-600">
                    When men in your area are looking to form a fraternity, we'll connect you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary-600 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Community Updates</h4>
                  <p className="text-gray-600">
                    Hear about new programs, success stories, and how the movement is growing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary-600 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Resources</h4>
                  <p className="text-gray-600">
                    Free guides, program materials, and tips for getting the most out of your fraternity experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
