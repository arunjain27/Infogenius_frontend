import'../App.css'
const QuestionList = (prop) => {
    console.log(prop);
    return (
      <>
        <div className="Quesion_ans">
          <h2>{prop.val.Q}</h2>
          <p>{prop.val.A}</p>
        </div>
      </>
    );
  };
  
  export default QuestionList;
  