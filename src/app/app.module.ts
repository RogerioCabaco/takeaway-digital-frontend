import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { CommonModule } from '@angular/common';
import { UploadFilesModule } from './main/apps/upload-files/upload-files.module';
import { DomainService } from './services/domain.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AddHeaderInterceptor } from './services/http-interceptor';

const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'pages',
        loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/clients',
        loadChildren: () => import('./main/admin/admin-clients/admin-clients.module').then(m => m.AdminClientsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/users',
        loadChildren: () => import('./main/admin/admin-users/admin-users.module').then(m => m.AdminUsersModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./main/pages/login-page/login-page.module').then(m => m.LoginPageModule)
    },
    {
        path: '',
        loadChildren: () => import('./main/apps/dashboards/project/project.module').then(m => m.ProjectDashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics',
        canActivate: [AuthGuard]
    }
];
export function tokenGetter() {
    return localStorage.getItem('tk');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        }),
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        UploadFilesModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        DomainService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddHeaderInterceptor,
            multi: true
        }
    ]
})
export class AppModule {
}
