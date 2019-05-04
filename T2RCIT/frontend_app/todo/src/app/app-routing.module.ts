import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ModuleComponent } from './module/module.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ModifyDataComponent } from './modify-data/modify-data.component';


const routes: Routes = [
    { path:'home',component:HomeComponent},
    { path:'login',component:LoginComponent},
    { path:'module',component:ModuleComponent,canActivate:[RouteGuardService]},
    {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
    {path:'about',component:AboutComponent,    
    { path:'contact',component:ContactComponent,
    {path:'searchData',component:SearchDataComponent,canActivate:[RouteGuardService]},
    {path:'addData',component:AddDataComponent,canActivate:[RouteGuardService]},
    {path:'modifyData',component:ModifyDataComponent,canActivate:[RouteGuardService]},
    { path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
