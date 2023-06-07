import { useMemo } from "react";
import useDialogStore from "./MainPageComponent/controllers/useDialogStore";
import MainPage from "./MainPageComponent/view/mainPage";
import ContentDialog from "./MainPageComponent/widgets/content_dialog";
import Footer from "./MainPageComponent/widgets/footer";
import WelcomeDialog from "./wellcoming_dialog";

const App = () => {
  const { isOpen } = useDialogStore()

  const mainPage = useMemo(() => {
    return !isOpen ? <MainPage></MainPage> : null;
  }, [isOpen]);

  const footer = useMemo(() => {
    return !isOpen ? <Footer></Footer> : null;
  }, [isOpen]);

  return (
    <>
    <WelcomeDialog></WelcomeDialog>
      <ContentDialog></ContentDialog>
      {mainPage}
      {footer}
    </>
  );
}

export default App;