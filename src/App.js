import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { getUserSlice } from './redux/usersSlice';

function App() {

  const users = useSelector(state => state.users)
  console.log(users)

  useEffect(() => {
    getUserSlice()
  },[])

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <Form/>
          </div>
          <div className="col-sm">
           <Table users={users}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
