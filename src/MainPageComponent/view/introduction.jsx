import useDialogStore from "../controllers/useDialogStore";

const IntroductionPage = () => {
  const { close } = useDialogStore();

  return (
    <div className="stagger   flex flex-col md:flex-row sm:items-center md:items-start justify-center bg-gray-100 py-10 md:py-20 px-5 md:px-20">
      <div className="md:w-1/2 lg:w-1/3 flex items-center justify-center">
        <img
          src="assets/img/intro-big.jpg"
          alt="Ocean Vibes"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 lg:w-2/3 md:ml-10 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-800">
          Welcome to <span className="text-sky-500">Ocean</span>{" "}
          <span className="text-gray-500">Vibes!</span>
        </h1>
        <p className="text-lg md:text-xl mb-5 text-gray-800">
          At Ocean Vibes, we're passionate about all things ocean. We believe
          that the ocean is a precious resource that should be protected and
          enjoyed by everyone. That's why we've created a site that celebrates
          the beauty and wonder of the ocean.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
          Some of the topics we cover on Ocean Vibes include:
        </h2>
        <ul className="list-disc list-inside text-lg md:text-xl mb-5 ">
          <li>
            Marine conservation: Learn about the threats facing our oceans and
            what you can do to help protect them.
          </li>
          <li>
            Surfing: Get tips on how to catch the perfect wave, read interviews
            with pro surfers, and check out the latest gear.
          </li>
          <li>
            Ocean photography: Browse stunning photos of the ocean and its
            inhabitants, and learn how to improve your own photography skills.
          </li>
          <li>
            Beach lifestyle: Discover the best beach destinations around the
            world, learn how to pack for a beach vacation, and get inspired by
            beach fashion and decor.
          </li>
        </ul>
        <p className="text-lg md:text-xl">
          We're constantly updating our site with new content, so be sure to
          check back often for the latest news and features. And if you have
          any suggestions or feedback, we'd love to hear from you!
        </p>
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

export default IntroductionPage;