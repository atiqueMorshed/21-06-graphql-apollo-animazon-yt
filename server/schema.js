import {gql} from 'apollo-server';

const typeDefs = gql`
  type MainCard {
    id: ID!
    title: String!
    image: String!
  }
  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    delivery: String
    description: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String!
    #Relations
    category: Category!
  }
  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    #Relations
    animals: [Animal!]!
  }
  type Query {
    mainCards: [MainCard!]!
    animals: [Animal!]!
    animal(slug: String): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float!
      price: String!
      delivery: String
      description: [String!]!
      stock: Int!
      onSale: Boolean
      slug: String!
      category: String!
      ): Animal,
    
    removeAnimal(id: ID!): Boolean!
  }
`;

export default typeDefs;