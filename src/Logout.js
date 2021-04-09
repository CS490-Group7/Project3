import React from 'react';
<<<<<<< HEAD
import {GoogleLogout} from 'react-google-login';
const clientId = process.env.REACT_APP_CLIENT_ID;

=======
import dotenv from 'dotenv'
import Login from'./Login.js';
import {GoogleLogout} from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID;


>>>>>>> e514e46c7fa7bae736737f79294d11e806157d2c
function Logout()
{
    const onSuccess=()=>
    {
        alert('Logout made successfully');
<<<<<<< HEAD
=======
        console.log('Logout made successfully');
>>>>>>> e514e46c7fa7bae736737f79294d11e806157d2c
    };
    
    return(
        <div>
<<<<<<< HEAD
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSucess={onSuccess}
        style ={{marginTop: '100px'}}
        ></GoogleLogout>
        </div>
        
=======

            <div>
                <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                style ={{marginTop: '100px'}}
                />
            </div>

        </div>
>>>>>>> e514e46c7fa7bae736737f79294d11e806157d2c
        );
}
export default Logout;