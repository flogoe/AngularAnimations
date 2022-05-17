import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courseGoals = [
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Master Angular Styling', isActiveGoal: true },
    { title: 'Master Angular Styling', isActiveGoal: true },
  ];
}
