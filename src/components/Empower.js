import { val } from "../Constants/Data";
import Button from "./Button";
import'../App.css'
const Empower = () => {
  return (
    <>
      <div className="empower_section">
        <h1>{val.title}</h1>
        <p>{val.des}</p>
        <Button name="Learn More" />
      </div>
    </>
  );
};

export default Empower;
