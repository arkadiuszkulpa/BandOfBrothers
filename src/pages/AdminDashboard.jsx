import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

function DashboardContent({ signOut }) {
  const [activeTab, setActiveTab] = useState('subscribers');
  const [subscribers, setSubscribers] = useState([]);
  const [outreach, setOutreach] = useState([]);
  const [fraternities, setFraternities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'subscribers') {
        const { data } = await client.models.Subscriber.list();
        setSubscribers(data);
      } else if (activeTab === 'outreach') {
        const { data } = await client.models.OutreachContact.list();
        setOutreach(data);
      } else if (activeTab === 'fraternities') {
        const { data } = await client.models.Fraternity.list();
        setFraternities(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Band of Brothers - Admin Dashboard</h1>
            <button
              onClick={signOut}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('subscribers')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'subscribers'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Subscribers
            </button>
            <button
              onClick={() => setActiveTab('outreach')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'outreach'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Outreach Contacts
            </button>
            <button
              onClick={() => setActiveTab('fraternities')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'fraternities'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Fraternities
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'programs'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Programs
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-600">Loading...</div>
          </div>
        ) : (
          <>
            {activeTab === 'subscribers' && <SubscribersTab subscribers={subscribers} />}
            {activeTab === 'outreach' && <OutreachTab outreach={outreach} />}
            {activeTab === 'fraternities' && <FraternitiesTab fraternities={fraternities} />}
            {activeTab === 'programs' && <ProgramsTab />}
          </>
        )}
      </div>
    </div>
  );
}

function SubscribersTab({ subscribers }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Email Subscribers</h2>
        <div className="text-sm text-gray-600">Total: {subscribers.length}</div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Interests
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                WhatsApp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Joined
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No subscribers yet
                </td>
              </tr>
            ) : (
              subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscriber.name || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscriber.location || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {subscriber.interests || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscriber.whatsappJoined ? '✓' : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscriber.dateJoined ? new Date(subscriber.dateJoined).toLocaleDateString() : '-'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OutreachTab({ outreach }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Outreach Contacts</h2>
        <div className="text-sm text-gray-600">Total: {outreach.length}</div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Contacted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {outreach.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No outreach contacts yet
                </td>
              </tr>
            ) : (
              outreach.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {contact.name || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {contact.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        contact.responseStatus === 'joined'
                          ? 'bg-green-100 text-green-800'
                          : contact.responseStatus === 'responded'
                          ? 'bg-blue-100 text-blue-800'
                          : contact.responseStatus === 'contacted'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {contact.responseStatus || 'not_contacted'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {contact.dateContacted ? new Date(contact.dateContacted).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {contact.notes || '-'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FraternitiesTab({ fraternities }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Fraternities</h2>
        <div className="text-sm text-gray-600">Total: {fraternities.length}</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fraternities.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No fraternities formed yet
          </div>
        ) : (
          fraternities.map((fraternity) => (
            <div key={fraternity.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold mb-2">{fraternity.name}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Status:</span>{' '}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      fraternity.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : fraternity.status === 'forming'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {fraternity.status || 'forming'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Members:</span> {fraternity.memberCount || 0}
                </div>
                <div>
                  <span className="font-semibold">Start Date:</span>{' '}
                  {fraternity.startDate ? new Date(fraternity.startDate).toLocaleDateString() : 'Not set'}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ProgramsTab() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Program Management</h2>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-2">Coming Soon</h3>
        <p className="text-gray-700">
          This section will allow you to manage programs, add new ones, and track which fraternities are following each program.
        </p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Authenticator>
      {({ signOut, user }) => <DashboardContent signOut={signOut} user={user} />}
    </Authenticator>
  );
}
