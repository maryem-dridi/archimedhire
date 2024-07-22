import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash"
  constructor(private fb : FormBuilder, private auth: AuthService, private router: Router, private toastService:NgToastService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      Nom:['', Validators.required],
      Prenom:['', Validators.required],
      Email: ['', [Validators.required,Validators.email]],
      Password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      let signUpObj = {
        ...this.signUpForm.value,
        role:'',
        token:''
      }
      this.auth.signUp(signUpObj)
      .subscribe({
        next:(res=>{
          console.log(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
          this.toastService.success({detail:"SUCCESS", summary:res.message, duration: 5000});
        }),
        error:(err=>{
          console.log(err?.error.message)
          this.toastService.error({detail:"ERROR", summary:err?.error.message, duration: 5000});

        })
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm); //{7}
    }
  }

}
