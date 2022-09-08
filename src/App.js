import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cauhinhnamhoc from './components/Cauhinhnamhoc';
import Cauhinhhocky from './components/Cauhinhhocky';
import Cauhinhtiethoc from './components/Cauhinhtiethoc';
import Cauhinhkhoi from './components/Cauhinhkhoi';
import Phanphoimonhoc from './components/Phanphoimonhoc';
import Cauhinhtruonghoc from './components/Cauhinhtruonghoc';
import Maunhanxet from './components/Maunhanxet';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Cauhinhnamhoc itemsPerPage={5}/>
      <Cauhinhhocky itemsPerPage={5}/>
      <Cauhinhtiethoc itemsPerPage={5}/>
      <Cauhinhkhoi itemsPerPage={5}/>
      <Phanphoimonhoc itemsPerPage={5}/>
      <Cauhinhtruonghoc/>

      <Maunhanxet itemsPerPage={5}/>
      <Demo/>
    </div>
  );
}

export default App;
