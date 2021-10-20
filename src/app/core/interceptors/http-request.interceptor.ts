import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
      //handle your auth error or rethrow
      if (err.status === 401 || err.status === 403) {
          //navigate /delete cookies or whatever
          this.router.navigateByUrl('authentication/login');
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(); // or EMPTY may be appropriate here
      }
      return throwError(err);
  }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    
    return next.handle(request).pipe(catchError( x => this.handleAuthError(x)));
  }
}
