import'../App.css'
const FeaturesList = (prop) => {
    // console.log(prop.val.title)
    return (
      <>
        <div className="list_Box">
          <h1>{prop.val.title}</h1>
          <p>{prop.val.des}</p>
        </div>
      </>
    );
  };
  
  export default FeaturesList;
  