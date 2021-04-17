import {Directive, ElementRef, Input, NgZone} from '@angular/core';
import tippy, {Instance, roundArrow} from 'tippy.js';
import {inView} from './intersection-observer';
@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
    private instance: Instance;
    private _content: string;

    get content() {
    return this._content;
    }

    @Input('tooltip') set content(content:string) {
    this._content = content;
    if (this.instance) this.instance.setContent(content);
    }

  constructor(private host: ElementRef<Element>, private zone: NgZone) { }

  ngAfterViewInit() {
        this.zone.runOutsideAngular(()=> {
            inView(this.host.nativeElement).subscribe((inView) => {
                if (inView && !this.instance) {
                    console.log(inView)
                    this.zone.runOutsideAngular(() => {
                        this.instance = tippy(this.host.nativeElement, {
                            theme: 'tomato',
                            arrow: roundArrow,
                            content: this.content,
                        })
                    })
            } else if (this.instance) {
                this.instance.destroy();
                this.instance = null;
                }
            });
        });
  }

}
