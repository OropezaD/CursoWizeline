import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../service/posts.service";
import {Posts} from "../../../interfaces/post.interface";
import {FormBuilder} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    searchPosts = this.fb.control('');
    getPosts: Array<Posts> = [];

    constructor(public postsServices: PostsService, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.postsServices.getPost('').subscribe((posts) => this.getPosts = posts);
        this.searchPosts.valueChanges
            .pipe(debounceTime(300))
            .subscribe((val) => this.postsServices.getPost(val!).subscribe((posts)=> this.getPosts = posts));


    }

}
