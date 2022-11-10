import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/Router/Routes/Routes';

function App() {
  return (
    <div className=''>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <RouterProvider router={router}>
<Helmet>

<title>SoulGoodMan</title>

<meta 
name='description'
content='soul good man'

/>

</Helmet>







  </RouterProvider>
    </div>
  );
}

export default App;
