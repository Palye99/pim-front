import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './components/login/login.module#LoginModule',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'terminal',
        redirectTo: 'terminal',
        pathMatch: 'full'
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