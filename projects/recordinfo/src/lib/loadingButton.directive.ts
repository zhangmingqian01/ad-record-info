import { Directive, ElementRef, Input,HostListener,OnInit,OnChanges,SimpleChange } from '@angular/core';

@Directive({ selector: '[LoadingButtonController]' })
export class LoadingButtonControllerDirective implements OnInit,OnChanges{
  @Input() loading: boolean;
  constructor(
      private el: ElementRef) {}
  ngOnInit(){   
    
  }
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
      if(this.loading){
        // this.el.nativeElement.disabled = true 
        this.el.nativeElement.textContent = '请等待...'
        this.el.nativeElement.classList.add('loading-button')
      }else{     
        // this.el.nativeElement.disabled = true    
        this.el.nativeElement.classList.remove('loading-button')
        this.el.nativeElement.textContent = '确定'
      }    
  }
}
