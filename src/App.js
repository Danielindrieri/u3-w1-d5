import logo from './logo.svg';
import wanda from './data/wanda.jpg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNav from './Components/MyNav';
import MyMain from './Components/MyMain';
import MyMain2 from './Components/MyMain2';
import MyMain3 from './Components/MyMain3';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div>
        <header>
          <MyNav logo={logo} wanda={wanda}/>
        </header>
        <main className='bg-dark'>
          <MyMain/>
          <MyMain2/>
          <MyMain3/>
          </main>
        <footer>
        <MyFooter/>
        </footer>
    </div>
  );
}

export default App;
//Ciao Stefano, questa sarà il primo progetto piu bello ma allo stesso tempo quello che mi ha reso piu insicuro di me.
// se non fosse stato per l'aiuto di qualche collega,le tue Repository e un aiuto da chatgpt forse non sarei riuscito a fare nemmeno il 20 % del progetto
// la logica ancora non è entrata in testa ma non mi fermo di certo qui,cerco sempre di dare il mio meglio nei compiti del pommeriggio ma è sempre poco
// naturalmente se metto in confronto quello che facevo 2 mesetti fa ad oggi è tantissima roba(per uno che non ha mai messo mano ad un codice)
// spero di migliorare il piu possibile,non voglio essere il migliore...voglio essere la miglior versione di me stesso ogni giorno e apprendere il piu possibile da te e dal corso
// Non ti rubo altro tempo ci tenevo solo a dirti che apprezzo il tuo lavoro e che spero un giorno di poter fare un progetto come questo interamente solo con le mie forze,grazie e scusami se sono stato poco formale nei tuoi confronti 