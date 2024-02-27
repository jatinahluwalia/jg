import WelcomeComponent from '../Components/Home/WelcomeComponent/WelcomeComponent';
import NavSideLayout from '../Components/Layouts/NavSideLayout';
import Partners from '../Components/Partners';
import Presence from '../Components/Presence';

const Home = () => {
  return (
    <>
      <NavSideLayout hamburgerColor={`white`}>
        <WelcomeComponent />
        <Presence />
        <Partners />
      </NavSideLayout>
    </>
  );
};

export default Home;
