import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ChainInfo from "./pages/ChainInfo";
//import WrongNetwork from "./pages/WrongNetwork";
import FakeBayc from "./pages/FakeBayc";
import Error from "./pages/Error";
import FakeBaycToken from "./pages/FakeBaycTokenId";
import FakeNefturians from "./pages/FakeNefturians";
import FakeNefturiansWallet from "./pages/FakeNefturiansWallet";


//import SepoliaToken from "./pages/SepoliaToken";

function AppRoutes() {

  return (
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Connection" element={<Main />} />
            <Route path="ChainInfo" element={<ChainInfo />} />
            <Route path="FakeBayc" element={<FakeBayc />} />
            <Route path="FakeBaycTokenId" element={<FakeBaycToken />} />
            <Route path="FakeNefturians" element={<FakeNefturians />} />
            <Route path="FakeNefturiansWallet" element={<FakeNefturiansWallet />} />
            

            <Route path="Error" element={<Error />} />
            
            
          </Route>
        </Routes>
      
  );
}
function Home()
{
    return(
        <div>
            Home page
        </div>
    );
}



export default AppRoutes;