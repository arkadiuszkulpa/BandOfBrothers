import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Subscriber database table with fields for
email, name, location, interests, and tracking information.
=========================================================================*/
const schema = a.schema({
  Subscriber: a
    .model({
      email: a.string().required(),
      name: a.string(),
      location: a.string(),
      interests: a.string(),
      source: a.string(), // Where they came from (e.g., "Exodus90", "Catholic Man UK")
      dateJoined: a.datetime(),
      status: a.string(), // e.g., "active", "unsubscribed"
      whatsappJoined: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey(), allow.owner()]),

  Program: a
    .model({
      name: a.string().required(),
      description: a.string(),
      duration: a.string(), // e.g., "90 days"
      type: a.string(), // e.g., "Christian", "Secular"
      resourcesUrl: a.url(),
      isActive: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey(), allow.owner()]),

  Fraternity: a
    .model({
      name: a.string().required(),
      programId: a.id(),
      status: a.string(), // e.g., "forming", "active", "completed"
      startDate: a.date(),
      memberCount: a.integer(),
      whatsappGroupUrl: a.url(),
    })
    .authorization((allow) => [allow.publicApiKey(), allow.owner()]),

  OutreachContact: a
    .model({
      name: a.string(),
      source: a.string().required(), // e.g., "Exodus90 Community", "Catholic Man UK"
      dateContacted: a.datetime(),
      responseStatus: a.string(), // e.g., "not_contacted", "contacted", "responded", "joined"
      notes: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUD requests to your table. (THIS snippet will only
work in the frontend code file.)

// ...
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>() // use Data client for CRUD requests

// create a new subscriber
await client.models.Subscriber.create({
  email: 'john@example.com',
  name: 'John Doe',
  dateJoined: new Date().toISOString(),
  status: 'active'
})

// list all subscribers
const { data: subscribers } = await client.models.Subscriber.list()

=========================================================================*/
