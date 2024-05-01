import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useTyped from '../customhook/useTyped';
import'../css/Card.css'
const Card = ({fruitdata}) => {
      const nameEl = useTyped([fruitdata.name],1000);
  const caloriesAmountEl = useTyped([`${fruitdata.caloriesAmount}`],2000);
  const caloriesAmountDescEl = useTyped([fruitdata.caloriesAmountDesc], 3000); // Delay for 2 seconds
  const fiberAmountEl = useTyped([`${fruitdata.fiberAmount}`], 10000); // Delay for 4 seconds
  const fiberAmountDescEl = useTyped([fruitdata.fiberAmountDesc], 11000); // Delay for 6 seconds
  const vitaminCAmountEl = useTyped([`${fruitdata.vitaminCAmount}`], 17000); // Delay for 8 seconds
  const vitaminCAmountDescEl = useTyped([fruitdata.vitaminCAmountDesc], 18000); // Delay for 10 seconds
      return (
            <div className="card">
              <div className="card-header">
                <h5 className="card-title" ref={nameEl}></h5>
              </div>
              <div className="card-body">
             <p className='heading'>Calories Amount<h5 className="card-text" ref={caloriesAmountEl}></h5></p>
             <p className='heading'>Calories Description  <p className="card-text" ref={caloriesAmountDescEl}></p>  </p>
             <p className='heading'>Fibre Amount<h5 className="card-text" ref={fiberAmountEl}></h5></p>
             <p className='heading'>Fibre Description<p className="card-text" ref={fiberAmountDescEl}></p></p>
             <p className='heading'>Vitamin Amount  <h5 className="card-text" ref={vitaminCAmountEl}></h5></p>
             <p className='heading'>Vitamin Description   <p className="card-text" ref={vitaminCAmountDescEl}></p></p>
              </div>
            </div>
          );
}

export default Card
