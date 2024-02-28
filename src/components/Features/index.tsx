import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <SectionTitle
            title="What we are for?"
            paragraph="We're here to redefine possibilities, leveraging cutting-edge technology to fuel your success. Our mission is to inspire, create, and elevate in a world of limitless innovation"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
