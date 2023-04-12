import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'oszw4gmppj',
  apiKey: process.env.API_KEY,
});