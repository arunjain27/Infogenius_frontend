import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/reviews');
      setReviews(response.data);
      console.log(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const renderStars = (rating) => {
    const starArray = [];
    for (let i = 0; i < rating; i++) {
      starArray.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
    return starArray;
  };

  return (
    <Container className="py-5">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Reviews</h1>

      <Carousel controls indicators variant="dark">
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row className="text-center">
                <Col lg="12">
                 <span style={{fontSize:'1.5rem',fontWeight:'bold',color:' #828286'}}>Title:</span> <h6 className="mb-3">{review.title}</h6>
                 <span style={{fontSize:'1.5rem',fontWeight:'bold',color:' #828286'}}>Message:</span>   <p className="px-xl-3">{review.message}</p>
                 <span style={{fontSize:'1.rem',fontWeight:'bold',color:' #828286'}}>Rating</span> <p> {renderStars(review.rating)}</p> {/* Render stars */}
                 <span style={{fontSize:'1.7rem',fontWeight:'bold',color:' #828286'}}>By:</span>  <p>  {review.name}</p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
