import { RecoilRoot } from 'recoil';
import './App.css';
import ConnectWallet from './Pages/ConnectWallet.jsx';
import Auth0ProviderWithHistory from './auth0Provider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Pages/SignUp.jsx';
import MintToken from './Pages/MintToken.jsx';
import TransactionPage from './Pages/TransactionPage.jsx';
import HeroSection from './Pages/HeroSection.jsx';
import AceMarketplace from './Components/AceMarketPlace.jsx';
import RetirePage from './Pages/RetirePage.jsx';
import PaymentPage from './Pages/PaymentPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<ConnectWallet />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path='/transaction' element={<TransactionPage></TransactionPage>}></Route>
              <Route path='/hero' element={<HeroSection></HeroSection>}></Route>
              <Route path='/mintToken' element={<MintToken></MintToken>}></Route>
              <Route path='/marketplace' element={<AceMarketplace></AceMarketplace>}></Route>\
              <Route path='/retire' element={<RetirePage />} ></Route>
              <Route path='/payment' element={<PaymentPage></PaymentPage>}></Route>
            </Routes>
          </RecoilRoot>
        </Auth0ProviderWithHistory>
      </BrowserRouter> 

    </>
  );
}

export default App;
