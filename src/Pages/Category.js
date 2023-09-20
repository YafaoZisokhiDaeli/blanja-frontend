// import React,{useEffect,useState} from 'react'
// import Footer from '../components/module/home/footer/Footer'
// import Navbar from '../components/module/home/navbar/Navbar'
// import Card from "../components/base/Card";
// import { Dropdown } from "react-bootstrap";

// const Category = () => {


//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="products">
//             <h3 className="title">New</h3>
//             <p className="mt-5">My Products</p>
//           </div>
//           <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
//             <Dropdown>
//               <Dropdown.Toggle variant="primary" id="dropdown-basic">
//                 Sorting Name
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item>
//                   <button className="btn btn-info me-3">Name Z-A</button>
//                 </Dropdown.Item>
//                 <Dropdown.Item>
//                   <button className="btn btn-success">Name A-Z</button>
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//           <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
//             <div className="col" >
//               <Card
//               />
//             </div>
//             <div className=" text-center m-auto mb-5">
//               <h2>Sorry... Data yang anda cari tidak ada</h2>
//             </div>
//           </div>
//           <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
//             <button className="btn btn-primary me-5 w-5" >
//               Previous
//             </button>
//             <p className=" ms-5">
//             </p>
//             <button className="btn btn-primary w-5" >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Category;