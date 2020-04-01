import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, NgZone, OnInit } from '@angular/core';
import { ResizeService } from './resize.service';

@Directive({
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective {
  width;
  private hasView = false;
  innerWidth: number;

  constructor(private templateRef: TemplateRef<any>, private ngZone: NgZone,
    private viewContainer: ViewContainerRef, 
    private resizeService: ResizeService) {
  
    
  }

  @Input() set onlyForScreen(condition: 'mobile' | 'desktop' | 'tablet') {
    this.resize(condition)
   
  }
  resize(condition?: string){
    this.resizeService.onResize$.subscribe(res => {
   
      
      if (condition == 'mobile' &&  window.innerWidth < res.mobile ){
        this.viewContainer.remove()
        this.viewContainer.createEmbeddedView(this.templateRef);
        
        this.hasView = true;
      }
      else if (condition  == 'tablet' && res.mobile <= window.innerWidth && window.innerWidth < res.tablet ){
        this.viewContainer.remove()
        this.viewContainer.createEmbeddedView(this.templateRef);
       
        this.hasView = true;
  
      } else if (condition  == 'desktop' && res.tablet < window.innerWidth) {
        this.viewContainer.remove()
        this.viewContainer.createEmbeddedView(this.templateRef);
       
        this.hasView = true;
      }
      else {
        this.viewContainer.clear()
      }
    
    })
    this.width = window.addEventListener('resize',
    e => {
      let width = (<any>e.target).innerWidth;
      this.resizeService.onResize$.subscribe(res => {
   
      
        if (condition == 'mobile' &&  width < res.mobile ){
          this.viewContainer.remove()
          this.viewContainer.createEmbeddedView(this.templateRef);
          
          this.hasView = true;
        }
        else if (condition  == 'tablet' && res.mobile <= width && width < res.tablet ){
          this.viewContainer.remove()
          this.viewContainer.createEmbeddedView(this.templateRef);
         
          this.hasView = true;
    
        } else if (condition  == 'desktop' && res.tablet < width) {
          this.viewContainer.remove()
          this.viewContainer.createEmbeddedView(this.templateRef);
         
          this.hasView = true;
        }
        else {
          this.viewContainer.clear()
        }
      
      })
    }
  )
   
  }

}
