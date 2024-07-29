import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RestaurantListPage() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/restaurants')
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Restaurant List</h1>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.Restaurant_Id}>
                        <Link to={`/restaurant/${restaurant.Restaurant_Id}`}>{restaurant.Restaurant_Name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantListPage;
