import MaxWidthContainer from "../layouts/max-width-container";
import support from "../../assets/icons/support.svg";
import shipping from "../../assets/icons/shipping.svg";
import trophy from "../../assets/icons/trophy.svg";
import verified from "../../assets/icons/verified.svg";

const OfferSection = () => {
  return (
    <MaxWidthContainer className="bg-primary py-6">
      <section className="md:flex space-y-8 justify-between">
        <div className="flex gap-4 items-center">
          <img src={support} alt="support icon" />
          <h1>24/7 Support</h1>
        </div>
        <div className="flex gap-4 items-center">
          <img src={shipping} alt="shipping icon" />
          <h1>Free Shipping</h1>
        </div>
        <div className="flex gap-4 items-center">
          <img src={trophy} alt="trophy icon" />
          <h1>High Quality</h1>
        </div>
        <div className="flex gap-4 items-center">
          <img src={verified} alt="verified icon" />
          <h1>Warranty Protection</h1>
        </div>
      </section>
    </MaxWidthContainer>
  );
};

export default OfferSection;
