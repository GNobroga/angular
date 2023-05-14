import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/*

	Decorator @Input()
*/
export class HeaderComponent implements 
	OnInit, OnChanges, DoCheck, AfterContentInit,
	AfterContentChecked, AfterViewInit, AfterViewChecked {

	@Input() public title: string = "O que eu digitei";

	public count: number = 0;

	constructor() {}

	public incrementar(): void {
		this.count += 1;
	}

	public ngOnInit(): void {
		
	}

	public ngOnChanges(): void {
		/* Quando o componente receber um @Input de dados vai me mostrar algo */
		console.log("Eu recebi os dados" + this.title);
	}

	public ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	public ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	public ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	public ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	public ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}
}
