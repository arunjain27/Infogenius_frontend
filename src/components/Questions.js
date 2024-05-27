import { FAQ } from "../Constants/Data";
import QuestionList from "./QuestionList";
import'../App.css'
const Questions = () => {
  return (
    <>
      <div className="quetions_section">
        <div className="common_question">
          <span>FAQ</span>
          <h1>Common questions</h1>

          <h4>Here are some of the most common questions that we get.</h4>
        </div>
        <div className="QuestionList">
          {FAQ.map((elem) => {
            return <QuestionList key={elem.id} val={elem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;
