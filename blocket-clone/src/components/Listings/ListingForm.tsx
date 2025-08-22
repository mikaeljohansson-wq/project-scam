import React, { useState } from 'react';

const ListingForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description, price, image });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit} className="listing-form">
            <h2>Create or Edit Listing</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    accept="image/*"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ListingForm;