import Empower from "./Empower"
import Features from "./Features"
import Hero from "./Hero"
import Pricing from "./Pricing"
import Questions from "./Questions";
import Review from './Review'
import ReviewForm from './ReviewForm'

const Home=()=>{
    return(
        <>
        <Hero/>
        <Features/>
        <Pricing/>
        <Empower/>

        <Questions/>
        <Review/>
      <div style={{display:'flex',justifyContent:'center'}}>
       <div style={{ width:'60%' }}>
        <ReviewForm/>
        </div>
        </div>
        </>
    )
}

export default Home