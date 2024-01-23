import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{


      dateObj: Date
      data: any[] = [];
  selectedNotification: any;

        constructor(private router: Router) {}
      ngOnInit(): void {
        this.dateObj = new Date();

        this.data = [
        { id: 1 , application: 'Application 1', status: 'Active',},
        { id: 2 , application: 'Application 2', status: 'InActive',},
        { id: 3 , application: 'Application 3', status: 'In Review',},
        { id: 4 , application: 'Application 4', status: 'Active',},
        { id: 5 , application: 'Application 5', status: 'Active',},
        { id: 6 , application: 'Application 6', status: 'In Review',},
        { id: 7 , application: 'Application 7', status: 'InActive',},
        { id: 8 , application: 'Application 8', status: 'In Review',},
        { id: 9 , application: 'Application 9', status: 'Active',},
      ];
      } 


  onViewClick(notification: any) {
    // Set the selected notification
    this.selectedNotification = notification;

    // Use router to navigate to notification-view with parameters
  this.router.navigate(['/stateWaiver/notification/view', { id: notification.id, application: notification.application }]);
  }
}
