import { Loader, Navbar } from '@/components';
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('@/pages/Home'));

const App = () => {
  return (
    <div className="appContainer">
      <Navbar title={'Inventory Management'} />
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
