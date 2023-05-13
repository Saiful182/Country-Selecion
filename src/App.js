import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const divisions = [
    { id: "1", name: "Barishal" },
    { id: "2", name: "Chattogram" },
    { id: "3", name: "Dhaka" },
    { id: "4", name: "Khulna" },
    { id: "5", name: "Rajshahi" },
    { id: "6", name: "Rangpur" },
    { id: "7", name: "Mymensign" },
    { id: "8", name: "Sylhet" },
  ];

  const [division, setDiviosion] = useState([]);
  useEffect(() => {
    setDiviosion(divisions);
  }, []);

  return (
    <div className="App">

      <section>
        <select name="" id="">
          <option value="0">Select a Division</option>

          {
            division &&
              division !== undefined ?
              division.map((div, index) => {
                return (
                  <option key={index} value={div.id}>{div.name}</option>
                )
              })

              : "No Division Selected"
          }
        </select>
      </section>
    </div>
  );
}

export default App;
