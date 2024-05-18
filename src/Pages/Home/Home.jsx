import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khan Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
