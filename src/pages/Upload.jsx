import { useState } from 'react';
import img from '../assets/img.png';
import { storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axiosClient from '../axios.js';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import imageCompression from 'browser-image-compression';

const Upload = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = async (e) => {
        const compressedImage = await compressImage(e.target.files[0]);
        setImage(compressedImage);
    };

    const compressImage = async (file) => {
        const options = {
            maxSizeMB: 1, // Max size in megabytes
            maxWidthOrHeight: 800, // Max width or height
        };

        try {
            const compressedFile = await imageCompression(file, options);
            return compressedFile;
        } catch (error) {
            console.error('Image compression error:', error);
            return file; // Return original file if compression fails
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            const storageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(storageRef, image);
            const url = await getDownloadURL(storageRef);
            setImageUrl(url);

            axiosClient
                .post('/upload', {
                    imageUrl: url,
                    password,
                })
                .then((res) => {
                    console.log(res);
                    toast.success('Uploaded');
                    navigate('/gallery');
                })
                .catch((err) => {
                    console.log(err);
                    toast.error('Wrong Password');
                });
        } else {
            console.error('No image file selected');
            toast.error('Select Image');
        }
    };

    const gradientStyle = {
        background: `linear-gradient(to bottom right, #000000, #031E32, #071437, #0B2F65`,
    };
    return (
        <div style={gradientStyle} className='max-w-[500px] rounded-md mx-auto min-h-[70vh] my-12 flex flex-col justify-center'>
            <form action='' className='px-4 mt-4 flex flex-col gap-4 sm:gap-6 text-white'>
                <div className='border-2 flex flex-col items-center border-dashed rounded-md p-4'>
                    <img src={img} alt='' />
                    <input type='file' className='' onChange={handleFileChange} />
                    <div className='text-[#DADBDD] text-center'>
                        <p>Maximum size of 800 x 400px</p>
                        <p>Supports: PNG, JPG</p>
                    </div>
                </div>
                <input type='text' placeholder='Password' className='w-full px-2 py-2 rounded-md text-[#9C9FA6] bg-[#293040]' onChange={(e) => { setPassword(e.target.value) }} />
                <div className='flex justify-between'>
                    <input type='submit' placeholder='cancel' name='cancel' value={'Cancel'} className='bg-[#0B2F65] py-1 px-4 rounded-full font-bold' />
                    <button type='submit' className='bg-[#FFAE02] py-1 px-4 rounded-full font-bold' onClick={handleSubmit}>Submit</button>
                </div>
                <div className='flex justify-center'>
                    <NavLink to={"/delete"} className='bg-red-600 py-1 px-4 rounded-full font-semibold' >Delete</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Upload;
