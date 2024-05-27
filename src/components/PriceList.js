import'../App.css'
const PriceList = (prop) => {
    console.log(prop);
    const { title, content, price, desc1, desc2, desc3, desc4, desc5, btn } =
      prop.data;
    return (
      <div className="price-box">
        <h2>{title}</h2> 
        <p className="price-cont">{content}</p>
        <p className="price-amt">{price}</p>
        <p className="price-desc1">{desc1}</p> 
        <p className="price-desc1">{desc2}</p>
        <p className="price-desc1">{desc3}</p>
        <p className="price-desc1">{desc4}</p>
        <p className="price-desc1">{desc5}</p>
        <button>{btn}</button>
      </div>
    );
  };
  
  export default PriceList;
  