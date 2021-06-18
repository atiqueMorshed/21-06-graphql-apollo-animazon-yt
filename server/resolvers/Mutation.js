import {v4} from 'uuid';

export const Mutation = { 
    addAnimal: (parent, args, {animalsDB}) => {
        const elementToAdd = {
            id: v4(),
            ...args
        };
        animalsDB.push(elementToAdd);
        return elementToAdd;
    },

    removeAnimal: (parent, {id}, {animalsDB}) => {
        animalsDB = animalsDB.filter( animal => animal.id !== id);
        return true;
    }
}