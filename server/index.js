import {ApolloServer} from 'apollo-server';

import typeDefs from './schema.js';
import {mainCardsDB, animalsDB, categoriesDB} from './db.js';

import {Query} from './resolvers/Query.js';
import {Mutation} from './resolvers/Mutation.js';
import {Category} from './resolvers/Category.js';
import {Animal} from './resolvers/Animal.js';

// const resolvers = {
//   Query: {
//     mainCards: () => mainCardsDB,
    
//     animals: () => animalsDB,
//     animal: (parent, args, context) => {
//       const animal = animalsDB.find( animal => animal.slug === args.slug);
//       return animal;
//     },

//     categories: () => categoriesDB,
//     category: (parent, args, context) => {
//       const category = categoriesDB.find(category => category.slug === args.slug);
//       return category;
//     }
//   },
//   Category: {
//     animals: (parent, args, context) => {
//       return animalsDB.filter( animal => animal.category === parent.id)
//     }
//   },
//   Animal: {
//     category: (parent, args, context) => {
//       return categoriesDB.find(category => category.id === parent.category)
//     }
//   }
// }

const server = new ApolloServer({
  typeDefs, 
  resolvers: {
    Query,
    Mutation,
    Category,
    Animal
  },
  context: {
    mainCardsDB,
    categoriesDB,
    animalsDB
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});