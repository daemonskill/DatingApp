import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { MemberListComponent } from './Member-List/Member-List.component';
import { MessagesComponent } from './Messages/Messages.component';
import { ListComponent } from './List/List.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'list', component: ListComponent},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

