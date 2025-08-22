import React from 'react';
import ListingCard from '../components/Listings/ListingCard';
import Navbar from '../components/Navbar';
import './Home.css'; // Assuming you have a CSS file for Home styles

const Home = () => {
    const featuredListings = [
        // Sample data for featured listings
        { id: 1, title: 'Listing 1', image: '/path/to/image1.jpg', description: 'Description for listing 1' },
        { id: 2, title: 'Listing 2', image: '/path/to/image2.jpg', description: 'Description for listing 2' },
        { id: 3, title: 'Listing 3', image: '/path/to/image3.jpg', description: 'Description for listing 3' },
    ];

    return (
        <div className="home">
            <Navbar />
            <h1>Featured Listings</h1>
            <div className="listing-container">
                {featuredListings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default Home;