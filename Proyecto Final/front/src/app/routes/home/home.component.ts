import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {UsersLogInfo} from "../../interfaces/userLoing.interface";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    constructor(public authService: AuthService) {
    }
    user = this.authService.authInfo$;
    ngOnInit(): void {
    }

}
