import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {TerminalComponent} from './components/terminal/terminal.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'terminal',
        component: TerminalComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
        onSameUrlNavigation: 'reload',
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
