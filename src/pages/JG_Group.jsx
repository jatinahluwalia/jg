import VissionMission from "../Components/JG_Group/VissionMission";
import WelcomeJG_Group from "../Components/JG_Group/WelcomeJG_Group";
import NavSideLayout from "../Components/Layouts/NavSideLayout";

const JG_Group = () => {
  return (
    <>
      <NavSideLayout hamburgerColor={`black`}>
        <WelcomeJG_Group />
        <VissionMission/>
      </NavSideLayout>
    </>
  );
};

export default JG_Group;
