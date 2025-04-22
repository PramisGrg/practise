import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import CardItems from "../components/cards/card-items";
import OfferSection from "../components/offer-section/offer-section";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <CardItems />
      <OfferSection />
    </div>
  );
};

export default Home;
