import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCaption]'
})
export class CaptionDirective {

  constructor(private element: ElementRef,private render:Renderer2) {

    const tag =element.nativeElement;
  //  tag.style.backgroundColor = '#669bbc';
  //  tag.style.height = '10px'
    render.setStyle(tag,'border-radius','8px');
    
    
   }

}
