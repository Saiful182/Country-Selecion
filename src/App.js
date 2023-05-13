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
    { id: "3", unionId: "2", name: "Gatail" },
    { id: "4", unionId: "2", name: "Basail" },
    { id: "5", unionId: "3", name: "Gopalapur" },
    { id: "6", unionId: "3", name: "Talshohor" },
    { id: "7", unionId: "4", name: "Haripur" },
    { id: "8", unionId: "4", name: "Horoshpur" },
    { id: "9", unionId: "5", name: "Azampur" },
    { id: "10", unionId: "5", name: "Dhamondi" },
    { id: "11", unionId: "6", name: "Lalabagh" },
    { id: "12", unionId: "6", name: "Kaptanbajar" },
    { id: "13", unionId: "7", name: "Rampura" },
    { id: "14", unionId: "7", name: "Haripur" },
    { id: "15", unionId: "8", name: "Shohilpur" },
    { id: "16", unionId: "8", name: "Jatrapur" },
    { id: "17", unionId: "9", name: "Pramtola" },
    { id: "18", unionId: "9", name: "Bertola" },
    { id: "19", unionId: "10", name: "Shuhagpur" },
    { id: "20", unionId: "10", name: "Jamtola" },
    { id: "21", unionId: "11", name: "Bottoli" },
    { id: "22", unionId: "11", name: "Shunampur" },
    { id: "23", unionId: "12", name: "Jokiganj" },
    { id: "24", unionId: "12", name: "Shurma" },
    { id: "25", unionId: "13", name: "Akhalia" },
    { id: "26", unionId: "13", name: "Shimanto" },
    { id: "27", unionId: "14", name: "Zigatola" },
    { id: "28", unionId: "14", name: "Haripur" },
    { id: "29", unionId: "15", name: "Moinaganj" },
    { id: "30", unionId: "15", name: "Horshpur" },
    { id: "31", unionId: "16", name: "Nobiganj" },
    { id: "32", unionId: "16", name: "Poishka" },
    { id: "33", unionId: "17", name: "Haripur" },
    { id: "34", unionId: "17", name: "Modhupur" },
    { id: "35", unionId: "18", name: "Madhoppur" },
    { id: "36", unionId: "18", name: "Chandura" },
    { id: "37", unionId: "19", name: "Choirabaria" },
    { id: "38", unionId: "19", name: "Pirbari" },
    { id: "39", unionId: "20", name: "Sultampur" },
    { id: "40", unionId: "20", name: "Kumarshil Mour" },
    { id: "41", unionId: "21", name: "Paikgacha" },
    { id: "42", unionId: "21", name: "Bhrab" },
    { id: "43", unionId: "22", name: "New Market" },
    { id: "44", unionId: "22", name: "Haripur" },
    { id: "45", unionId: "23", name: "Mirzapur" },
    { id: "46", unionId: "23", name: "Shibganj" },
    { id: "47", unionId: "24", name: "Haripur" },
    { id: "49", unionId: "24", name: "Shakkhipur" },
    { id: "50", unionId: "25", name: "Nagarpur" },
    { id: "51", unionId: "25", name: "Gopalpur" },
    { id: "52", unionId: "26", name: "Haripur" },
    { id: "53", unionId: "26", name: "Dhanvari" },
    { id: "54", unionId: "27", name: "Haripur" },
    { id: "55", unionId: "27", name: "Deldour" },
    { id: "56", unionId: "28", name: "Haripur" },
    { id: "57", unionId: "28", name: "Jointapur" },
    { id: "58", unionId: "29", name: "Balaganj" },
    { id: "59", unionId: "29", name: "Golapganj" },
    { id: "60", unionId: "30", name: "Haripur" },
    { id: "61", unionId: "30", name: "Surma" },
    { id: "62", unionId: "31", name: "Haripur" },
    { id: "63", unionId: "31", name: "Beanivajar" },
    { id: "64", unionId: "32", name: "Haripur" },
    { id: "65", unionId: "32", name: "Kanaighat" },
    { id: "66", unionId: "33", name: "kanahati" },
    { id: "67", unionId: "33", name: "Biswanath" },
    { id: "68", unionId: "34", name: "Companiganj" },
    { id: "69", unionId: "34", name: "Trimukhi " },
    { id: "70", unionId: "35", name: "Modina Market" },
    { id: "71", unionId: "35", name: "Zakiganj" },
    { id: "72", unionId: "36", name: "Haripur" },
    { id: "73", unionId: "36", name: "Fecchuganj" },
    { id: "74", unionId: "37", name: "Haripur" },
    { id: "75", unionId: "37", name: "Derai" },
    { id: "76", unionId: "38", name: "Chatak" },
    { id: "78", unionId: "38", name: "Sulla" },
    { id: "77", unionId: "39", name: "Haripur" },
    { id: "79", unionId: "39", name: "Tahirpur" },
    { id: "80", unionId: "40", name: "Chataklk" },
    { id: "81", unionId: "40", name: "Haripur" },
    { id: "82", unionId: "41", name: "Kazipur" },
    { id: "83", unionId: "41", name: "belkuchi" },
    { id: "84", unionId: "42", name: "Raiganj" },
    { id: "85", unionId: "42", name: "Ullapara" },
    { id: "86", unionId: "43", name: "Tarash" },
    { id: "87", unionId: "43", name: "Chowhali" },
    { id: "89", unionId: "44", name: "Belkuchi" },
    { id: "90", unionId: "45", name: "Haripur" },
    { id: "91", unionId: "45", name: "Tala" },
    { id: "92", unionId: "46", name: "Haripur" },
    { id: "93", unionId: "46", name: "Kalaora" },
    { id: "94", unionId: "47", name: "Debhata" },
    { id: "95", unionId: "47", name: "Assasuni" },
    { id: "96", unionId: "48", name: "Haripur" },
    { id: "97", unionId: "48", name: "Shyamnagar" },
    { id: "98", unionId: "49", name: "Katai" },
    { id: "99", unionId: "49", name: "Haripur" },
    { id: "100", unionId: "50", name: "Harir" },
    { id: "101", unionId: "50", name: "Barkal" },
    { id: "102", unionId: "51", name: "Languada" },
    { id: "103", unionId: "51", name: "Rojoshtal" },
    { id: "104", unionId: "52", name: "Juraichar" },
    { id: "105", unionId: "52", name: "Baghaichari" },
    { id: "106", unionId: "53", name: "Kaukhali" },
    { id: "107", unionId: "53", name: "Bualmari" },
    { id: "108", unionId: "54", name: "Pakhihata" },
    { id: "109", unionId: "54", name: "Meherpur" },
    { id: "110", unionId: "55", name: "Haripur" },
    { id: "111", unionId: "55", name: "Beaichar" },
    { id: "112", unionId: "56", name: "Haripur" },
    { id: "113", unionId: "56", name: "Gadagari" },
    { id: "114", unionId: "57", name: "Mohanour" },
    { id: "115", unionId: "57", name: "Paba" },
    { id: "116", unionId: "58", name: "tanore" },
    { id: "117", unionId: "58", name: "Putia" },
    { id: "118", unionId: "59", name: "Bagha" },
    { id: "119", unionId: "59", name: "Mohanour" },
    { id: "120", unionId: "60", name: "Haripur" },
    { id: "121", unionId: "60", name: "Godagori" },
    { id: "123", unionId: "61", name: "Charghat" },
    { id: "124", unionId: "61", name: "Raiganj" },
    { id: "125", unionId: "62", name: "belkuchi" },
    { id: "126", unionId: "62", name: "Kazipur" },
    { id: "127", unionId: "63", name: "Haripur" },
    { id: "128", unionId: "63", name: "Tarash" },
    { id: "129", unionId: "64", name: "Ulltapara" },
    { id: "130", unionId: "64", name: "Chowhali" },
    { id: "131", unionId: "65", name: "Manda" },
    { id: "132", unionId: "65", name: "Haripur" },
    { id: "133", unionId: "66", name: "Porsha" },
    { id: "134", unionId: "66", name: "Raniganj" },
    { id: "135", unionId: "67", name: "Shadar" },
    { id: "136", unionId: "67", name: "Badalgachi" },
    { id: "137", unionId: "68", name: "Patnitala" },
    { id: "138", unionId: "68", name: "Shapahar" },
    { id: "139", unionId: "69", name: "Dhamorihat" },
    { id: "140", unionId: "69", name: "Haripur" },
    { id: "141", unionId: "70", name: "Haripur" },
    { id: "142", unionId: "70", name: "Mansa" },
    { id: "143", unionId: "71", name: "Debiganj" },
    { id: "144", unionId: "71", name: "Meghnaghat" },
    { id: "145", unionId: "72", name: "Mawaghat" },
    { id: "146", unionId: "72", name: "Munishipur" },
    { id: "147", unionId: "73", name: "Kakhata" },
    { id: "148", unionId: "73", name: "Haripur" },
    { id: "149", unionId: "74", name: "Pierre bari" },
    { id: "150", unionId: "74", name: "Collge Road" },
    { id: "151", unionId: "75", name: "Rosulpor" },
    { id: "152", unionId: "75", name: "hasanpur" },
    { id: "153", unionId: "76", name: "Hongoal" },
    { id: "156", unionId: "76", name: "Ranishankar" },
    { id: "157", unionId: "77", name: "tekerhat" },
    { id: "158", unionId: "77", name: "Fotkchori" },
    { id: "159", unionId: "78", name: "Shomarampur" },
    { id: "160", unionId: "78", name: "Kalabagan" },
    { id: "161", unionId: "79", name: "Pirganj" },
    { id: "162", unionId: "79", name: "Haripur" },
  ]
  const [division, setDiviosion] = useState([]);
  const [distric, setDistric] = useState([]);
  const [union, setUnion] = useState([]);
  const [villege, setVillege] = useState([]);

  const handleDivision = (id) => {
    const matchedDistrics = districs.filter(e => e.divisonId === id);
    setDistric(matchedDistrics);
  }
  const handleDistrics = (id) => {
    const matchedUnions = unions.filter(e => e.districtId === id);
    setUnion(matchedUnions);
  }
  const handleUnions = (id) => {
    const matchedVilleges = villeges.filter(e => e.unionId === id);
    setVillege(matchedVilleges);
  }

  useEffect(() => {
    setDiviosion(divisions);
  }, []);

  return (
    <div className="App">

      <section class="content">
        <section class="content-division-section">
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
        <section class="content-district-section" >
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
        <section class="content-union-section" >
          <select name="" id="" onChange={(e) => handleUnions(e.target.value)}>
            <option value="0">Select a Distric</option>

            {
              union &&
                union !== undefined ?
                union.map((div, index) => {
                  return (
                    <option key={index} value={div.id}>{div.name}</option>
                  )
                })

                : "No Division Selected"
            }
          </select>
        </section>
        <section class="content-Villege-section" >
          <select name="" id="" >
            <option value="0">Select a Distric</option>
            {
              villege &&
                villege !== undefined ?
                villege.map((div, index) => {
                  return (
                    <option key={index} value={div.id}>{div.name}</option>
                  )
                })

                : "No Division Selected"
            }
          </select>
        </section>
      </section>
    </div >
  );
}

export default App;
