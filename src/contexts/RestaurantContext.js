import { useState, useEffect } from 'react';
import axios from 'axios';

const { createContext } = require('react');

export const RestaurantContext = createContext(null);

function RestaurantContextProvider(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/restaurants/').then(
      (response) => {
        setRestaurants(response.data);
      },
      (error) => console.error(error)
    );
  }, []);

  return (
    <RestaurantContext.Provider value={[restaurants, setRestaurants]}>
      {props.children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContextProvider;
