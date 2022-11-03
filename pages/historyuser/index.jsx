import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer";

export default function HistoryUser() {
  return (
    <div>
      <Header />
      <div className="container-fluid history_container">
        <div className="row">
          <div className="leftside col col-md-8">
            {/* start search */}
            <div className="history_search d-flex mt-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              {/* input filter */}
              <div className="history_filter">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              {/* input filter */}
            </div>
            {/* end search */}
            <div className="history_main">
              <div className="row history_tittle">Today</div>
              <div className="row">
                <div className="col col-md-8">
                  <h6 className="history_message">
                    Please Finish your payment for vespa for Vespa Rental Jogja
                  </h6>
                  <hr />
                </div>
                <div className="col col-md-2 ">
                  <img
                    src="Vector2.png"
                    alt=""
                    style={{ width: 10, height: 15 }}
                  />
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      for="flexCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              {/* row 2 */}
              <div className="row">
                <div className="col col-md-8">
                  <h6 className="history_message">
                    Your Payment has been confirmed
                  </h6>
                  <hr />
                </div>
                <div className="col col-md-2">
                  <img
                    src="Vector2.png"
                    alt=""
                    style={{ width: 10, height: 15 }}
                  />
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      for="flexCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
              {/* row 3 */}
              <div className="row history_tittle_2 row-3">A Week ago</div>
              <div className="row">
                <div className="col">
                  <div className="card history_card_vehicle">
                    <div className="col history_image image d-flex gap-3">
                      <img
                        src="vespa.png"
                        alt=""
                        style={{ width: 100, heiht: 50 }}
                      />
                      <div className="history_info_vehicle flex-fill">
                        <h6>Vespa Matic</h6>
                        <h6>Jan 18 to 21 2021</h6>
                        <h6>Prepayment:Rp 245.000,00</h6>
                        <h6 className="history_status">Has Been returned</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row 3 */}
              {/* card 2 */}
              <div className="row mt-3">
                <div className="col">
                  <div className="card history_card_vehicle">
                    <div className="col image d-flex gap-3">
                      <img
                        src="cb.png"
                        alt=""
                        style={{ width: 100, heiht: 50 }}
                      />
                      <div className="flex-fill history_info_vehicle">
                        <h6>Vespa Matic</h6>
                        <h6>Jan 18 to 21 2021</h6>
                        <h6>Prepayment:Rp 245.000,00</h6>
                        <h6 className="history_status">Has Been returned</h6>
                      </div>
                      <div className="flex-fill mt-4">
                        <button className="history_button_del">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card 2 */}
            </div>
          </div>
          <div className="rightside col col-md-4">
            <div className="card histoycrd justify-content-center">
              <h5 className="card_right_tittle">New Arrival</h5>
              <div className="new_arrival_img mb-3">
                <div className="card_arrival">
                  <div className="overlay">
                    <img
                      src="lambo.png"
                      alt=""
                      style={{ width: 286, height: 360 }}
                    />
                  </div>
                  <div className="card_text card">
                    <h6>Lamborghini</h6>
                    <h6>South Jakarta</h6>
                  </div>
                </div>
              </div>
              <div className="new_arrival_img">
                <div className="card_arrival">
                  <div className="overlay">
                    <img
                      src="jeep.png"
                      alt=""
                      style={{ width: 286, height: 360 }}
                    />
                  </div>
                  <div className="card_text card">
                    <h6>White Jeep</h6>
                    <h6>Kalimantan</h6>
                  </div>
                </div>
              </div>
              <div className="history_more_button">
                <h6>View More</h6>
                <div className="history_row_icon">
                  <img
                    src="rowdown.png"
                    alt=""
                    style={{ width: 43, height: 22 }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="card histoycrd"> */}

            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
