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
  const districs = [
    { id: "1", divisonId: "1", name: "Barisal" },
    { id: "2", divisonId: "1", name: "Barguna" },
    { id: "3", divisonId: "1", name: "Bhola" },
    { id: "4", divisonId: "1", name: "Jhalokati" },
    { id: "5", divisonId: "1", name: "Pirojpur" },

    { id: "6", divisonId: "3", name: "Dhaka" },
    { id: "7", divisonId: "3", name: "Faridpur" },
    { id: "8", divisonId: "3", name: "Gazipur" },
    { id: "9", divisonId: "3", name: "Gopalganj" },
    { id: "10", divisonId: "3", name: "Kishoreganj" },

    { id: "11", divisonId: "2", name: "Chittagoan" },
    { id: "12", divisonId: "2", name: "Coxs Bajer" },
    { id: "13", divisonId: "2", name: "Brahmanbaria" },
    { id: "14", divisonId: "2", name: "Bnadarban" },
    { id: "15", divisonId: "2", name: "Rangamati" },

    { id: "16", divisonId: "4", name: "Khulna" },
    { id: "17", divisonId: "4", name: "Bagerhatt" },
    { id: "18", divisonId: "4", name: "Shattkhira" },
    { id: "19", divisonId: "4", name: "Meherpur" },
    { id: "20", divisonId: "4", name: "Narail" },

    { id: "21", divisonId: "5", name: "Rajhshi" },
    { id: "22", divisonId: "5", name: "Natore" },
    { id: "23", divisonId: "5", name: "Pabna" },
    { id: "24", divisonId: "5", name: "Bogra" },
    { id: "25", divisonId: "5", name: "Pirojpur" },

    { id: "26", divisonId: "6", name: "Rangpur" },
    { id: "27", divisonId: "6", name: "Kurigram" },
    { id: "28", divisonId: "6", name: "Dinajpur" },
    { id: "29", divisonId: "6", name: "Thakurgoan" },
    { id: "30", divisonId: "6", name: "lalmonirhatt" },

    { id: "31", divisonId: "7", name: "Jamalpur" },
    { id: "32", divisonId: "7", name: "Netrokona" },
    { id: "33", divisonId: "7", name: "Mymensign" },
    { id: "34", divisonId: "7", name: "Sherpur" },

    { id: "35", divisonId: "8", name: "Sylhet" },
    { id: "36", divisonId: "8", name: "Habiganj" },
    { id: "37", divisonId: "8", name: "Moulovibajar" },
    { id: "38", divisonId: "8", name: "Shunamganj" }
  ]

  const [division, setDiviosion] = useState([]);
  const [distric, setDistric] = useState([]);

  const handleDivision = (id) => {
    const matchedDistrics = districs.filter(e => e.divisonId === id);
    setDistric(matchedDistrics);
  }
  const handleDistrics = (id) => {

  }

  useEffect(() => {
    setDiviosion(divisions);
  }, []);

  return (
    <div className="App">

      <section class="division-section">
        <select name="" id="" onChange={(e) => handleDivision(e.target.value)}>
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
      <section class="district-section" >
        <select name="" id="" onChange={(e) => handleDistrics(e.target.value)}>
          <option value="0">Select a Distric</option>

          {
            distric &&
              distric !== undefined ?
              distric.map((div, index) => {
                return (
                  <option key={index} value={div.id}>{div.name}</option>
                )
              })

              : "No Division Selected"
          }
        </select>
      </section>
    </div >
  );
}

export default App;
