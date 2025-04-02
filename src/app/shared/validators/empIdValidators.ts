import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmpIdValidator{
    static isEmpIdvalid(control:AbstractControl): ValidationErrors | null{
    let val : string = control.value;

    if(!val){
        return null
    }
    let regexp  = /^[A-Z]\d{3}$/;

    let isvalid = regexp.test(val)

    if(isvalid){
        return null
    }else{
        return{
            invalidEmpId:'Emp id must be start with one CAP letter and ends with 3 numbers like(E123)'
        }
    }
    }
}