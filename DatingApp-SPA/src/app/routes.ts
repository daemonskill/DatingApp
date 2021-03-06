import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { MemberListComponent } from './Members/Member-List/Member-List.component';
import { MessagesComponent } from './Messages/Messages.component';
import { ListComponent } from './List/List.component';
import { AuthGuard } from './_guards/auth.guard';
import { OthersComponent } from './others/others.component';
import { MemberDetailComponent } from './Members/Member-Detail/Member-Detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberlistResolver } from './_resolver/member-list.resolver copy';
import { MemberEditComponent } from './Members/Member-Edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: { users: MemberlistResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
        canDeactivate: [PreventUnsavedChanges]},
            {path: 'messages', component: MessagesComponent},
            {path: 'list', component: ListComponent},
            {path: 'others', component: OthersComponent}
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

