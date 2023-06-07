import useDialogStore from "../controllers/useDialogStore";
import React, { useState, useEffect } from 'react';

const AboutUsPage = () => {

    const { close } = useDialogStore();


    return (
        <div className="stagger   p-2   grid   grid-cols-2  bg-gray-100"   >
            {/* text content */}
            <div className="p-10  flex  flex-col justify-center max-md:col-span-2  max-md:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-700">
                    About Us
                </h1>
                <span>
                    <p className="text-lg md:text-xl mb-5 text-gray-700">
                        At Ocean Vibes, we're passionate about the ocean and all the amazing creatures that call it home. Our mission is to promote marine conservation and inspire people to take action to protect our oceans.
                    </p>
                    <p className="text-lg md:text-xl mb-5 text-gray-700">
                        We offer a variety of products and resources to help people connect with the ocean and learn more about marine conservation. From beach towels and t-shirts to informative articles and stunning photography, we're here to help you make a difference for our oceans.
                    </p>



                </span>
            </div>

            {/* image  */}

            <div className="flex items-center row-span-1   justify-center  max-md:col-span-2 max-md:order-1   ">
                <img
                    src="assets/img/about.jpg"
                    alt="About Us"
                    className="h-full rounded-lg shadow-lg"
                />
            </div>


            {/* close button */}

            <span className="col-span-2 flex justify-end pt-3 pr-5 order-3">
                <button
                    className=" bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500 "
                    onClick={close}
                >
                    Close
                </button>
            </span>
        </div>
    );
};

export default AboutUsPage;