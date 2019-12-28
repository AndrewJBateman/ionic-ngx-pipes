import { Component } from '@angular/core';
import { MaxPipe } from 'ngx-pipes';
import { DatePipe} from '@angular/common';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	arr = [
		'First item',
		'Second item',
		'Third item'
	];

	myObj = {
		name: 'Andrew',
		age: 50
	};

	numbers = [2, 15, 6, 42, 99];

	today: number = Date.now();

	constructor(private maxPipe: MaxPipe, private datePipe: DatePipe) {

	}

	// uses ngx maxPipe to return max number in numbers array
	callPipe() {
		// this.datePipe.transform(Date);
		alert(this.maxPipe.transform(this.numbers));
	}

}
