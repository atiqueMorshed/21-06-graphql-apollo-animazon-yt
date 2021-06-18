export const Animal = {
    category: (parent, args, {categoriesDB}) => {
      return categoriesDB.find(category => category.id === parent.category)
    }
};