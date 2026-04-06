export const filterTopRated = (restaurants) => {
    return restaurants.filter((res) => res.info.avgRating >= 4.2);
};

export const filterFastDelivery = (restaurants) => {
    return restaurants.filter((res) => parseInt(res.info.sla?.deliveryTime) <= 25);
};

export const searchRestaurants = (restaurants, searchText) => {
    return restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
};