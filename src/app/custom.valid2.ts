import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

export function userUsed(form: FormControl,authService:AuthService) {
   var role=form.value
   console.log(role)
   authService.userRegist(role).subscribe(results => {
      console.log(results)
    if ((role ===  results)) return {'used': true} ;
    
    return null;
     })



 
    };
