import {BrowserModule} from "@angular/platform-browser";
import {
    MdToolbarModule, MdTabsModule, MdButtonModule, MdMenuModule, MdIconModule,
    MdCardModule, MdInputModule, MdProgressSpinnerModule, MdExpansionModule,
    MdDatepickerModule, MdNativeDateModule, MdGridListModule, MdSelectModule
} from '@angular/material';
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppComponent} from "../component/app.component";
import {UserComponent} from "../component/user.component";
import {UserDetailComponent} from "../component/user-detail.component";
import {UsersService} from "../service/implementation/user.service";
import {DashboardComponent} from "../component/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginFormComponent} from "../component/login-form.component";
import {GoodsComponent} from "../component/goods.component";
import {AuthenticationService} from "../service/implementation/authentication.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SignupFormComponent} from '../component/signup-form.component';
import {WorkspaceComponent} from '../component/workspace.component';
import {PageNotFoundComponent} from '../component/page-not-found.component';
import {NavigationGuard} from "../guard/navigation.guard";
import {GoodsService} from "../service/implementation/goods.service";
import {GoodsDetailComponent} from "../component/goods-detail.component";

const URL_I18N_FILES = 'assets/i18n/';
const FILE_FORMAT = '.json';

/**
 * @param {HttpClient} http - an object of type HttpClient which has methods
 * to perform http requests
 * @returns {TranslateHttpLoader} - wrapper object, which in essence uses
 * underlying HttpClient to load translations via http protocol
 */
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, URL_I18N_FILES, FILE_FORMAT);
}

/**
 * The root module of the application conventionally named AppModule. Specifies overall structure of the application.
 * Provides necessary services and feature modules.
 */
@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        DashboardComponent,
        LoginFormComponent,

        GoodsComponent,
        GoodsDetailComponent,

        SignupFormComponent,
        WorkspaceComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,

        BrowserAnimationsModule,
        MdToolbarModule,
        MdTabsModule,
        MdButtonModule,
        MdMenuModule,
        MdIconModule,
        MdCardModule,
        MdInputModule,
        MdProgressSpinnerModule,
        MdExpansionModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdGridListModule,
        MdSelectModule,

        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {provide: 'userService', useClass: UsersService},
        {provide: 'authenticationService', useClass: AuthenticationService},
        {provide: 'goodsService', useClass: GoodsService},
        NavigationGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
