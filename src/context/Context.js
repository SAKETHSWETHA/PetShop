import { createContext, useContext, useReducer,useState } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products=[];
  const petsFood=[];
  const petsBehaviour=[];

 const products_2 = [{ 
    id: faker.datatype.uuid(),
    name: 'Golden Retreiver',
    price: faker.commerce.price(),
    image: './images/pets/pet-1.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Golden Doodle',
    price: faker.commerce.price(),
    image: './images/pets/pet-2.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Japenese Spitz',
    price: faker.commerce.price(),
    image: './images/pets/pet-3.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Beagle',
    price: faker.commerce.price(),
    image: './images/pets/pet-4.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Pomeranian',
    price: faker.commerce.price(),
    image: './images/pets/pet-5.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'White Swiss Sheperd Dog',
    price: faker.commerce.price(),
    image: './images/pets/pet-6.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Kintamani',
    price: faker.commerce.price(),
    image: './images/pets/pet-7.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'Yorkshir Terrier',
    price: faker.commerce.price(),
    image: './images/pets/pet-8.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'Petenza Dog',
    price: faker.commerce.price(),
    image: './images/pets/pet-9.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Newfoundland Dog',
    price: faker.commerce.price(),
    image: './images/pets/pet-10.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'German Sheperd',
    price: faker.commerce.price(),
    image: './images/pets/pet-11.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },


  {
    id: faker.datatype.uuid(),
    name: 'Siberian Husky',
    price: faker.commerce.price(),
    image: './images/pets/pet-12.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  
  {
    id: faker.datatype.uuid(),
    name: 'Blue Eyes Husky',
    price: faker.commerce.price(),
    image: './images/pets/pet-13.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'Maltese Dog',
    price: faker.commerce.price(),
    image: './images/pets/pet-14.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'Shih Tzu',
    price: faker.commerce.price(),
    image: './images/pets/pet-15.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: 'Airedale Terrier',
    price: faker.commerce.price(),
    image: './images/pets/pet-16.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }


]

const petsFood_2=[ 
  
  {
    id: faker.datatype.uuid(),
    name: 'Free Range Chicken',
    price: faker.commerce.price(),
    image: './images/petsfood/product_01.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Air Dried Beef',
    price: faker.commerce.price(),
    image: './images/petsfood/product_02.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Air Dried Lamb',
    price: faker.commerce.price(),
    image: './images/petsfood/product_03.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Good Dog Beef',
    price: faker.commerce.price(),
    image: './images/petsfood/product_04.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Salmon',
    price: faker.commerce.price(),
    image: './images/petsfood/product_05.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Venison',
    price: faker.commerce.price(),
    image: './images/petsfood/product_06.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Pedigree',
    price: faker.commerce.price(),
    image: './images/petsfood/product_07.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Drools',
    price: faker.commerce.price(),
    image: './images/petsfood/product_08.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Royal Canin',
    price: faker.commerce.price(),
    image: './images/petsfood/product_09.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Science Diet',
    price: faker.commerce.price(),
    image: './images/petsfood/product_10.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },  
  {
    id: faker.datatype.uuid(),
    name: 'Simply Shreds (Boneless Chicken & Beef)',
    price: faker.commerce.price(),
    image: './images/petsfood/product_11.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Simply Shreds (Tuna , Beef & Carrots)',
    price: faker.commerce.price(),
    image: './images/petsfood/product_12.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Simply Shreds (Boneless Chicken)',
    price: faker.commerce.price(),
    image: './images/petsfood/product_13.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }, {
    id: faker.datatype.uuid(),
    name: 'Beef Liver',
    price: faker.commerce.price(),
    image: './images/petsfood/product_14.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: 'Beef',
    price: faker.commerce.price(),
    image: './images/petsfood/dog_food.png',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }


]


const petBehaviour_2 = [

  {
  id: faker.datatype.uuid(),
  name: 'Behaviour Consultation',
  price: faker.commerce.price(),
  image: './images/petbehaviour/pet-1.png',
  inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
},


{
  id: faker.datatype.uuid(),
  name: 'Puppy Basics',
  price: faker.commerce.price(),
  image: './images/petbehaviour/pet-2.png',
  inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
},

{
  id: faker.datatype.uuid(),
  name: 'Basic Commands - Come',
  price: faker.commerce.price(),
  image: './images/petbehaviour/pet-3.png',
  inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}


]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    petsFood : petsFood,
    petBehaviour : petsBehaviour, 
    cart: [],
  
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;