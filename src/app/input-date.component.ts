import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LogService } from './log.service';

@Component({
	selector:'input-date-comp',
	templateUrl:'./input-date.component.html',
	styleUrls: ['./input-date.component.css'],
  providers: [LogService]
})

export class InputDateComponent {

   	visibility: boolean = false;
   	date: string;
   	isOpened: boolean = false;
    constructor(private logger: LogService) {
        this.date = new Date().toISOString().slice(0, 16);
    }
	toggle(){
      this.logger.info("toggle() method in InputDateComponent");
   		this.visibility = !this.visibility;
   	}
   	close(){
      this.logger.info("close() method in InputDateComponent");
   		this.visibility = false;
   	}
   	closeInput(){
      this.logger.info("closeInput() method in InputDateComponent");
   		this.isOpened = false;
   	}
   	open(): void{
      this.logger.info("open() method in InputDateComponent");
   		this.isOpened = true;
   	}
   	toggleSearch():void{
      this.logger.info("toggleSearch() method in InputDateComponent");
   		this.isOpened = !this.isOpened;
   	}

}