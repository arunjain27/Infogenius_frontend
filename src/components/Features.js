import { features } from "../Constants/Data";
import FeaturesList from "./FeaturesList";
import'../App.css'
const Features = () => {
  return (
    <>
      <div className="features_container">
        <h1 className="features_heading">
          Key Features of Our Image Classifier Application
        </h1>
        <h4 className="features_sub_heading">
          Experience the power of image classification with our user-friendly
          interface
        </h4>
        <div className="features_box">
          {features.map((elem) => {
            return <FeaturesList key={elem.id} val={elem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
