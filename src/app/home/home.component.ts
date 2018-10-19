import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public status: number;
  public currentEmail: any;

  constructor(private emailService: EmailService) {
    this.status = -1;
    this.currentEmail = this.setInitialValuesForEmailData();
  }

  private setInitialValuesForEmailData() {
    return {
      To: '',
      Subject: '',
      Text: ''
    }
  }

  ngOnInit() {

  }

  public toast = function(msg: string) {
    this.snacker.open(msg, 'Close', { duration: 2000 })
  }

  public createEmail = function (email: any) {
    this.emailService.send(email).subscribe(
      result => this.status = result === true ? 1 : 0
    );
  };
}
