import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
 
@Directive({
    selector: '[clickOutsideInput]'
})
export class ClickOutsideInputDirective {

	@Output() clickOutsideInput = new EventEmitter<void>();

  	constructor(private elementRef: ElementRef) { }

  	@HostListener('document:click', ['$event.target'])
  	public onClick(target) {
    	const clickedInsideInput = this.elementRef.nativeElement.contains(target);
    		if (!clickedInsideInput || !this.elementRef.nativeElement.children[0]) {
      		this.clickOutsideInput.emit();
    		}
	}
}