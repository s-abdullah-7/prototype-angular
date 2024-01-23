import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.scss']
})
export class NotificationViewComponent implements OnInit {
  appId: string;
  application: string;
  dateObj: Date;

   constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.appId = this.route.snapshot.params['id'];
    this.application = this.route.snapshot.params['application'];
    
    this.dateObj = new Date();
  }

}
