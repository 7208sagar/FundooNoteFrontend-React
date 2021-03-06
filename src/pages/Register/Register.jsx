import { TextField } from '@mui/material'
import React, { Component } from 'react'
import logo from '../../assets/logo.jpg'
//import TextField from "@material-ui/core/TextField";
import './Register.css'

export class Regsister extends Component {
  render() {
    return (
      
     <div className='border'>
                <div className='content' >
                    <h2 className='g1' >
                        <font color="#4285F4"  > F </font> <font color="#DB4437"  > U </font><font color="#F4B400"  > N </font><font color="#4285F4"  > D </font><font color="#0F9D58"  > O </font><font color="#DB4437"  > O </font>                      
                    </h2>

                    <h2 className='h1' > Create your Fundoo Account </h2>
                    <form action="" className='form'>
                        <div className='first-last' >
                          
                            <div className='firstn' > <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' className='fn' />
                            </div>
                            <div className='lastn' > <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small' className='ln' />
                            </div>
                        </div>
                        <div className='emaild' > <TextField id="outlined-basic" label="Username" variant="outlined" size='small' className='email'
                            helperText="You can use letters,numbers & periods" /> </div>
                        <div className='email-option' > Use my currrent email address instead </div>
                        <div className='confirm-pass' >
                            <div className='password' > <TextField id="outlined-basic" label="Password" variant="outlined" size='small' className='pass' />
                            </div>
                            <div className='passwordc' > <TextField id="outlined-basic" label="confirm Password"variant="outlined" size='small' className='passc'
                                    helperText='Use 8 or more characters with a mix of letters, numbers & symbols' />
                            </div>
                        </div>
                        <div className='checkbox'>
                            <div className='checkbox' ></div><input type="checkbox" className='' />
                            <div className='show'> Show password </div>
                        </div>
                        <div className='last'>
                            <div className='signin'>Sign in instead</div>
                            <button className='next'>Next</button>
                        </div>
                    </form>
                </div>
                <div className='image'>
                    <div className='img'> <img src={logo} alt="logo" /> </div>
                    <span>One account. All of Fundoo working for you.</span>
                </div>
            </div>
    )
  }
}

export default Regsister
