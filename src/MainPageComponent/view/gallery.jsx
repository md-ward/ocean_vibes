import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faPortrait, faLeaf, faPaw, faBuilding } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import useDialogStore from '../controllers/useDialogStore';

const GalleryPage = () => {
    const { close } = useDialogStore();
    const [imageType, setImageType] = useState('all');

    const getImageUrls = (category) => Object.values(import.meta.glob('/public/assets/gallery/*.{png,jpg,jpeg}'))
        .filter((image) => category === 'all' || image['name'].includes(`/${category}-`))
        .map((image) => image['name'].replace('/public/assets/', 'assets/'));

    const imageUrls = getImageUrls(imageType);

    function handleStaggerAnimation() {
        document.getElementById('imageContainer').classList.remove('stagger');
    }

    return (
        <div className="w-4/5  mx-auto grid grid-cols-5 bg-gray-100 shadow-lg rounded-lg py-10 md:py-20 px-5 md:px-20 gap-7 overflow-hidden">
            <span className='col-span-5 flex flex-row justify-end'>
                <button className='bg-blue-500 text-white p-2 hover:bg-blue-600 rounded-lg ' onClick={close}>Close</button>
            </span>
            <div className="col-span-1 max-sm:col-span-5 flex flex-col gap-9">
                <h1 className="text-2xl text-sky-600 font-serif">Gallery</h1>

                <ul className="flex flex-col gap-2">
                    {[
                        { type: 'all', icon: faLayerGroup, name: 'All' },
                        { type: 'portrait', icon: faPortrait, name: 'Portraits' },
                        { type: 'nature', icon: faLeaf, name: 'Nature' },
                        { type: 'animal', icon: faPaw, name: 'Animals' },
                        { type: 'building', icon: faBuilding, name: 'Buildings' },
                    ].map(({ type, icon, name }) => (
                        <li
                            key={type}
                            className={`flex items-center py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 ease-in-out ${imageType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'
                                }`}
                            onClick={() => { setImageType(type); handleStaggerAnimation(); }}
                        >
                            <FontAwesomeIcon icon={icon} className="mr-2" />
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

            <div key={imageType} id='imageContainer' className={`col-span-4 max-sm:col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger ${imageType === 'all' ? 'max-h-custom overflow-y-scroll' : ''}`}>
                {imageUrls.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`gallery-${index}`} className="w-full h-auto object-cover rounded-md" />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;