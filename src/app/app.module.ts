import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component'; 

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'vendor',      component: VendorComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    VendorComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 


export class AppModule { }
