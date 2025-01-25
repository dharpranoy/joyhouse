import React, { useState, useEffect } from 'react';
import axiosClient from '../axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from '../component/Loader/Loader';

const Delete = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const userPassword = prompt("Enter your Password:");
        setPassword(userPassword);

        if (!userPassword && userPassword !== "") {
            // If user doesn't enter anything or clicks Cancel
            navigate("/");
            return; // Exit the useEffect early to prevent further execution
        }

        if (import.meta.env.VITE_PASSWORD !== userPassword) {
            toast.error("Wrong Password");
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        setLoading(true);
        axiosClient.get('/getImages')
            .then((res) => {
                setImages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const deleteImg = (id) => {
        axiosClient.delete('/deleteImg', {
            data: { id }
        }).then((res) => {
            console.log(res);
            setImages((prevImages) => prevImages.filter(image => image._id !== id));
            toast.success("Image deleted successfully");
        }).catch((err) => {
            console.log("Error occurred while deleting the image", err);
            toast.error("Failed to delete the image");
        });
    };

    if (loading)
        return <Loader />;

    return (
        <div className='sm:max-w-[80vw] grid grid-cols-1 sm:grid-cols-2 justify-start gap-2 max-w-[98vw] mt-16 mx-auto p-4'>
            {images?.map((image, index) => (
                <div className='relative' key={index}>
                    <img src={image.imageUrl} alt={`Image ${index}`} className='h-[250px] w-auto sm:h-[300px] md:h-[400px] rounded-md' />
                    <button
                        onClick={() => deleteImg(image._id)}
                        className='bg-red-600 text-white px-4 py-1 rounded-full text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Delete;
