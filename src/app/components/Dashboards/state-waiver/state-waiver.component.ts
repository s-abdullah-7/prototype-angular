import { Component } from '@angular/core';

@Component({
  selector: 'app-state-waiver',
  templateUrl: './state-waiver.component.html',
  styleUrls: ['./state-waiver.component.scss']
})
export class StateWaiverComponent {
  stateWaivers = [
    {
      operatorName: 'AIMEE CAUGUIRAN',
      lineID: '56789',
      description: 'Maintenance and repair waiver',
      leadPSE: 'John Smith',
      status: 'Active',
      applicationDate: '2023-02-20',
      expirationDate: '2024-02-20'
    },
    {
      operatorName: 'AL GIESE',
      lineID: '98765',
      description: 'Safety upgrade waiver',
      leadPSE: 'Sarah Johnson',
      status: 'In Review',
      applicationDate: '2023-03-10',
      expirationDate: '2024-03-10'
    },
    {
      operatorName: 'ALULA GEBRMENDHIN',
      lineID: '12345',
      description: 'Pipeline integrity assessment waiver',
      leadPSE: 'Emma Brown',
      status: 'Expired',
      applicationDate: '2022-12-01',
      expirationDate: '2023-12-01'
    },
    {
      operatorName: 'BITA EMANI',
      lineID: '54321',
      description: 'Emergency repair waiver',
      leadPSE: 'Michael Davis',
      status: 'Active',
      applicationDate: '2023-01-05',
      expirationDate: '2024-01-05'
    },
    {
      operatorName: 'BOB GORHAM',
      lineID: '24680',
      description: 'Routine maintenance waiver',
      leadPSE: 'Jennifer Wilson',
      status: 'Active',
      applicationDate: '2023-04-15',
      expirationDate: '2024-04-15'
    },
    {
      operatorName: 'CHUCK MACDONALD',
      lineID: '13579',
      description: 'Environmental impact assessment waiver',
      leadPSE: 'Emily Miller',
      status: 'In Review',
      applicationDate: '2023-06-20',
      expirationDate: '2024-06-20'
    },
    {
      operatorName: 'DAN LEE',
      lineID: '11223',
      description: 'Safety inspection waiver',
      leadPSE: 'William Brown',
      status: 'Active',
      applicationDate: '2023-07-30',
      expirationDate: '2024-07-30'
    },
    {
      operatorName: 'DURGA SHRESHTA',
      lineID: '99887',
      description: 'Equipment upgrade waiver',
      leadPSE: 'Olivia Garcia',
      status: 'Expired',
      applicationDate: '2023-08-12',
      expirationDate: '2024-08-12'
    },
    {
      operatorName: 'ENRIQUE JIMENEZ',
      lineID: '77888',
      description: 'Security enhancement waiver',
      leadPSE: 'Ethan Martinez',
      status: 'Active',
      applicationDate: '2023-09-25',
      expirationDate: '2024-09-25'
    },
    {
      operatorName: 'HA NGUYEN',
      lineID: '33444',
      description: 'Pipeline pressure test waiver',
      leadPSE: 'Sophia Adams',
      status: 'Active',
      applicationDate: '2023-11-07',
      expirationDate: '2024-11-07'
    },
    {
      operatorName: 'HOSSEIN MONFARED',
      lineID: '66778',
      description: 'Corrosion control waiver',
      leadPSE: 'Alexander Moore',
      status: 'In Review',
      applicationDate: '2023-12-28',
      expirationDate: '2024-12-28'
    },
    {
      operatorName: 'JUSTIN HARER',
      lineID: '99001',
      description: 'Emergency response plan waiver',
      leadPSE: 'Grace Robinson',
      status: 'Active',
      applicationDate: '2024-01-10',
      expirationDate: '2025-01-10'
    },
    {
      operatorName: 'MALEK ITANI',
      lineID: '11221',
      description: 'Valve maintenance waiver',
      leadPSE: 'Liam Clark',
      status: 'Active',
      applicationDate: '2024-02-28',
      expirationDate: '2025-02-28'
    },
    {
      operatorName: 'MARK MCCALEB',
      lineID: '22233',
      description: 'Emergency shutdown system waiver',
      leadPSE: 'Ava Lewis',
      status: 'Expired',
      applicationDate: '2024-03-14',
      expirationDate: '2025-03-14'
    },
    {
      operatorName: 'SAMPSON TANG',
      lineID: '88844',
      description: 'Leak detection system waiver',
      leadPSE: 'Noah Wright',
      status: 'Active',
      applicationDate: '2024-04-05',
      expirationDate: '2025-04-05'
    },
    {
      operatorName: 'TUAN TRAN',
      lineID: '12399',
      description: 'Emergency shutdown valve waiver',
      leadPSE: 'Aiden Hill',
      status: 'Active',
      applicationDate: '2024-05-20',
      expirationDate: '2025-05-20'
    },
    {
      operatorName: 'XUAN NGUYEN',
      lineID: '55661',
      description: 'Pipeline integrity assessment waiver',
      leadPSE: 'Chloe Carter',
      status: 'In Review',
      applicationDate: '2024-06-30',
      expirationDate: '2025-06-30'
    }
  ];


}
