import Info from "../components/Info";

import TeamGrid from "../components/TeamGrid";
import TeamTrain from "../components/TeamTrain";

const HomePage = () => {
  return (
    <div>
      <Info />
      <div className="hidden sm:block bg-black py-10">
        <TeamGrid />
      </div>

      <div className="sm:hidden block">
        <TeamTrain />
      </div>
    </div>
  );
};

export default HomePage;
