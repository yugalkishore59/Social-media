import './App.scss';

import Navbar from './components/navbar';
import Posts from './components/Posts/posts';
import Form from './components/form';

function App() {
  return (
    <>
      <Navbar/>
      <div className="app_body">
        <div className='left_body'></div>
        <div className='main_body'>
          <Form/>
          <Posts/>
        </div>
        <div className='right_body'></div>
      </div>
    </> 
  );
}

export default App;
