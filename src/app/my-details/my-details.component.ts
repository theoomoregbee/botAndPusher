import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styles: []
})
export class MyDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  loader;

  constructor(private _fb: FormBuilder, private _chatService: ChatService) { }

  ngOnInit() {
     this._createForm();
  }

  /**
   * create our reactive form here
   */
  private _createForm() {
    this.detailsForm = this._fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * Join the fun
   */
  onSubmit() {
    const param = this.detailsForm.value;
    this._chatService.join(param)
      .subscribe((resp) => {
        this.loader = false;
      },
        (error) => {
          console.error(error);
          this.loader = false;
        });
  }


}
