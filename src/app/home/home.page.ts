import { Component } from '@angular/core';
import { MaxPipe } from 'ngx-pipes';
import { DatePipe} from '@angular/common';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	arr = ['First item', 'Second item', 'Third item'];

	myObj = {
		name: 'Andrew',
		age: 49
	};

	numbers = [2, 15, 6, 42, 99];

	today: number = Date.now();

	constructor(private maxPipe: MaxPipe, private datePipe: DatePipe) {

	}

	callPipe() {
		// this.datePipe.transform(Date);
		alert(this.maxPipe.transform(this.numbers));
	}

}
