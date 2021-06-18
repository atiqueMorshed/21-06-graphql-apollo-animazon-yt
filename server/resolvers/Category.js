export const Category = {
    animals: (parent, args, {animalsDB}) => {
      return animalsDB.filter( animal => animal.category === parent.id)
    }
};