
import React, { useState } from 'react';
import axios from "axios";
import domainpage from "../assets/css/domainpage.css";
import Domainbox from 'layouts/Domainbox';



// react-bootstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  InputGroup,
  Form
} from "react-bootstrap";

function TableList() {

    const [textValue, setTextValue] = useState(''); // State to store the textarea value
    const [responseData, setResponseData] = useState(null); 

    const handleSubmit = (e) => {
      console.log(e);
      e.preventDefault(); // Prevent the default form submission behavior
      // console.log('Data entered in the textarea:', textValue);
      const url = "http://127.0.0.1:8000/test2";
      axios.post(url, {
        data: textValue,
      })
      .then((response) => {
        // Handle the response as needed
        console.log("Response:", response.data);
        setResponseData(response.data); 
        // Update the state to hide the submit link and show the new link
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
      console.log("Data entered in the textarea:", responseData);
    };
  
  return (
    <>
      <Container fluid >
        <Row>
          <Col md="8" className=''>
            <Card className="strpied-tabled-with-hover transparent-card "  >
              <Card.Header className="text-center transparent-card">
                <Card.Title as="h1" className='text-primary txtfont-size'  >IDEA TO <span className=''>DOMAIN</span></Card.Title>
                
                <p className="card-category">
                  SEARCH FOR THE DOMAIN NAME
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                  <Form className="p-3" onSubmit={handleSubmit}>
                        <InputGroup>
                        <InputGroup.Text  className='adopt'  >
                          <i className="nc-icon nc-single-copy-04 display-3 text-light" style={{ fontSize: '3rem' }}></i>
                        </InputGroup.Text>
                          <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            rows={8}
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                            className='textera'
                          />
                          </InputGroup>
                          <label className="text-center">
                                    let's generate some domain names for your project.
                                    </label>
                          <Button variant="primary" type="submit" className="mt-1 w-100 btnfont  btnfont-size">
                            <i className="nc-icon nc-zoom-split m-1 fw-bold"></i>
                            Search
                          </Button>
                    </Form>
                    
                    {responseData && responseData.suggestions && Object.keys(responseData.suggestions).length > 0 ? (
                        Object.keys(responseData.suggestions).map((domain, index) => (
                          <Domainbox key={index} domain={domain}  extensions={responseData.suggestions[domain]}/>
                        ))
                      ) : (
                        <p>No suggestions available</p>
                      )}

              </Card.Body>
           
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user ">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()} >
                  
                    <br/><br/><br/><br/><br/>
                    <h5 className="title">Tips</h5>
                  </a>
                </div>
                <p className="description text-center" >
                The better you describe your project, the more accurate and creative domain name suggestions you'll receive.
                </p>
                <p className="description text-center" >
                Its better to write in a paragrapgh form.
                 </p>
             
                <br></br>
              
                
              </Card.Body>
              {/* <>This is the data</>
              <div> {JSON.stringify(csvData)}</div> */}
              <hr></hr>
              <section id="block-4" class="widget widget_block">
                  <h4 class="widget-title pl-3">Recent Post</h4>
                  <div class="list-group">
                      <a href="https://www.example.com/link-1" class="list-group-item list-group-item-action">The Art of Choosing the Perfect Domain Name</a>
                      <a href="https://www.example.com/link-2" class="list-group-item list-group-item-action">Domain Search Strategies for Your Business</a>
                      <a href="https://www.example.com/link-3" class="list-group-item list-group-item-action">Unlocking the Power of Domain Extensions</a>
                      <a href="https://www.example.com/link-4" class="list-group-item list-group-item-action">Hidden Gems: Finding Available Domains</a>
                      <a href="https://www.example.com/link-5" class="list-group-item list-group-item-action">Domain Search Tools and Techniques</a>
                      <a href="https://www.example.com/link-3" class="list-group-item list-group-item-action">Domain Search for Startups: Tips and Tricks</a>
                      <a href="https://www.example.com/link-4" class="list-group-item list-group-item-action">Domain Flipping: Turning Available Domains into Profits</a>
                      <a href="https://www.example.com/link-5" class="list-group-item list-group-item-action">Global Domain Search: Expanding Your Reach </a>
                      
                  </div>
              </section>


            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}

export default TableList;
