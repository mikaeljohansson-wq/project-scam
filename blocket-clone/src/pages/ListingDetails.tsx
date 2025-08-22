import React from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetails.css'; // Assuming you have a CSS file for styles

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Fetch listing details from an API or data source
        const fetchListingDetails = async () => {
            try {
                const response = await fetch(`/api/listings/${id}`);
                const data = await response.json();
                setListing(data);
            } catch (error) {
                console.error('Error fetching listing details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchListingDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!listing) {
        return <div>Listing not found.</div>;
    }

    return (
        <div className="listing-details">
            <h1>{listing.title}</h1>
            <img src={listing.image} alt={listing.title} className="listing-image" />
            <p>{listing.description}</p>
            <p>Price: ${listing.price}</p>
            <button className="contact-seller">Contact Seller</button>
        </div>
    );
};

export default ListingDetails;