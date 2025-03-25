// import React, { useState } from "react";
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";

// const Register = () => {
//   let [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     contact: "",
//     age: "",
//     gender: "",
//     address: "",
//     state: "",
//     linkedinurl: "",
//   });

//   let [theme, setTheme] = useState(false);
  
//   let handleTheme = () => {
//     setTheme(!theme);
//   };

//   let handleChange = (e) => {
//     let value = e.target.value;
//     let key = e.target.name;
//     setData({ ...data, [key]: value });
//   };

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", data);
//     setData({
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       contact: "",
//       age: "",
//       gender: "",
//       address: "",
//       state: "",
//       linkedinurl: "",
//     });
//   };

//   return (
//     <center>
//       <div
//         style={{
//           height: "130vh",
//           width: "100vw",
//           backgroundColor: theme ? "white" : "black",
//           color: theme ? "black" : "white",
//           padding: "20px",
//         }}
//       >
//         <h2>{theme ? "Light Mode" : "Dark Mode"} Registration Form</h2>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "20px 20px 100px grey",

//             backgroundColor: theme ? "#f0f0f0" : "#1e1e1e",
//             color: theme ? "black" : "white",
//             width: "50%",
//             textAlign: "left",
//           }}
//         >
//           <label htmlFor="firstname">First Name:</label>
//           <input
//             type="text"
//             name="firstname"
//             id="firstname"
//             value={data.firstname}
//             onChange={handleChange}
//             placeholder="Enter first name"
//             style={{
//               backgroundColor: theme ? "white" : "black",
//               color: theme ? "black" : "white",
//                border: "1px solid gray",
//                padding: "8px",
//               width: "100%",
//                marginBottom: "10px",
//             }}
//           />

       

//           <button
//             type="submit"
//             style={{
//               backgroundColor: "pink",
//               padding: "10px",
//               width: "100%",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>

//         <button
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "20px",
//             padding: "10px",
//           }}
//           onClick={handleTheme}
//         >
//           {theme ? (
//             <>
//               Light Theme <CiLight />
//             </>
//           ) : (
//             <>
//               Dark Theme <MdDarkMode />
//             </>
//           )}
//         </button>
//       </div>
//     </center>
//   );
// };

// export default Register;


import { useState } from "react";
import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contact: "",
    age: "",
    gender: "",
    address: "",
    state: "",
    linkedinurl: "",
  });

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      contact: "",
      age: "",
      gender: "",
      address: "",
      state: "",
      linkedinurl: "",
    });
  };

  return (
    <center>
      <div
        style={{
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
          height: "130vh",
          width: "100vw",
          // padding: "10px",
        }}
      >
        <h1>{theme ? "Dark Theme" : "Light Theme"} Form</h1>
        <form
          style={{
            backgroundColor: theme ? "black" : "white",
            color: theme ? "white" : "black",
            borderRadius:"10px solid black",
            boxShadow:"20px 20px 8px gray",
            textAlign: "left",
            width: "50%",
            padding: "10px",
            margin: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            placeholder="Enter the name"
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
              border: "1px solid black",
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />
          
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            placeholder="Enter last name"
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
              border: "1px solid gray",
              padding: "8px",
              width: "100%",
              marginBottom: "10px",
            }}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
              border: "1px solid gray",
              padding: "8px",
              width: "100%",
              marginBottom: "10px",
            }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
              border: "1px solid gray",
              padding: "8px",
              width: "100%",
              marginBottom: "10px",
            }}
          />

          <button
            style={{ backgroundColor: "pink", padding: "10px", cursor: "pointer", width: "100%" }}
            type="submit"
          >
            Submit
          </button>
        </form>

        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            padding: "10px",
          }}
          onClick={handleTheme}
        >
          {theme ? (
            <>
              Light Theme <CiLight />
            </>
          ) : (
            <>
              Dark Theme <MdDarkMode />
            </>
          )}
        </button>
      </div>
    </center>
  );
};

export default Register;
