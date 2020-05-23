import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery-9';


import {HomeComponent} from './Home/home/home.component';
import { AppComponent } from './app.component';
import { ValueComponent } from './Value/Value.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/Auth.service';
import { RegisterComponent } from './Register/register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberListComponent } from './Members/Member-List/Member-List.component';
import { ListComponent } from './List/List.component';
import { MessagesComponent } from './Messages/Messages.component';
import { appRoutes } from './routes';
import { OthersComponent } from './others/others.component';
import { MemberCardComponent } from './Members/Member-card/Member-card.component';
import { MemberDetailComponent } from './Members/Member-Detail/Member-Detail.component';
import { TabsModule } from 'ngx-bootstrap/Tabs';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberlistResolver } from './_resolver/member-list.resolver copy';






export function tokenGetter(){

return localStorage.getItem('token');

}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListComponent,
      MessagesComponent,
      OthersComponent,
      MemberCardComponent,
      MemberDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
     NgxGalleryModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            // tslint:disable-next-line: object-literal-shorthand
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })

   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      MemberDetailResolver,
      MemberlistResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
