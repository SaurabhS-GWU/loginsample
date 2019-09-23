import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  title = 'loginapp';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  roles: any;
  selectedrole: any; 

  selectedOption: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
   // private authenticationService: AuthenticationService,
   // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required], 
        role: ['', Validators.required]
    }); 

    this.roles = [
      {
      name: "Admin",
      code: "Admin"},
  {
      name: "Vendor",
      code: "Vendor"}
      ];
  

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } 
    console.log(this.selectedOption);
    if(this.selectedOption == "Admin"){
      this.router.navigateByUrl('/admin');

    }else{
     
      this.router.navigateByUrl('/vendor');
    }

    this.loading = true;
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.error = error;
    //             this.loading = false;
    //         });
  }
  onRowClick(){
    console.log(this.selectedOption)
  }

}
