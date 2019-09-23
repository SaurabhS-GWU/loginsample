import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component'; 



const routes: Routes = [
  { path: '', component: LogincomponentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'vendor', component: VendorComponent },
  { path: '**', redirectTo:"/"}
];



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    VendorComponent,
    LogincomponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 


export class AppModule { }
