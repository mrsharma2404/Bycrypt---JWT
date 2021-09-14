import React,{useState, useEffect} from "react"
import {makeStyles, Grid, TextField, FormControl, FormControlLabel, FormLabel,  Button,Link,  Radio, RadioGroup} from '@material-ui/core'
import { postData} from "../fetchnodedata"
import swal from 'sweetalert';
import { isEmpty, isMobile, isAlphabet, isEmail, isNumeric } from "../Checks";
var passwordValidator = require('password-validator');
var checksp = new passwordValidator();

const useStyles = makeStyles((theme)=>({
    root1:{        display:'flex', justifyContent:'center', marginTop:20,padding:10,},
    subdiv:{    width:500,},
    root: {  '& > *': {    margin: theme.spacing(1),  },},
    input: {  display: 'none'},
    formControl: {  minWidth: 242,},
    large: {  width: theme.spacing(7),  height: theme.spacing(7),},
    formControlstatecity: {  minWidth: 160,},
}));
export default function SignUp(props){
    
  const classes = useStyles();

  checksp
      .is().min(8)                                    
      .is().max(20)                                  
      .has().uppercase()                              
      .has().lowercase()                              
      .has().digits(2)    
      .has().symbols()                           
      .has().not().spaces()                           
      .is().not().oneOf(['Passw0rd', 'Password123']); 

      //alert(checksp.validate('validPASS123@'));

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [mobile,setmobile]=useState("")
  const [password,setpassword]=useState("")
  const [password0,setpassword0]=useState("")
  const [username,setusername]=useState("")
  const [address,setaddress]=useState("")
  
  const handleSubmit=async()=>{
    var msg = "";
    var err = false;
    if(!isEmail(email)){
      err = true;
      msg += "Email, ";
    }
    if(!isMobile(mobile)){
      err = true;
      msg += "Mobile, ";
    }
    if(err){
      var msg1 = msg + "is not valid"  
      swal({   title: "",   text:msg1,   icon: "warning",   dangerMode: true,  })
    }
    if(!err)
    {
      var validpass = checksp.validate(password)
        if(validpass==true && password==password0)
        {
          var body={ name:name, email:email, mobile:mobile, password:password, username:username, address:address}  
          var res=await postData("bcrypt/signup",body)
          if(res.result)
          { swal({   title: "Added Successfully",   icon: "success",   dangerMode: true, })}
          else
          { swal({   title: "",   text:res.msg,   icon: "warning",   dangerMode: true,  }) }
        }
        else
        {
          if(password!=password0)
          {
            var crrmsg = 'Password Not Matched'
          }
          else
          {
            var crrmsg = 'Password Must Contain atleast 1 upppercase, 1 lowercase character, digit, symbols and of length min 8'
          }
          swal({   title: "",   text:crrmsg,   icon: "warning",   dangerMode: true,  })
        }
    }
  }
  
    return(
        <div className={classes.root1}>
            <div className={classes.subdiv} >
            <Grid container spacing={2}>
                <Grid item xs={12} >
                  <h1 > Sign Up</h1>
                </Grid>
            
                <Grid item xs={12} >
                    <TextField label="Name" fullWidth id="standard-basic" onChange={(event)=>setname(event.target.value)} />
                </Grid>  

                <Grid item xs={12} sm={6}>
                  <TextField label="UserName" fullWidth id="standard-basic" onChange={(event)=>setusername(event.target.value)}/>
                </Grid>                                        

                <Grid item xs={12} sm={6}>
                  <TextField label="Email Id" fullWidth id="standard-basic" onChange={(event)=>setemail(event.target.value)}/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField label="Mobile Number" fullWidth id="standard-basic" onChange={(event)=>setmobile(event.target.value)}/>
                </Grid>

                <Grid item xs={12} >
                  <TextField label="Address" fullWidth id="standard-basic" onChange={(event)=>setaddress(event.target.value)}/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField label="New Password"  fullWidth id="standard-basic" type='password'
                  onChange={(event)=>setpassword0(event.target.value)} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField label="Confirm Password" fullWidth id="standard-basic" onChange={(event)=>setpassword(event.target.value)}
                  type='password'  //{ values.showPassword ? 'text' : 'password'}
                  />
                </Grid>

                <Grid item xs={12} sm={6} >
                  <Button variant="contained" color="primary" onClick={()=>handleSubmit()}>Sign Up</Button>
                </Grid>


                <Grid item xs={12} >
                <Grid container justify="flex-end">
                   <Grid item>
                     <Link href="#" variant="body2">
                       <h3>Already have an account? Sign in</h3>
                     </Link>
                   </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ height:150}}>
                </Grid>

            </Grid>
            </div>

        </div>
    )
}