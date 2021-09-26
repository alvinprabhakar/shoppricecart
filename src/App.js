
import { useEffect, useState } from 'react';
import {Navbar,Container,Nav,NavDropdown , Card , Row , Col} from 'react-bootstrap';
import "./App.css";


function App(){

  const [cartCount , getCartcount] = useState(0);

  function cartchange(num){

    let btnText = document.getElementsByClassName("cartchange")[num].innerHTML
    if(btnText==="Add to cart"){
      document.getElementsByClassName("cartchange")[num].innerHTML = "Remove from cart"
      getCartcount(cartCount + 1);
    }
    else{
      document.getElementsByClassName("cartchange")[num].innerHTML = "Add to cart"
      getCartcount(cartCount - 1);
    }
   }

  useEffect(()=> {
    console.log("use Effect called");
    getCartcount(cartCount);
  })

  return (
    <>
        
        <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#">React bootstrap</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                    <NavDropdown title="Shop">
                        <NavDropdown.Item href="">All products</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Popular Items</NavDropdown.Item>
                        <NavDropdown.Item href="">New Arrivals</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <button className="btn btn-outline-dark"><i>Cart</i><span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span></button>
            </Container>
        </Navbar>

        <div className="homepage-template">
            <h1>Shop in Style</h1>
            <h5 id="homeline">With this shop homepage template</h5>
        </div>
       

        <div className="products-details">
          <Container>
            <Row className="show-grid products-row">
                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt=""/>
                  <h5 className="product-name">Fancy Product</h5>
                  <p className ="price">$40.00 - $80.00</p>
                  <p></p><p></p>
                  <button className="btn btn-outline-dark">View Options</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"alt="" />
                  <h5 className="product-name">Special Item</h5>
                  <p><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i></p>
                  <p className ="price"><del>$20.00</del><i> </i>$18.00</p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(0)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Sale Item</h5>
                  <p className ="price"><del>$50.00</del><i> </i>$25.00</p>
                  <p></p><p></p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(1)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Popular Item</h5>
                  <p><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i></p>
                  <p className ="price">$40.00</p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(2)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Sale Item</h5>
                  <p className ="price"><del>$50.00</del><i> </i>$25.00</p>
                  <p></p><p></p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(3)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Fancy Product</h5>
                  <p className ="price">$120.00 - $280.00</p>
                  <p></p><p></p>
                  <button className="btn btn-outline-dark">View Options</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Special Item</h5>
                  <p><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i></p>
                  <p className ="price"><del>$20.00</del><i> </i>$18.00</p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(4)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>

                <Col md={4} lg={3} xs={6}>
                <Card className="text-center text-head ">
                  <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                  <h5 className="product-name">Popular Item</h5>
                  <p><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i><i className="fa fa-star checked"></i><i className="fa fa-star checked"></i></p>
                  <p className ="price">$40.00</p>
                  <button className="btn btn-outline-dark cartchange"  onClick={()=> cartchange(5)}>Add to cart</button>
                  <p></p>
                </Card>
                </Col>
                 
            </Row>
          </Container>
        </div>

        <div className="homepage-footer">
            <p>Copyright © Your Website 2021</p>
        </div>

      

    </>
  )
}

export default App;


    // Header
    // header.bg-dark.py-5
    // .container.px-4.px-lg-5.my-5
    //     .text-center.text-white
    //         h1.display-4.fw-bolder Shop in style
    //         p.lead.fw-normal.text-white-50.mb-0 With this shop hompeage template