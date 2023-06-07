import ContentDialog from "../widgets/content_dialog";
import NavBar from "../widgets/navbar";
import VideePlayer from "../widgets/video_player";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <span className="flex flex-col sm:p-7 font-custom ">
        <h1 className="text-6xl text-sky-500  ">OCEAN</h1>
        <h1 className="text-3xl uppercase mx-40 text-gray-600">vibes</h1>
        <h1 className="text-2xl text-gray-500 sm:ml-20 font-sans">simple and effective design</h1>
      </span>
      <VideePlayer></VideePlayer>
      <NavBar></NavBar>
    </div>
  );
}

export default MainPage;