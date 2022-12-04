import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    CommentForm: FormGroup;
    allComments: Array<Comment>;
    ufoId: any;
    
    newComment: Comment = {
        Id: 0,
        Comments: '',
        UfoId: 0,
        Likes: 0,
        Dislikes:0,
    }
    data: any;
    message: any;
  
   

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) {
        
    }
   

    ngOnInit() {
        
        this.route.paramMap.subscribe(param => {
            this.ufoId = param.get('id');
        })

        this.getComments(this.ufoId);
    }

    getComments(id: number) {
        this.http.get<Comment[]>('api/Comment/GetComment/' + id)
            .subscribe(response => {
                this.allComments = response;
             
            },
                error => console.log(error)
            );
    }
    deleteComment(id: number) {
        if (confirm("are you sure to delete?")) {
            this.http.delete<Comment>("api/Comment/DeleteComment/" + id)
            .subscribe((response) => {
                this.data = response;
                this.message = this.data.message;
                if (this.message == "comment deleted") {
                    this.getComments(this.ufoId);
                    this.toastr.success("Comment deleted")
                   
                }
                else {
                    this.toastr.error("error");
                }

            },
                (error: HttpErrorResponse) => {//errors 

                    console.log(error);
                    if (error.status === 401)
                        this.toastr.error("Unauthorized, please log in")

                    else
                        this.toastr.error("error")
                });
}
    }
    addComment() {
        
        this.newComment.UfoId = this.ufoId;
        this.http.post<Comment>('api/Comment/RegComment', this.newComment)
            .subscribe((response) => {
                this.data = response;
                this.message = this.data.message;
                if (this.message == "comment added") {
                    this.getComments(this.ufoId);
                    this.toastr.success("Comment added")
                    this.newComment.Comments = "";
                }
                else {
                    this.toastr.error("error");
                }
 
            },
    (error: HttpErrorResponse) => {//errors 

                    console.log(error);
                    if (error.status === 401)
                        this.toastr.error("Unauthorized, please log in")

                    else
                        this.toastr.error("error")
                });
    }
    likeComment(id: number) {
        this.http.get<Comment>("api/Comment/LikeComment/" + id)
            .subscribe((response) => {
                this.data = response;
                this.message = this.data.message;
                if (this.message == "like ok") {
                    this.getComments(this.ufoId);
                }
                else {
                    this.toastr.error("error")
                }
                    
              
            },
                (error: HttpErrorResponse) => {//errors 

                    console.log(error);
                    if (error.status === 401)
                        this.toastr.error("Unauthorized, please log in")

                    else
                        this.toastr.error("error")
                });
    }

    dislikeComment(id: number) {
        this.http.get<Comment>("api/comment/DislikeComment/" + id)
            .subscribe((response) => {
                this.data = response;
                this.message = this.data.message;
                if (this.message == "dislike ok") {
                    this.getComments(this.ufoId);
                }
                else {
                    this.toastr.error("error")
                }
            },
                (error: HttpErrorResponse) => {//errors 

                    console.log(error);
                    if (error.status === 401)
                        this.toastr.error("Unauthorized, please log in")

                    else
                        this.toastr.error("error")
                });
    }
}
