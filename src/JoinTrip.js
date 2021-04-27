import { useRef } from 'react';
import { joinTripApi } from './api/api.js';
import { useHistory} from "react-router-dom";
import './App.css';

function JoinTrip(props){
    const user = useRef('');
    const history = useHistory();
    
    function joinTrip(joinCode){
        if(props.token !== ""){
            joinTripApi(props.token, joinCode).then(data => history.push('/trip/' + data.tripId));
        }
    }
    
    return(
        <div className="activity">
             {props.isAuth ?
             (<div><h3 className="headingClass">Join an existing trip!</h3>
              <input required type="text" placeholder="Enter Invitation Code"  className = "joinTrip" ref={user} pattern="^[a-zA-Z0-9]*$" maxLength="7"/>
              <div ><button className = "joinSubmit" onClick={()=>joinTrip(user.current.value)} type="submit" required>Join Trip</button></div>
             </div>)
             :null}
        </div>
        );
}

export default JoinTrip;