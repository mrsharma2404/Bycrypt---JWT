import React,{useState, useEffect} from "react"
import {makeStyles, Grid, TextField, Button,Link} from '@material-ui/core'
import swal from 'sweetalert';
import {postData} from "../fetchnodedata"


const useStyles = makeStyles((theme)=>({
    root1:{        display:'flex', justifyContent:'center', marginTop:20,padding:10,},
    subdiv:{    width:500,},
    root: {  '& > *': {    margin: theme.spacing(1),  },},
    input: {  display: 'none'},
    formControl: {  minWidth: 242,},
    large: {  width: theme.spacing(7),  height: theme.spacing(7),},
    formControlstatecity: {  minWidth: 160,},
}));
export default function Home(props){
    
  const classes = useStyles();

  const handleSubmit1=async(event)=>{
    var body={}
   
    var body1={ token:localStorage.getItem("refreshtoken")}
    
    
    
    var list=await postData('bcrypt/refresh',body)
    var token = await postData('bcrypt/renewtoken',body1)
    if(token != null)
    {
      localStorage.setItem('token',token.access_token) 
    }
   // if(list.result)
   // {
   //   alert('okay')
   //   
   // }
   // else
   // { 
   //   alert('session expired')
   // }
  }
  

 // useEffect(function(){
 //   fetchStates() 
 // },[])

 
return(
  <div className={classes.root1}>
      <div className={classes.subdiv} >
      
          <Grid item xs={12} >
            <h1 > Home </h1>
          </Grid>                                                                    
      
          <Grid item xs={12} sm={6} >
            <Button variant="contained" color="primary" onClick={()=>handleSubmit1()}>Refresh</Button>
          </Grid>
          
         
          </div>
      </div>
  )
}