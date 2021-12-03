import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
export function passwordMatchValidator(pwSet: FormGroup) {
// var role=form.value.name;
// console.log(role)
// this.authService.userRegist(role).subscribe(results => {
//     console.log(results.name);
//        if ((role ===  results.name)) return {'used': true} ;
       
//        return null;
//        });
    var password = pwSet.controls.password.value;
    var password2 = pwSet.controls.password2.value;
    if (!(password === password2)) return {'notmatch': true} ;
    
    return null;
    }
