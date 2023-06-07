import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faImages, faSmile, faDroplet, faComments } from '@fortawesome/free-solid-svg-icons';
import useDialogStore from '../controllers/useDialogStore';
import IntroductionPage from '../view/introduction';
import GalleryPage from '../view/gallery';
import TestimonialPage from '../view/testimonial';
import AboutUsPage from '../view/aboutUs';

import ContactUsPage from '../view/contact_us'
const NavBar = () => {
  const nvaList = [
    {
      icon: faWater,
      link: <IntroductionPage/>,
      title: 'Introduction'
    },
    {
      icon: faImages,
      link: <GalleryPage/>,
      title: 'Gallery'
    },
    {
      icon: faSmile,
      link: <TestimonialPage/>,
      title: 'Testimonials'
    }, {
      icon: faDroplet,
      link: <AboutUsPage/>,
      title: 'About'
    },
    {
      icon: faComments,
      link: <ContactUsPage/>,
      title: 'Contact'
    }
  ];
  const { open } = useDialogStore();


  return (
    <div className='flex flex-col md:flex-row justify-around mt-8   md:h-48 items-center gap-7'>
      {nvaList.map((item, index) => (
        <button key={index} onClick={() => open(item.link)}
          className='bg-sky-600 h-40  rounded-xl w-48 justify-center gap-5 text-lg text-white  items-center  flex flex-col transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-sky-500 hover:text-white'>
          <span>{item.title}</span>
          <FontAwesomeIcon className='text-white text-3xl' icon={item.icon} />
        </button>
      ))}
    </div>
  );
}

export default NavBar;