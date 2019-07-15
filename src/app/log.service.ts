import { Injectable } from '@angular/core';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}

@Injectable()
export class LogService{

	level: LogLevel = LogLevel.All;
	logWithDate: boolean = true;
	private data: string[] = [];

	private shouldLog(levelParam: LogLevel): boolean {
  		let ret: boolean = false;
  		if ((levelParam >= this.level && levelParam !== LogLevel.Off) ||
       			this.level === LogLevel.All) {
    	ret = true;
 		}
  		return ret;
	}

	private addData(name: string){
        this.data.push(name);
    }

    getData(): string[] {       
        return this.data;
    }

	private writeToLog(msg: string, levelParam: LogLevel){
		if (this.shouldLog(levelParam)) {
    	let value: string = "";
      
   			if (this.logWithDate) {
      		value = new Date().toISOString().slice(0, 16) + ": ";
    		}
    		value += "Type: " + levelParam;
    		value += ", Message: " + msg; 

    	this.addData(value);	     
    	console.log(value);
  		}
	}
 
    debug(msg: any){
        this.writeToLog(msg, LogLevel.Debug);
    }  
    info(msg: any){
        this.writeToLog(msg, LogLevel.Info);
    }  
    warning(msg: any){
        this.writeToLog(msg, LogLevel.Warn);
    }    
    error(msg: any){
        this.writeToLog(msg, LogLevel.Error);
    }
    fatal(msg: any){
        this.writeToLog(msg, LogLevel.Fatal);
    }    
}