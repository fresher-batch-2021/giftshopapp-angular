import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCaption]'
})
export class CaptionDirective {

  constructor(private element: ElementRef) {

    element.nativeElement.style.backgroundColor = '#669bbc';
    element.nativeElement
    
    
   }

}
