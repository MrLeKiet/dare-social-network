import {Component, inject, Inject, Input} from '@angular/core';
import {MaterialModule} from "../../material.module";
import {NgIf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PostModel} from "../post/post.component";

export interface CommentModel {
  userName: string;
  avatarUrl: string;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent {
  //display the post
  readonly data = inject<PostModel>(MAT_DIALOG_DATA);

  //display the comments

}