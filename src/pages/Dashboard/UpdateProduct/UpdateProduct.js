import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const UpdateProduct = () => {
    const [bike, setBike] = useState({});
    const { bike_name, image, short_des, brand, price } = bike;

    const { id } = useParams();

    const handleBikeNameChange = e => {
        const updateBikeName = e.target.value;
        const updateBike = { ...bike };
        updateBike.bike_name = updateBikeName;
        setBike(updateBike);
    }
    const handleBrandNameChange = e => {
        const updateBrandName = e.target.value;
        const updateBike = { ...bike };
        updateBike.brand = updateBrandName;
        setBike(updateBike);

    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateBike = { ...bike };
        updateBike.short_des = updateDescription;
        setBike(updateBike);
    }
    const handleImageChange = e => {
        const updateImage = e.target.value;
        const updateBike = { ...bike };
        updateBike.image = updateImage;
        setBike(updateBike);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateBike = { ...bike };
        updateBike.price = updatePrice;
        setBike(updateBike);
    }

    const handleAddBike = e => {
        e.preventDefault();
        const confirmUpdate = window.confirm("Are you sure want to update ?");

        if (confirmUpdate) {
            fetch(`http://localhost:5000/bikes/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bike)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Successfully Updated');
                        setBike({});
                    }
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="my-5">
                    <h3>This is Update Product: {id}</h3>
                    <form onSubmit={handleAddBike} className="add-product-form">
                        <input onChange={handleBikeNameChange} value={bike_name} type="text" placeholder="Bike Name" />

                        <input onChange={handleBrandNameChange} value={brand} type="text" placeholder="Brand Name" />

                        <textarea onChange={handleDescriptionChange} value={short_des} name="" id="" cols="30" rows="5" placeholder="Write Here Short Description of Bike"></textarea>

                        <input onChange={handleImageChange} value={image} type="text" placeholder="Image URL Of Bike" />

                        <input onChange={handlePriceChange} value={price} type="text" placeholder="Price Of Bike" />

                        <button className="order-btn">Update Bike Details</button>
                    </form>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default UpdateProduct;