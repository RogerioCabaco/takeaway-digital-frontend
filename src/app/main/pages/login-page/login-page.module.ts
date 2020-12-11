import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { Login2Component } from 'app/main/pages/authentication/login-2/login-2.component';
import { LoginPageComponent } from './login-page.component';
import { AuthService } from 'app/services/auth.service';

const routes = [
    {
        path: '',
        component: LoginPageComponent
    }
];

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule
    ],
    providers: [
        AuthService
    ]
})
export class LoginPageModule {
}
