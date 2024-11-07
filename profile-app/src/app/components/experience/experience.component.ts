import { Component } from '@angular/core';
import config from '../../config/config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experience = config.experience;
}
