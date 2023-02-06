import React, {useState , useEffect , useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [personList, setPersonList] = useState([]);
  const [open, setOpen] = useState(false);
  const [time,setTime] = useState(10000); //ms

  const PersonalInfoFetch = useCallback(async () =>{
    // Setting timeout Controller
    const options = { timeout: time } ;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), time);
    // Import Controller
    const res = fetch(`https://randomuser.me/api/?results=10`,{
      ...options,
      signal: controller.signal});
    await res.then(result => {
      console.log(result);
      if (result.status != 200){
        throw new Error("Oops, we haven't got JSON!");
      }else{
        return result.json(); 
      }
    })
    .then(data => {
      let persons = data.results.map((person, index)=>{
        return (
          <div className='inner' key={"info"+index}>
            <img src={person.picture.large}></img>
            <p>{person.name.first+" "+person.name.last}</p>
            <p>{person.email}</p>
          </div>
        )
      });
      setPersonList(persons);
   
    })
    .catch((err)=>{
      // Open AlertUI
      setOpen(true); 
      console.log(err);
    });
    // Clear Timer
    clearTimeout(id);
  },[time]); //When time state change, update state and re-render

  useEffect(()=>{
    //componentDidMount
    PersonalInfoFetch();

  },[]);

  const handleClose = useCallback(()=>{
    setOpen(false);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>A Simple React App - "Random Person Generator"</h2>
      </header>
      <div className="container">
        {personList}
      </div>
      {/* {Alert UI} */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'black'}}>
          {"Oops!! Something Wrong Happen!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Can not get response of RandomUser!
            Please try again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
