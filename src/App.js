import "./App.css";
import React, {useState} from "react";
function App() {
 const [query, searchQuery] = useState(""); // input-box value
 const [result, updateResult] = useState(""); // Api Results

 // Request method
 async function fetchApi(e) {
  e.preventDefault();
  if (query === "") return;
  var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + query + "&APPID=53ce694fa7a406a42ef14bac23f0f404&units=metric");
  var data = await response.json();
  // check if city exists
  data.cod === "404"
   ? updateResult(
      <div style={{textAlign: "center", fontStyle: "italic"}} className="tile">
       No data found for '{query}'
      </div>
     )
   : updateResult(
      <div className="tile">
       <img alt="loading.." src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} />
       <span>
        {data.name}, {data.sys.country}
       </span>
       <h1>{data.main.temp} °C</h1>
       <i>-- Feels like {data.main.feels_like} °C</i>
       <h5>
        - {data.weather[0].main}, {data.weather[0].description}
       </h5>
       <h5>- Sunrise : {new Date(data.sys.sunrise * 1000).toLocaleTimeString({}, {hour: "numeric", minute: "numeric", hour12: true})} IST</h5>
       <h5>- Sunset : {new Date(data.sys.sunset * 1000).toLocaleTimeString({}, {hour: "numeric", minute: "numeric", hour12: true})} IST</h5>
      </div>
     );
 }

 return (
  <form onSubmit={fetchApi} className="App">
   <div className="box">
    <input
     onChange={(e) => {
      searchQuery(e.target.value);
     }}
     placeholder="Enter city name"
     type="text"
    />
    <svg onClick={fetchApi} xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24">
     <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
    </svg>
   </div>
   {result}
  </form>
 );
}

export default App;
