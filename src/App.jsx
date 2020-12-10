import React from 'react';
import './App.css';
import RestaurantList from './components/views/RestaurantList/RestaurantList';
import RestaurantContextProvider from './contexts/RestaurantContext';

function App() {
  return (
    <RestaurantContextProvider>
      <div className='App'>
        <RestaurantList />
      </div>
    </RestaurantContextProvider>
  );
}

export default App;
