import BeforeAfter from "../components/BeforeAfter";
import Features from "../components/Features";
import Info from "../components/Info";

import TeamGrid from "../components/TeamGrid";
import TeamTrain from "../components/TeamTrain";
import Testimonial from "../components/Testimonial";



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
      <Features/>
     <div className="bg-black flex justify-between items-center">
     <BeforeAfter/>
     <Testimonial/>
     </div>
     
    </div>
  );
};

export default HomePage;
