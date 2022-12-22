import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Router/Routes/Routes";
import Loader from "./Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <RouterProvider router={router}>
            <Helmet>
              <title>SoulGoodMan</title>

              <meta name="description" content="soul good man" />
            </Helmet>
          </RouterProvider>
        </>
      )}
    </div>
  );
}

export default App;
