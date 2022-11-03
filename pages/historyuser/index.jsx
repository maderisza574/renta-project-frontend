import React from "react";

export default function HistoryUser() {
  return (
    <div>
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className=" leftside col col-md-8 bg-warning">
            <div className="history_search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </div>
            <div className="history_filter">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </div>
            <div className="history_main">
              <div className="row mt-3">Today</div>
              <tr>
                <h6>
                  Please Finish your payment for vespa for Vespa Rental Jogja
                </h6>
                <th scope="col">
                  <img
                    src="Vector2.png"
                    alt=""
                    style={{ width: 20, height: 20 }}
                  />
                </th>
                <th scope="col">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </th>
              </tr>
              <div className="row">
                <div className="row_right"></div>
              </div>
            </div>
            tes
          </div>
          <div className="rightside col col-md-4 bg-danger">
            <div className="card histoycrd">New Arrival</div>
            tes
          </div>
        </div>
        tes
      </div>
      HistoryUser
    </div>
  );
}
