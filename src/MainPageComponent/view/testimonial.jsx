import useDialogStore from "../controllers/useDialogStore";
import TestimonialImage1 from "/assets/img/testimonial-01.jpg";
import TestimonialImage2 from "/assets/gallery/portrait-01.jpg";
import TestimonialImage3 from "/assets/gallery/portrait-02.jpg";
import TestimonialImage4 from "/assets/gallery/portrait-03.jpg";
import TestimonialImage5 from "/assets/gallery/portrait-04.jpg";

const TestimonialPage = () => {
  const { close } = useDialogStore();

  return (
    <div className="stagger flex flex-col lg:flex-row sm:items-center md:items-start justify-center bg-gray-100 py-10 md:py-20 px-5 md:px-20">
      <div className="w-full lg:w-1/3 flex items-center justify-center">
        <img
          src={TestimonialImage1}
          alt="Testimonial"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <div className=" lg:w-2/3 md:ml-10 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-800">
          Testimonials from <span className="text-sky-500">Happy Customers</span>
        </h1>
        <p className="text-lg md:text-xl mb-5 text-gray-800">
          We're proud to have received positive feedback from our customers. Here are some of their testimonials:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-800 mb-4">
              "I love the products from Ocean Vibes! The quality is amazing and the designs are so unique. I've received so many compliments on my beach towel and t-shirt."
            </p>
            {/* Add the person's image here. Make sure it's a square image and adjust the size if necessary. */}
            <span className="flex ">
              <img src={TestimonialImage2} alt="" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-gray-600 font-medium">- Sarah T.</p>
            </span>
          </div>
          {/* Second Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-800 mb-4">
              "The articles on Ocean Vibes are so informative and inspiring. I've learned so much about marine conservation and surfing. Keep up the great work!"
            </p>
            {/* Add the person's image here. Make sure it's a square image and adjust the size if necessary. */}
            <span className="flex ">
              <img src={TestimonialImage3} alt="Alex D. image" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-gray-600 font-medium">- Alex D.</p>
            </span>
          </div>
          {/* Third Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-800 mb-4">
              "The photos on Ocean Vibes are breathtaking. I feel like I'm at the beach even when I'm stuck at home. Thank you for sharing these amazing images!"
            </p>
            {/* Add the person's image here. Make sure it's a square image and adjust the size if necessary. */}
            <span className="flex ">
              <img src={TestimonialImage4} alt="" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-gray-600 font-medium">- Rachel B.</p>
            </span>
          </div>
          {/* Fourth Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-800 mb-4">
              "I recently went on a beach vacation and used the packing list from Ocean Vibes. It was so helpful and made my trip stress-free. I highly recommend this site!"
            </p>
            {/* Add the person's image here. Make sure it's a square image and adjust the size if necessary. */}
            <span className="flex ">
              <img src={TestimonialImage5} alt="" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-gray-600 font-medium">- Emma H.</p>
            </span>
          </div>
        </div>
        <span className="w-full  flex justify-end pt-3">
          <button
            className=" bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500 "
            onClick={close}
          >
            Close
          </button>        
        </span>
      </div>
    </div>
  );
};

export default TestimonialPage;