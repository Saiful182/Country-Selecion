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

  const unions = [
    { id: "1", districtId: "1", name: "Raipasha" },
    { id: "2", districtId: "1", name: "Karapur" },
    { id: "3", districtId: "1", name: "Kashipur" },
    { id: "4", districtId: "1", name: "Charbaria" },

    { id: "5", districtId: "2", name: "Amtali" },
    { id: "6", districtId: "2", name: "Bamna" },
    { id: "7", districtId: "2", name: "Betagi" },

    { id: "8", districtId: "3", name: "Lalmohar" },
    { id: "9", districtId: "3", name: "Bhola-S" },
    { id: "10", districtId: "3", name: "Monpura" },

    { id: "11", districtId: "4", name: "Jhalokathi-S" },
    { id: "12", districtId: "4", name: "Katgalia" },
    { id: "13", districtId: "4", name: "Nalchity" },

    { id: "14", districtId: "5", name: "Indurkani" },
    { id: "15", districtId: "5", name: "Prorojpur-S" },

    { id: "16", districtId: "6", name: "Savar" },
    { id: "17", districtId: "6", name: "Bongshal" },

    { id: "18", districtId: "7", name: "Banga" },
    { id: "19", districtId: "7", name: "Boalmari" },

    { id: "20", districtId: "8", name: "Kaliakoir" },
    { id: "21", districtId: "8", name: "Kapasia" },
    { id: "22", districtId: "9", name: "Kasiani" },
    { id: "23", districtId: "9", name: "Muksudpur" },
    { id: "24", districtId: "10", name: "Itna" },
    { id: "25", districtId: "10", name: "Katiadi" },
    { id: "26", districtId: "11", name: "Kuliarchar" },
    { id: "27", districtId: "11", name: "Austigram" },
    { id: "28", districtId: "12", name: "BajitPur" },
    { id: "29", districtId: "12", name: "bhoirab" },
    { id: "30", districtId: "13", name: "Mithamoin" },
    { id: "31", districtId: "13", name: "Nikli" },
    { id: "32", districtId: "14", name: "Tarail" },
    { id: "33", districtId: "15", name: "Pakundia" },
    { id: "34", districtId: "15", name: "Akaura" },
    { id: "35", districtId: "16", name: "Ashuganj" },
    { id: "36", districtId: "16", name: "Kasba" },
    { id: "37", districtId: "17", name: "Bancarampur" },
    { id: "38", districtId: "17", name: "Sarail" },
    { id: "39", districtId: "18", name: "Narornagar" },
    { id: "40", districtId: "18", name: "Kasba" },
    { id: "41", districtId: "19", name: "Rampal" },
    { id: "42", districtId: "19", name: "Fakirhat" },
    { id: "43", districtId: "20", name: "Kachua" },
    { id: "44", districtId: "20", name: "Mongla" },
    { id: "45", districtId: "21", name: "Shanarakhola" },
    { id: "46", districtId: "21", name: "Mollahat" },
    { id: "47", districtId: "22", name: "Chitalamari" },
    { id: "48", districtId: "22", name: "Gabtali" },
    { id: "49", districtId: "23", name: "Kahallo" },
    { id: "50", districtId: "23", name: "Dhunot" },
    { id: "51", districtId: "24", name: "shajanpur" },
    { id: "52", districtId: "24", name: "Sherpur" },
    { id: "53", districtId: "25", name: "Dhunot" },
    { id: "54", districtId: "26", name: "Sonatal" },
    { id: "55", districtId: "26", name: "Shibganj" },
    { id: "56", districtId: "27", name: "Bholahat" },
    { id: "57", districtId: "27", name: "Nachol" },
    { id: "58", districtId: "28", name: "Shibganj" },
    { id: "59", districtId: "28", name: "Gomostapur" },
    { id: "60", districtId: "29", name: "Charbaria" },
    { id: "61", districtId: "29", name: "Bholahat" },
    { id: "62", districtId: "30", name: "Haziganj" },
    { id: "63", districtId: "30", name: "Kachua" },
    { id: "64", districtId: "31", name: "Matlab" },
    { id: "65", districtId: "31", name: "Shahrasti" },
    { id: "66", districtId: "32", name: "Haimchar" },
    { id: "67", districtId: "32", name: "Kaliganj" },
    { id: "68", districtId: "33", name: "Charbaria" },
    { id: "69", districtId: "33", name: "Kalaiakoir" },
    { id: "70", districtId: "34", name: "Steerpur" },
    { id: "71", districtId: "34", name: "Charbaria" },
    { id: "72", districtId: "35", name: "Kapasia" },
    { id: "73", districtId: "35", name: "Boda" },
    { id: "74", districtId: "36", name: "Atwari" },
    { id: "75", districtId: "36", name: "Debiganj" },
    { id: "76", districtId: "37", name: "Tetulia" },
    { id: "77", districtId: "37", name: "Debiganj" },
    { id: "78", districtId: "38", name: "Charbaria" },
    { id: "79", districtId: "38", name: "Kalaroa" },
  ]

  const villeges = [
    { id: "1", unionId: "1", name: "Raipasha" },
    { id: "2", unionId: "1", name: "Haripur" },
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
