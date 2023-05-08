import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from '../../environments/environment'
import {BehaviorSubject, shareReplay, Subject, tap} from "rxjs";

interface LoginCredentials {
    email: string;
    password: string;
}

interface AuthResponse {
    data: {
        email: string
    }
    message: "singnup" | "login" | "none"
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _authInfo$: Subject<AuthResponse> = new BehaviorSubject<AuthResponse>({
        data: {email: ''},
        message: 'none'
    })

    public authInfo$ = this._authInfo$.pipe(shareReplay(1))

    constructor(private http: HttpClient) {
    }

    login(credentials: LoginCredentials) {
        return this.http.post(`${env.backUrl}login`, credentials)
            .pipe(tap(val => this._authInfo$.next(val as AuthResponse)))
    }
}
