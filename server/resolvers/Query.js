export const Query = {
    mainCards: (parent, args, {mainCardsDB}) => mainCardsDB,
    
    animals: (parent, args, {animalsDB}) => animalsDB,
    animal: (parent, args, {animalsDB}) => {
      const animal = animalsDB.find( animal => animal.slug === args.slug);
      return animal;
    },

    categories: (parent, args, {categoriesDB}) => categoriesDB,
    category: (parent, args, {categoriesDB}) => {
      const category = categoriesDB.find(category => category.slug === args.slug);
      return category;
    }
}