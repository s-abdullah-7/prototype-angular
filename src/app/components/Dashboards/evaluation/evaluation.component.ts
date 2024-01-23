import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  stateWaivers: any[] = [];
  dateObj : Date
  constructor() { }

  ngOnInit(): void {
    this.dateObj = new Date();
    // Fetch data from your service or API and update stateWaivers
    // For now, let's add some dummy data
    this.stateWaivers = [
      { operatorName: 'ABC', lineID: '12345', description: 'Pipeline 1', leadPSE: 'AIMEE CAUGUIRAN', status: 'Active', applicationDate: '2022-01-15', expirationDate: '2023-01-15' },
      { operatorName: 'DEF', lineID: '67890', description: 'Pipeline 2', leadPSE: 'BOB GORHAM', status: 'Inactive', applicationDate: '2022-02-20', expirationDate: '2023-02-20' },
      { operatorName: 'GHI', lineID: '54321', description: 'Pipeline 3', leadPSE: 'John Doe', status: 'In Review', applicationDate: '2022-03-25', expirationDate: '2023-03-25' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 5', leadPSE: 'CHUCK MACDONALD', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 6', leadPSE: 'DAN LEE', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 7', leadPSE: 'DURGA SHRESHTA', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 8', leadPSE: 'ENRIQUE JIMENEZ', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 9', leadPSE: 'HA NGUYEN', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      { operatorName: 'JKL', lineID: '98765', description: 'Pipeline 4', leadPSE: 'JUSTIN HARER', status: 'Active', applicationDate: '2022-04-30', expirationDate: '2023-04-30' },
      // Add more waiver data as needed
    ];
  }

  editWaiver(waiver: any): void {
    // Handle edit functionality, e.g., open a modal
    console.log('Edit Waiver:', waiver);
  }

  deleteWaiver(waiver: any): void {
    // Handle delete functionality, e.g., show a confirmation modal
    console.log('Delete Waiver:', waiver);
  }
}
