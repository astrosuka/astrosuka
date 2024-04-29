import { createClient } from '@sanity/client';

export default createClient({
  projectId: '42d1k3c6',
  dataset: 'production',
  apiVersion: '2024-04-28',
  useCdn: true,
});
