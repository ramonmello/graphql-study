const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  # Ponto de entrada da API
  type Query {
    ola: String
    currentHour: String
  }
`

const resolvers = {
  Query: {
    ola() {
      return 'Olá Mundo!'
    },
    currentHour() {
      const date = new Date()
      return date.toTimeString();
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Executando em ${url}`)
})