import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './routes/login/login.component';
import {HomeComponent} from "./routes/home/home.component";
import {DashboardComponent} from "./routes/home/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {path: '', component: DashboardComponent}
        ]
    },
    {path: 'login', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
