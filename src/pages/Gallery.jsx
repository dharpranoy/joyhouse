import React, { useState, useEffect } from 'react';
import axiosClient from '../axios';
import toast from 'react-hot-toast';
import Loader from '../component/Loader/Loader';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient.get('/getImages')
            .then((res) => {
                //console.log(res.data);
                setImages(res.data);
                setLoading(false); // Move setLoading(false) here
            })
            .catch((err) => {
                console.log(err);
                toast.error("Images are not fetched");
                setLoading(false); // Also set it here in case of error
            });
    }, []);

    if (loading)
        return (
            <Loader />
        );

    return (
        <div className='sm:max-w-[80vw] grid grid-cols-1 min-h-[80vh] sm:grid-cols-2 justify-start gap-2 max-w-[98vw] mt-16 mx-auto p-4'>
            {images?.map((image, index) => {
                return (
                    <div className='' key={index}>
                        <img src={image.imageUrl} alt={`Image ${index}`} className='rounded-md' />
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;
