import {useState} from 'react';
import Todo from './Todo';
import {Button,FormControl,InputLabel,Input,Box} from '@mui/material'
import './App.css';



function App() {
  const [todos, setTodos] = useState([])
  const [input,setInput]=useState("")    
 
  const addtodo=(e)=>{
      e.preventDefault()      
      setTodos([...todos,input])
      setInput("")
  }
  return (
    <Box 
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    sx={{ mt: 4 }} 
    >
    <div >
      <h1>✅TODO APP</h1>
      <FormControl>
      <InputLabel>Write you todo here</InputLabel> 
      <Input value={input} onChange={(e)=>setInput(e.target.value)}/>     
      </FormControl>
      <Button disabled={!input} type='submit' onClick={addtodo} variant="contained" colors="primary" sx={{ mt: 2 }}>Add Todo</Button>
      <ul>      
          {todos.map(todo=>(
            <Todo text={todo}/>
          ))}       
      </ul>
    </div>
    </Box>
  );
}

export default App;
