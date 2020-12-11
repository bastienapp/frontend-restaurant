import React, { useContext, useState } from 'react';
import axios from 'axios';
import { findAll } from '../../../services/RestaurantApi';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

function RestaurantCreate() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useContext(RestaurantContext);

  const submit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/restaurants', {
        name: name,
        city: city,
      })
      .then(
        (response) => {
          console.log(response);
          findAll((result) => {
            // mettent à jour la liste des restaurants du context
            setRestaurants(result);
          });
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <form onSubmit={submit}>
      <label>
        <span>Restaurant's name:</span>
        <input
          type='text'
          name='name'
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        <span>Restaurant's city:</span>
        <input
          type='text'
          name='city'
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <input type='submit' value='Send' />
    </form>
  );
}

export default RestaurantCreate;
