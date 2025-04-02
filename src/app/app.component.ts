import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validators';
import { IsEmailExistValidators } from './shared/validators/isEmailExist';

import { COUNTRIES_META_DATA } from './shared/const/countries';
import { Icountry } from './shared/models/countries';

import { EmpIdValidator } from './shared/validators/empIdValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
remove(_t253: AbstractControl<any,any>) {
throw new Error('Method not implemented.');
}
  countriesArr:Array<Icountry> = COUNTRIES_META_DATA;
  signUpForm ! :FormGroup
  newFormConrol= new FormControl('',[Validators.required])
  constructor(
    private fb : FormBuilder
  ){

  }
  ngOnInit(): void {
    this.createsignupForm()
    this.isAddsameHandler()
    this.patchcurrentAddtoper()
    this.createDependent()
  }

  patchcurrentAddtoper(){
    this.form['isAddresssame'].valueChanges
    .subscribe(val=>{
      console.log(val)
      if(val){
        let currentval = this.form['currentAddress'].value

        this.form['permanentAddress'].patchValue(currentval)
        this.form['permanentAddress'].disable()
      }else{
        this.form['permanentAddress'].reset()
        this.form['permanentAddress'].enable()
      }
    })
  }

  isAddsameHandler(){
  this.form['currentAddress'].valueChanges
  .subscribe(val=>{
    // console.log(val)
    // console.log('Is CA valid', this.form['currentAddress'].valid)
    if(this.form['currentAddress'].valid){
      this.form['isAddresssame'].enable()
    }else{
      this.form['isAddresssame'].disable()
      this.form['isAddresssame'].reset()
    }
  })
  }

  createsignupForm(){
    this.signUpForm = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      email: new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.email)],[IsEmailExistValidators.Isemailexist]),
      empId: new FormControl(null,[Validators.required, EmpIdValidator.isEmpIdvalid]),
      gender: new FormControl(null),
      currentAddress:new FormGroup({
        country: new FormControl('India',[Validators.required]),
        state: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        pincode: new FormControl(null,[Validators.required]),
      }),
      permanentAddress:new FormGroup({
        country: new FormControl('India',[Validators.required]),
        state: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        pincode: new FormControl(null,[Validators.required]),
      }),
      isAddresssame:new FormControl({value:false, disabled:true}),
      skills:new FormArray([], [Validators.required]),
      dependents:new FormArray([])
    })
  }
  

  createDependent(){
    let dependent = new FormGroup({
      fullname: new FormControl('',[Validators.required]),
      relationship: new FormControl('',[Validators.required]),
      citizen: new FormControl('',[Validators.required]),
      istravellingwithyou: new FormControl('',[Validators.required]),
    })
    this.dependentsArr.push(dependent)
  }

  get dependentsArr(){
    return this.form['dependents'] as FormArray
  }

  get form(){
  return this.signUpForm.controls
  }

  get skillsArr(){
    return this.form['skills'] as FormArray
  }

  onSignUp(){
    console.log(this.signUpForm)
  }

  addskill(){
    // console.log('working!!!')
    let skillval = this.newFormConrol.value?.trim()
    if(!skillval){
      return
    }
    console.log(skillval)
    this.newFormConrol.reset()
    let newControl = new FormControl(skillval,[Validators.required])
    this.skillsArr.push(newControl)
  }

  removeSkill(i:number){
  this.skillsArr.removeAt(i)
  }
  
}

