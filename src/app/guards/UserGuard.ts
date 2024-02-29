import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { UserService } from "../services/user-service/user.service";
import { AuthServiceService } from "../services/auth-service/auth-service.service";

export function isLoggedInGuard(): CanActivateChildFn {
    return (route, state) => {
        const router = inject(Router);
        const isAuthenticated = inject(AuthServiceService).isAuthenticated;

        if(isAuthenticated) {
            return true;
        } 

        return router.parseUrl('/signin')
    }
}