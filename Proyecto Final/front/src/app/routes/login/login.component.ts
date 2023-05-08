import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent {

    formGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    })

    constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    }


    onSubmit() {
        if (this.formGroup.valid) {
            let cred = this.formGroup.value
            this.authService.login({
                email: cred.username as string,
                password: cred.password as string
            }).subscribe(respose => this.router.navigateByUrl('/'));
        }
    }

}
