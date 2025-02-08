import { Navbar } from '@/components';
import { Home as Dash } from './pages';
import { memo } from 'react';

const Home = memo(Dash);
const App = () => {
  return (
    <div className="appContainer">
      <Navbar title={'Inventory Management'} />
      <Home />
    </div>
  );
};

export default App;
