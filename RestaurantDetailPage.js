import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetailPage() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/restaurant/${id}`)
            .then(response => response.json())
            .then(data => setRestaurant(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!restaurant) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{restaurant.Restaurant_Name}</h1>
            <p>{restaurant.Address}</p>
            <p>{restaurant.Cuisines}</p>
            <p>Average cost for two: {restaurant.Currency} {restaurant.Average_Cost_for_two}</p>
            <p>Rating: {restaurant.Aggregate_Rating} ({restaurant.Rating_Text})</p>
        </div>
    );
}

export default RestaurantDetailPage;
