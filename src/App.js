
import  React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './styles/style.css';
import EditUser from './components/EditUser';
function App() {
  const logo = 'https://cdn.pixabay.com/photo/2022/05/26/19/14/child-7223632_960_720.jpg';
  const [users, setUsers] = useState([
    {
      id:1,
      name:"Goueguy Jean-Louis Alexis",
      position:"Dévéloppeur Web et Mobile",
      picture:logo
    }
  ]);
  const [show,setShow]= useState(true);
  const [name,setName]=useState("");
  const [userId,setUserId]=useState("");
  let editComponent = "";
  const addUser = (user)=>{
    let newState = [...users];
    newState.push(user)
    setUsers(newState);
    
  }
  const deleteUser = (id)=>{
    let newState = [...users];
    let index ;
    index = users.findIndex((user) => user.id == id) 
    newState.splice(index,1);
    setUsers(newState)
  } 
  const editUserForm = (id)=>{
    let newState = show;
    newState=false;
    setShow(newState);
    let getUser = users.filter((user) => user.id == id) 
    setName(getUser[0].name);
    setUserId(id);
  }
  const saveUpdate = (user)=>{
    setName(user.name);
    let getUser = users.filter((row) => row.id == user.id) 
    getUser[0].name=user.name;
    setShow(true);
  }
  if(!show){
    editComponent =  <EditUser userId={userId} name={name} saveUpdate={saveUpdate}/>
  }
  return (
    
    <div className="container mx-auto">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
            {editComponent}
            <AddUser addUser={addUser} show={show}/>
            <UsersList users={users} addUser={addUser} deleteUser={deleteUser} editUserForm={editUserForm}/>
        </div>
      </div>
    </div>
  );
}

export default App;
