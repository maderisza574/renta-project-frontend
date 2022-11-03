import React from "react";

export default function DetailVehicle() {
  return (
    <div>
      <div className="container-fluid bg-primary">
        <div className="row bg-warning">
          <div className="col col-left col-md-6 bg-danger">
            <div className="button__detail d-flex   ">
              <button className="btn rowbutton">
                <img src="row.png" alt="" style={{ width: 10, height: 15 }} />
              </button>
              <div className="page__name">Detail</div>
            </div>
            <div className="vehicle_image">
              <div className="img_vehicle">
                <img
                  src="sepeda1.png"
                  alt=""
                  style={{ width: 500, height: 300 }}
                />
              </div>
            </div>
            <div className="image_pagination mt-3">
              <div className="row text-center">
                <div className="col col-md-5 bg-primary">
                  <button className="btn left_row_page_detail d-flex">
                    <img
                      src="Vector3.png"
                      alt=""
                      style={{ width: 10, height: 10 }}
                    />
                  </button>
                  <img
                    src="sepeda1.png"
                    alt=""
                    style={{ width: 200, height: 100 }}
                  />
                </div>
                <div className="col col-md-5 bg-warning">
                  <button className="btn right_row_page_detail d-flex">
                    <img
                      src="Vector2.png"
                      alt=""
                      style={{ width: 10, height: 10 }}
                    />
                  </button>
                  <img
                    src="sepeda1.png"
                    alt=""
                    style={{ width: 200, height: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-right col-md-6 bg-success">
            <div className="Vehicle_name">
              <h1>Fixie-Gray Only</h1>
            </div>
            <div className="location">
              <h5>Yogyakarta</h5>
            </div>
            <div className="status">
              <h6>Available</h6>
              <h6>No prepayment</h6>
              <h6>Capacity</h6>
              <h6>Type: Bike</h6>
              <h6>Reservation before 2 PM</h6>
            </div>
            <div className="price_vehicle">
              <h2>Rp.78.000,00/day</h2>
            </div>
            <div className="vehicle_count">
              <h3>2</h3>
            </div>
            coba
          </div>
          <div className="button_group">
            <div className="row gap-3">
              <div className="col col-md-2">
                <button className="btn btn-primary">Chat&nbsp;Admin</button>
              </div>
              <div className="col col-md-2">
                <button className="btn btn-primary">Reservation</button>
              </div>
              <div className="col col-md-2">
                <button className="btn btn-primary">Like</button>
              </div>
            </div>
          </div>
        </div>
        tes
      </div>
      DetailVehicle
    </div>
  );
}
