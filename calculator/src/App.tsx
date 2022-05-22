import React from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        style={{
          backgroundColor: "rgb(163, 9, 9)",
          height: "40px",
        }}
      >
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Link style={{ color: "white" }}>CALCULATOR</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="container"
        style={{
          marginTop: "80px",
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-6 mx-auto">
              <div
                className="card h-100 justify-content-center"
                style={{
                  boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.2)",
                  borderRadius: "0",
                }}
              >
                <div className="card-body">
                  <h5
                    style={{
                      color: "gray",
                      fontWeight: "200",
                      fontSize: "17px",
                    }}
                  >
                    Enter the numbers
                  </h5>
                  <form>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number 1"
                    style={{
                      borderRadius: "0",
                      margin: "0 auto",
                      float: "none",
                      marginBottom: "20px",
                    }}
                  ></input>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number 2"
                    style={{
                      borderRadius: "0",
                      margin: "0 auto",
                      float: "none",
                      marginBottom: "20px",
                    }}
                  ></input>
                  </form>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        backgroundColor: "rgb(163, 9, 9)",
                        borderColor: "rgb(163, 9, 9)",
                        borderRadius: "0",
                      }}
                    >
                      Sum
                    </button>
                  </div>

                  <hr
                    style={{
                      height: "2px",
                      border: "1px solid rgb(163, 9, 9)",
                    }}
                  ></hr>
                  <h5
                    style={{
                      color: "gray",
                      fontWeight: "200",
                      fontSize: "17px",
                    }}
                  >
                    Result
                  </h5>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1234"
                    style={{
                      borderRadius: "0",
                      border: "1px solid rgb(163, 9, 9)",
                    }}
                  ></input>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
