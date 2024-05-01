import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='grey'className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>© 2023 InfoGeniushub. All rights reserved.</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                InfoGeniushub
              </h6>
              <p>
              InfoGeniushub is a revolutionary platform dedicated to transforming the way you interact with images. At the core of our service is a sophisticated image processing technology that doesn't just identify details but understands them, providing you with comprehensive and insightful descriptions.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FastApi/Nodejs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MongoDB
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Model
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  arunjain2704@gmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  bpy@gmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  ayushrawat@gmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  abhaygaur@gmail.com
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Posh Laxmi Nagar, 110092, New Delhi
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                InfoGeniushub.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 234 567 9988
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 1234 567 4489
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    
    </MDBFooter>
  );
}