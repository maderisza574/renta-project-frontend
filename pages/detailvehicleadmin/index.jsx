// import React from "react";
// import { useState } from "react";
// import Navbar from "../../components/NavbarHeader";

// export default function DetailVehicleAdmin() {
//   const [counter, setCounter] = useState(0);
//   const decrement = () => {
//     setCounter(counter - 1);
//   };
//   const increment = (data) => {
//     setCounter(counter + data);
//   };
//   return (
//     <div>
//       <div className="container-fluid">
//         <Navbar />
//         <div className="row">
//           <div className="col col-left col-md-6">
//             <div className="button__detail d-flex   ">
//               <button className="btn rowbutton">
//                 <img src="row.png" alt="" style={{ width: 15, height: 20 }} />
//               </button>
//               <div className="page__name">Detail</div>
//             </div>
//             <div className="vehicle_image">
//               <div className="img_vehicle">
//                 <img
//                   src="sepeda1.png"
//                   alt=""
//                   style={{ width: 500, height: 300 }}
//                 />
//               </div>
//               <button className="btn left_row_page_detail d-flex">
//                 <img
//                   src="Vector3.png"
//                   alt=""
//                   style={{ width: 20, height: 30 }}
//                 />
//               </button>
//               <button className="btn right_row_page_detail d-flex">
//                 <img
//                   src="Vector2.png"
//                   alt=""
//                   style={{ width: 20, height: 30 }}
//                 />
//               </button>
//             </div>
//             <div className="image_pagination mt-3">
//               <div className="row text-center">
//                 <div className="col col-md-5">
//                   <img
//                     src="sepeda1.png"
//                     alt=""
//                     style={{ width: 200, height: 100 }}
//                   />
//                 </div>
//                 <div className="col col-md-3">
//                   <img
//                     src="sepeda1.png"
//                     alt=""
//                     style={{ width: 200, height: 100 }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col col-right col-md-6 ">
//             <div className="Vehicle_name">
//               <h1>Fixie-Gray Only</h1>
//             </div>
//             <div className="location">
//               <h5>Yogyakarta</h5>
//             </div>
//             <div className="status">
//               <h6 className="avail">Available</h6>
//               <h6 className="prepay">No prepayment</h6>
//               <h6>Capacity</h6>
//               <h6>Type: Bike</h6>
//               <h6>Reservation before 2 PM</h6>
//             </div>
//             <div className="price_vehicle">
//               <h2>Rp.78.000,00/day</h2>
//             </div>
//             <div className="vehicle_count mt-5">
//               <div className="text-center d-flex gap-5">
//                 <button className="decre" onClick={decrement}>
//                   -
//                 </button>
//                 <h1 className="number">{counter}</h1>
//                 <button className="incre" onClick={() => increment(1)}>
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="button_group mt-5">
//             <div className="row gap-3">
//               <div className="col col-md-2 ">
//                 <button className="button_chat">Chat&nbsp;Admin</button>
//               </div>
//               <div className="col col-md-2">
//                 <button className="button_reservation ">Reservation</button>
//               </div>
//               <div className="col col-md-2">
//                 <button className="button_like  d-flex gap-3">
//                   <div className="iconlove">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       class="bi bi-heart-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
//                       />
//                     </svg>
//                   </div>
//                   <h6 className="icon_love">Like</h6>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
