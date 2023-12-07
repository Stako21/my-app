import { Header } from './components/Header/Header';
import goods from './goods.json';
import './App.scss'
import { GoodList } from './components/GoogList';

export function App() {
  return (
    <div className='App'>
      <Header />
      <hr />
      <GoodList goods={goods} />
    </div>
  );
}