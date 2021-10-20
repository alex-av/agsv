import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutes } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authenticationReducer } from "./core/store/authentication/reducers/authentication.reducer";
import { environment } from 'src/environments/environment';

//Layout
import { LayoutModule } from './components/layouts/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { appReducer } from './core/store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot( appReducer  ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    //Alx elim
    LayoutModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useFactory: function(router: Router) {
      return new HttpRequestInterceptor(router);
    },
    multi: true,
    deps: [Router]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
