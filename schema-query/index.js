const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # Tipo básico
  scalar Date

  # Tipos criados
  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  # Ponto de entrada da API
  type Query {
    ola: String
    currentHour: Date
    usuarioLogado: Usuario
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Query: {
    ola() {
      return "Olá Mundo!";
    },
    currentHour() {
      const date = new Date();
      return date.toTimeString();
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: "Ana",
        email: "anadaweb@gmail.com",
        idade: 23,
        salario_real: 1234.53,
        vip: true,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
