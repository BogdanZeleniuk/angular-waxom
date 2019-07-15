import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'intro-comp',
  templateUrl: './intro.html',
  styleUrls: ['./intro.css','./input-date.component.css'],
  providers: [LogService]
})
export class IntroComponent implements OnInit{

	constructor(private logger: LogService) { }

	ngOnInit() {
		this.logger.info("ngOnInit() method in IntroComponent");
	    this.show();
	  }
	isClicked: boolean = false;
	isOpened: boolean = false;

	toggle():void{
		this.logger.info("toggle() method in IntroComponent");
		this.isClicked = !this.isClicked;
	}

	show():void{
		this.logger.info("show() method in IntroComponent");
		    setInterval(()=>{this.isOpened=!this.isOpened;}, 5000);
	}
}