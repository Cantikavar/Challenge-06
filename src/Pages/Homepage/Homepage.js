import React from "react";
import { Button, ButtonGroup, ButtonToolbar, Container, Dropdown, DropdownButton, Form, FormControl, InputGroup, Nav,  Navbar, Pagination, Table,} from "react-bootstrap";
import logoSatu from "../../Components/IMG/Rectangle 63.png";
import logoHomepage from "../../Components/IMG/fi_home.png";
import logoTruck from "../../Components/IMG/fi_truck.png";
import logoDua from "../../Components/IMG/Rectangle 62.png";
import menuStrip from "../../Components/IMG/fi_menu.png";
import logoU from "../../Components/IMG/Group 15.png";
import kurungDown from "../../Components/IMG/fi_chevron-down.png";
import Vektor from "../../Components/IMG/Vector.png";
import Batang from "../../Components/IMG/Rectangle 9.png";
import Vectordown from "../../Components/IMG/Vectordown.png";
import fiSort from "../../Components/IMG/fi_sort.png";
import buttonsearch from "../../Components/IMG/Button.png";
import "../Homepage/Homepage.css";




export const Homepage = () => {



  return (
    <div className="main-container">
      <div className="container-dashboard">
        <img alt="" src={logoSatu} className="logoSatu" />

        <div>
          <a href="dashboard" className="tag">
            {" "}
            <i>
              <img alt="" src={logoHomepage} className="logoHomepage" />{" "}
            </i>
            Dashboard{" "}
          </a>
        </div>

        <div>
          <a href="ListCar" className="tag">
            {" "}
            <i>
              <img alt="" src={logoTruck} className="logoTruck" />
            </i>
            Cars
          </a>
        </div>
      </div>
      <div className="navbar-content">
        <div className="navbar-atas">
          <img alt="" src={logoDua} className="logodua" />
          <img src={menuStrip} className="menustrip" />
          <input
            typeof="text"
            placeholder="Search"
            name="text"
            className="search-input"
          />

          <img src={buttonsearch} className="buttonsearch" />
          <img src={logoU} className="logoU" />
          <div className="Unisdown">
            <p className="unisbad">Unis Badri</p>
            <img src={kurungDown} className="kurungDown" />
          </div>
        </div>

        <div className="container-content">
          <div className="menu">
            <div className="dashboard-up">DASHBOARD</div>

            <div className="dashboard-low">
              <div className="dashboard-low-title">Dashboard</div>
            </div>
          </div>

          {/* <CONTENT> */}
          <div className="container-tabelcar">
            <p className="paragraf1">
              <strong>
                Dashboard{" "}
                <img
                  src={Vektor}
                  alt="tanda-vektor"
                  className="dashboard-vektor"
                />
              </strong>{" "}
              Dashboard
            </p>
            <h2 className="paragraf2">
              <strong>Dashboard</strong>
            </h2>
            <h6 className="list-order">
              {" "}
              <img src={Batang} alt="biruBatang" /> List Order
            </h6>
            <div className="Table1">
              <Table striped bordered hover>
                <thead>
                  <tr className="tabelTop">
                    <th>
                      No
                      <img src={fiSort} />
                    </th>
                    <th>
                      User Email
                      <img src={fiSort} />
                    </th>
                    <th>
                      Car
                      <img src={fiSort} />
                    </th>
                    <th>
                      Start Rent
                      <img src={fiSort} />
                    </th>
                    <th>
                      Finish Rent
                      <img src={fiSort} />
                    </th>
                    <th>
                      Price
                      <img src={fiSort} />
                    </th>
                    <th>
                      Status
                      <img src={fiSort} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>3</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>7</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>8</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>9</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="LimitJump">
              <p>
                <div className="Limit">Limit</div>
                <div className="JumpPage">Jump to page</div>
              </p>
              <div className="ButtonTen">
                <Button variant="outline-secondary">
                  10 <img src={Vectordown} alt="Vectordown" />
                </Button>{" "}
              </div>
              <div className="ButtonGo">
                <ButtonGroup>
                  <Button variant="outline-secondary" className="buttonOne">
                    {" "}
                    1 <img src={Vectordown} alt="Vectordown" />
                  </Button>{" "}
                  <DropdownButton
                    as={ButtonGroup}
                    title="Go"
                    id="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Go</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Go</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>

            <div className="buttonNine">
              <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups"
              >
                <ButtonGroup aria-label="First group"></ButtonGroup>
                <InputGroup>
                  <ButtonGroup aria-label="First group">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item disabled>{2}</Pagination.Item>
                      <Pagination.Item disabled>{3}</Pagination.Item>
                      <Pagination.Ellipsis />
                      <Pagination.Item disabled>{9}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </ButtonGroup>
                </InputGroup>
              </ButtonToolbar>
            </div>

            <div className="list">
              <h6 className="list-orderCar02">
                {" "}
                <img src={Batang} alt="biruBatang" /> List Car
              </h6>
            </div>
            <div className="tabel-bawah">
              <Table striped bordered hover>
                <thead>
                  <tr className="tabelTop">
                    <th>
                      No
                      <img src={fiSort} />
                    </th>
                    <th>
                      Name
                      <img src={fiSort} />
                    </th>
                    <th>
                      Price
                      <img src={fiSort} />
                    </th>
                    <th>
                      Start Rent
                      <img src={fiSort} />
                    </th>
                    <th>
                      Finish Rent
                      <img src={fiSort} />
                    </th>
                    <th>
                      Created at
                      <img src={fiSort} />
                    </th>
                    <th>
                      Update at
                      <img src={fiSort} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>3</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>-</td>
                    <td>-</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>7</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>8</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>9</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>Name</td>
                    <td>price</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Update at</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="LimitJump">
              <p>
                <div className="Limit">Limit</div>
                <div className="JumpPage">Jump to page</div>
              </p>
              <div className="ButtonTen">
                <Button variant="outline-secondary">
                  50 <img src={Vectordown} alt="Vectordown" />
                </Button>{" "}
              </div>
              <div className="ButtonGo">
                <ButtonGroup>
                  <Button variant="outline-secondary" className="buttonOne">
                    {" "}
                    1 <img src={Vectordown} alt="Vectordown" />
                  </Button>{" "}
                  <DropdownButton
                    as={ButtonGroup}
                    title="Go"
                    id="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Go</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Go</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>

            <div className="buttonNine">
              <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups"
              >
                <ButtonGroup aria-label="First group"></ButtonGroup>
                <InputGroup>
                  <ButtonGroup aria-label="First group">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item disabled>{2}</Pagination.Item>
                      <Pagination.Item disabled>{3}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item disabled>{9}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </ButtonGroup>
                </InputGroup>
              </ButtonToolbar>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );

};
