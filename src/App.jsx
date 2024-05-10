// Todo: Bring in the required import from 'react-router-dom'

import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        {/*To see, zoom out*/}
        <Nav />
        <Outlet />
      </main>
    </>
  );
}

export default App;