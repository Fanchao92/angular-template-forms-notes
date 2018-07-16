import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
	defaultLang = 'Select a Language...';
	languages = [this.defaultLang, 'English', 'Spanish', 'Chinese', 'Others'];
	model = new Employee('Erick', 'Zhou', true, 'w2', this.defaultLang);
	hasPrimaryLanguageError = false;

	validatePrimaryLanguage(lang) {
		this.hasPrimaryLanguageError = lang === this.defaultLang;
	}

	submitForm(form: NgForm) {
		this.validatePrimaryLanguage(form.form.value.primaryLanguage);
		if (!this.hasPrimaryLanguageError) {
			console.log(form.form.value);
		}
	}
}
