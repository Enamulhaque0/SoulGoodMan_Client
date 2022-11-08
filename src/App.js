import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
