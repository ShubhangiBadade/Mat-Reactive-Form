//async validators

import { AbstractControl, ValidationErrors } from "@angular/forms";

export class IsEmailExistValidators {
     static Isemailexist(control:AbstractControl):Promise<ValidationErrors | null>{
    
        let val = control.value as string

       const promise = new Promise <ValidationErrors | null>((resolve, reject)=>{
            setTimeout(()=> {
               if(val === 'deepti@gmail.com'){
                resolve({
                emailExistError:'This email id is already in use'
                })
            }else{
                resolve (null)
            }
        }, 3000);
        })
        return promise
    }
}