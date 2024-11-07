import { Component, OnInit } from '@angular/core';
import config from '../../config/config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  experience = 14;
  details = config;
  ngOnInit(): void {
    this.calculateExp();
  }

  calculateExp() {
    const jobStart = this.details.jobStarted;
    const date = new Date();
    let exp = date.getFullYear() - jobStart.year;
    if((date.getMonth())<jobStart.month) {
      exp -=1;
    }
    this.experience = exp;
  }
}
