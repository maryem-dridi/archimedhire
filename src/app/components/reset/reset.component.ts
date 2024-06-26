import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {UserStoreService} from "../../services/user-store.service";
import {ResetPasswordModel} from "../../models/reset-password.model";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  public resetForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  return = {
    Email:"",
    EmailToken:"",
    NewPassword:"",
    ConfirmPassword:""
  };
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore: UserStoreService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.resetForm = this.fb.group({
      NewPassword: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
      ConfirmPassword: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
    });
    this.activatedRoute.queryParams.subscribe(params=>{
      this.return.Email=params["email"];
      this.return.EmailToken=params["emailToken"];
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    if (this.resetForm.valid) {
      this.return.NewPassword=this.resetForm.value.NewPassword;
      this.return.ConfirmPassword=this.resetForm.value.ConfirmPassword;
      console.log(this.return)
      this.auth.resetPassword(this.return).subscribe({
        next: (res) => {
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.router.navigate(['login'])
        },
        error: (err) => {
          this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);
        },
      });
    }
  }

}
