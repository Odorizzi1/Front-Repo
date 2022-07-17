import './App.css';
import ListItems from './components/listItems/ListItems';
import { O_Button, O_ButtonIcon } from './components/utilsComponents/O_Components';


function App() {
  return (
    <div className="App">
      <header className='header-f'>
        <div className='header'>
          <div className='header-content'>
          <O_Button
          label ={"Sobre nós"} />
          <O_Button
          label ={"Carrinho"} />
          <O_Button
          label ={"Contato"} />
          
          </div>
        </div>
        </header>
      <div className="App-header">
        
        <div className="container">

          <ListItems />
        </div>
      </div>


    </div>
  );
}

export default App;
