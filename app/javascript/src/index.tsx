import { ApolloProvider } from '@apollo/client'
import GraphqlClient from 'lib/apollo-client'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ApolloProvider client={GraphqlClient}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>
)

