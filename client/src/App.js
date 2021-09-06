import React from "react";
import {useEffect, useState} from "react";
import { BrowserRouter } from 'react-router-dom';

import MainNavigation from './components/navigation/main-navigation';

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

  return (
    <BrowserRouter>
    <React.Fragment>
      
      
        <MainNavigation />
        <main className="main-content">
        
        </main>
     
  <h1>MERNTest App!</h1>
  <p>Data from server: {data}</p>

    </React.Fragment>
  </BrowserRouter>
  );
}

export default App;