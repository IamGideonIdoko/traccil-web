import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import constants from '../config/constants.config';
import envConfig from '../config/environment.config';

const client = new ApolloClient({
  link: new HttpLink({
    uri: constants.graphqlBaseUrl,
    headers: {
      Authorization: `Bearer `,
    },
  }),
  cache: new InMemoryCache(),
  connectToDevTools: !envConfig.isProduction,
});

export default client;
