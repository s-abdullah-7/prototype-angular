import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  styleUrls: ['./data-request.component.scss']
})
export class DataRequestComponent implements OnInit {

  dateObj: Date

  ngOnInit(): void {
      this.dateObj = new Date();
  }

  dataRequests = [
    { id: 'DR1', question: 'Please provide MOP.'  },
    { id: 'DR2', question: 'Please provide map.' },
    { id: 'DR3', question: 'Please provide map.' },
    { id: 'DR4', question: 'Please provide map.' },
    { id: 'DR5', question: 'Please provide map.' },
    { id: 'DR6', question: 'Please provide map.' },
    { id: 'DR7', question: 'Please provide map.' },
    { id: 'DR8', question: 'Please provide map.' },
    { id: 'DR9', question: 'Please provide map.' },
    // Add more dummy data as needed
  ];

  // Placeholder for new data request question
  newQuestion: string = '';

  // Function to add a new data request question
  addDataRequest() {
    if (this.newQuestion.trim() !== '') {
      const newIndex = 'DR' + (this.dataRequests.length + 1);
      this.dataRequests.push({ id: newIndex, question: this.newQuestion });
      this.newQuestion = ''; // Clear the input field
    }
  }
}
