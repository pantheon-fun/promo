import sanityClient from '@sanity/client';

import { config } from '@/Config.bs.js';

export const configuredSanityClient = sanityClient(config.sanity);
