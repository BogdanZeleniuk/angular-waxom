import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
 
@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {

	@Output() clickOutside = new EventEmitter<void>();

  	constructor(private elementRef: ElementRef) { }

  	@HostListener('document:click', ['$event.target'])
  	public onClick(target) {
    	const clickedInside = this.elementRef.nativeElement.contains(target);
    		if (!clickedInside || !this.elementRef.nativeElement.children[0]) {
      		this.clickOutside.emit();
    		}
	}
}