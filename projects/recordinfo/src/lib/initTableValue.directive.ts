import { Directive, ElementRef, Input,HostListener,OnInit,OnChanges,SimpleChange } from '@angular/core';

@Directive({ selector: '[InitTableValue]' })
export class InitTableValueDirective implements OnInit,OnChanges{
  @Input() tableEntity: any;
  @Input() key: any;
  constructor(
      private el: ElementRef) {}
  ngOnInit(){  
      if (!this.tableEntity[this.key]){
        this.tableEntity[this.key] = undefined 
      }      
  }
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}){   
  }
}
