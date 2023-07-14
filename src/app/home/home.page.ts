import { Component } from "@angular/core";
import { MaxPipe } from "ngx-pipes";
import { DatePipe } from "@angular/common";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	arr = ["First item", "Second item", "Third item"];
	myObj = {
		name: "Andrew",
		age: 20,
	};
	numbers = [2, 15, 6, 42, 99];
	numberSquared = 9;
	today: number = Date.now();
	items = [
		1,
		2,
		3,
		[4, 5, 6, [7, 8, 9], [10, 11, 12, 13, [14], [15], [16, [17]]]],
	];

	constructor(private maxPipe: MaxPipe, private datePipe: DatePipe) {}

	// uses ngx maxPipe to return max number in numbers array
	callPipe() {
		// this.datePipe.transform(Date);
		alert(this.maxPipe.transform(this.numbers));
	}
}
