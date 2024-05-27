import { pricing } from "../Constants/Data";

import PriceList from "./PriceList";
import'../App.css'
const Pricing = () => {
  return (
    <> 
      <div className="price-upper-box">

        <p className="plan">Choose the Right Plan for You</p>
        <p className="plan-subtitle">
          Select a plan that suits your needs and start classifying images with
          ease
        </p>
      </div>
      <div className="card-outer-box">
        {pricing.map((e) => {
          return <PriceList key={e.id} data={e} />;
        })}
      </div>
    </>
  );
};

export default Pricing;
