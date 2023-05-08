import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from '../../environments/environment'
import {Posts} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPost(query: string){
    return this.http.get<Array<Posts>>(`${env.backUrl}posts`,{
      params: {query}
    });
  }

}
