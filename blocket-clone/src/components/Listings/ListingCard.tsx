import React from 'react';

interface ListingCardProps {
    title: string;
    image: string;
    description: string;
    price: number;
}

const ListingCard: React.FC<ListingCardProps> = ({ title, image, description, price }) => {
    return (
        <div className="listing-card">
            <img src={image} alt={title} className="listing-image" />
            <div className="listing-details">
                <h2 className="listing-title">{title}</h2>
                <p className="listing-description">{description}</p>
                <p className="listing-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ListingCard;