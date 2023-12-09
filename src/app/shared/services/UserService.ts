import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      id: 1,
      name: "AIMEE CAUGUIRAN",
      userCategory: "External",
      userRole: "Pipeline Operator"
    },
    {
      id: 2,
      name: "BOB GORHAM",
      userCategory: "External",
      userRole: "Engineer"
    },
    {
      id: 3,
      name: "CHUCK MACDONALD",
      userCategory: "Internal",
      userRole: "Manager"
    },
    {
      id: 4,
      name: "DAN LEE",
      userCategory: "External",
      userRole: "Analyst"
    },
    {
      id: 5,
      name: "DURGA SHRESHTA",
      userCategory: "External",
      userRole: "Technician"
    },
    {
      id: 6,
      name: "ENRIQUE JIMENEZ",
      userCategory: "Internal",
      userRole: "Supervisor"
    },
    {
      id: 7,
      name: "HA NGUYEN",
      userCategory: "External",
      userRole: "Inspector"
    },
    {
      id: 8,
      name: "HOSSEIN MONFARED",
      userCategory: "External",
      userRole: "Technician"
    },
    {
      id: 9,
      name: "JUSTIN HARER",
      userCategory: "Internal",
      userRole: "Manager"
    },
    {
      id: 10,
      name: "MALEK ITANI",
      userCategory: "External",
      userRole: "Engineer"
    },
    {
      id: 11,
      name: "MARK MCCALEB",
      userCategory: "External",
      userRole: "Analyst"
    },
    {
      id: 12,
      name: "SAMPSON TANG",
      userCategory: "Internal",
      userRole: "Supervisor"
    },
    {
      id: 13,
      name: "TUAN TRAN",
      userCategory: "External",
      userRole: "Inspector"
    }
  ];

  constructor() { }

  // Fetch user by ID (simulated from hardcoded data)
  getUser(userId: number): Observable<any> {
    const user = this.users.find(u => u.id === userId);
    return of(user);
  }

  // Update user details (simulated from hardcoded data)
  updateUserDetails(userId: number, userData: any): Observable<any> {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
    }
    return of(userData);
  }

  getUsers(): Observable<any[]> {
    return of(this.users);
  }
}
