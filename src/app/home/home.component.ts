import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
	public languages = ['English', 'Spanish', 'Chinese', 'Others'];
	model = new Employee('Erick', 'Zhou', true, 'w2', 'English');
}
