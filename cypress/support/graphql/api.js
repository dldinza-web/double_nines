import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import Rails from '@rails/ujs'

const GraphqlClient = new ApolloClient({
  uri: '/graphql',
  headers: {
    "X-CSRF-Token": Rails.csrfToken() || ''
  },
  cache: new InMemoryCache()
});

export default GraphqlClient
