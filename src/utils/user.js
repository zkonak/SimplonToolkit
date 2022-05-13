
import { selectIsLoggedIn } from '../store/authSlice';
const userLoginValidator = (email,password) => {
  
}

const isUserLoggedIn = (email,password) => {
    return   useSelector(selectIsLoggedIn);
}

const userRegisterValidator = (email,password,confirmationPassword) => {
  // if(password!==confirmationPassword){
  //     return 'Mot de Passes sont différents.'
  // }
}
export  {userLoginValidator,userRegisterValidator,isUserLoggedIn};