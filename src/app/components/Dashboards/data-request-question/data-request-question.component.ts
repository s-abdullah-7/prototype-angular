import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-request-question',
  templateUrl: './data-request-question.component.html',
  styleUrls: ['./data-request-question.component.scss']
})
export class DataRequestQuestionComponent implements OnInit {
  dateObj: Date;

  ngOnInit(): void {
      this.dateObj = new Date();
  }
}
