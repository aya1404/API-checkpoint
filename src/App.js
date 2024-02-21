import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import User from './User';
import UserList from './UserList';
import {Routes,Route} from 'react-router-dom'

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});
  const fetchData= ()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUserList(res.data)
      setUser(userList.map(user=>user.res.data) )
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  const [searchValue, setSearchValue] = useState('');
  const search=(value)=>{
    setSearchValue(value)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList search={search} searchValue={searchValue} userList={userList.filter(user=> user.name.toLowerCase().includes(searchValue.toLowerCase().trim()))}/>}/>
        <Route path='/user/:id' element={<User user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
