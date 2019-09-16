import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../model/urls"
import {JwtResponse} from "../model/jwtResponse";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(urls.login, {username, password});
  }


  public isAuthorized(): Observable<boolean> {
    return this.http.get<boolean>(urls.isAuthorized);
  }

  public isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null)
  }
}
