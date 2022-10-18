import React from "react";
import Ex_Tai_Xiu from "./Ex_Tai_Xiu/Ex_Tai_Xiu";
import AlbumFeature from "./features/Song";
//import "./App.css";

function App() {
  // const name = "Phú Văn";
  // const age = 2220202;
  // const isFemnale = true;
  // const student = {
  //   name: "Hêllllooo",
  //   email: "nghuyenvans@gmail.com",
  // };
  // const colorlist = ["red", "blue", "green"];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Xin chào các bạn</p>
        <p>
          Xin Chào {name} - {age} - {isFemnale ? "Male" : "Famale"}
        </p>
        {isFemnale ? <p>Male</p> : <p>Female</p>}
        {isFemnale && (
          <>
            <p>Văn 1</p>
            <p>Văn 2</p>
            <p>Văn 3</p>
          </>
        )}

        <p>{student.name}</p>
        <p> {student.email}</p>
        <ul>
          {colorlist.map(color =>(
            <li style={{color}}>
              {color}
            </li>
            ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <TodoFeature/> */}
      {/* <AlbumFeature/> */}
      <Ex_Tai_Xiu/>
    </div>
  );
}

export default App;
