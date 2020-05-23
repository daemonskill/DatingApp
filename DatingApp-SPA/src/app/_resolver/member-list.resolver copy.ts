import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Route } from '@angular/compiler/src/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable()
export class MemberlistResolver implements Resolve<User[]>{
    constructor(private userService: UserService, private alertify: AlertifyService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]>{

        // tslint:disable-next-line: no-string-literal
        return this.userService.getUsers().pipe(
            // tslint:disable-next-line: no-shadowed-variable
            catchError( error => {
                this.alertify.error('Problem retrieving Data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
