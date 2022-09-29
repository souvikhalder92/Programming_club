import logo from './logo.svg';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';

import Activity from './component/Activity/Activity';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Faq from './component/Faq/Faq';

function App() {
  return (
    <div className="App">
       <Activity></Activity>
       <Faq></Faq>
       <Footer></Footer>
    </div>
  );
}

export default App;
