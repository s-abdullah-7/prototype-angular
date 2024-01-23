import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-request-answer',
  templateUrl: './data-request-answer.component.html',
  styleUrls: ['./data-request-answer.component.scss']
})
export class DataRequestAnswerComponent implements OnInit {
  questionId: string;
  question: string;
  dateObj: Date
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve parameters from the route
    this.questionId = this.route.snapshot.params['id'];
    this.question = this.route.snapshot.params['question'];

    this.dateObj = new Date();
  }
}
