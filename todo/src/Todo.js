import { List,ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

function Todo(props){
  return (
    <List className='todo_list'>
        <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.text} secondary="Complete it🚀"/>
        </ListItem>
    </List>
  )
}

export default Todo;