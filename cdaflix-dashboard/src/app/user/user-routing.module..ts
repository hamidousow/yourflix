import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninViewComponent } from "../views/signin-view/signin-view.component";

const routes: Routes = [
        {
            path:'signin',
            component: SigninViewComponent
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    })
    export class UserRoutingModule { }