import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})

export class SendEmailComponent implements OnInit {
  @Output() emailCreated = new EventEmitter<any>();
  @Input() emailInfo: any;

  constructor() {
    this.clearEmailInfo();
  }

  ngOnInit() {

  }

  private clearEmailInfo = function() {
    
    this.emailInfo = {
      To: '',
      Subject: '',
      Text: ''
    };
  };

  public sendEmail = function(event) {
    // Emit the event of that the Home.Component is binding to
    this.emailCreated.emit(this.emailInfo);
    this.clearEmailInfo();
  };
}
