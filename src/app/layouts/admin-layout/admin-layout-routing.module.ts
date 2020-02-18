import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { TableListComponent } from 'src/app/table-list/table-list.component';
import { TypographyComponent } from 'src/app/typography/typography.component';
import { IconsComponent } from 'src/app/icons/icons.component';
import { MapsComponent } from 'src/app/maps/maps.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { LoginComponent } from 'src/app/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from 'src/app/register/register.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'table-list',
        component: TableListComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutes { }