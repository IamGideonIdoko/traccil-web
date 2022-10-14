import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client';
import { wrapper } from '../store/store';
import { subscribeToState } from '../helper/store.helper';

// subscribe to store changes;
subscribeToState();

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(App);
