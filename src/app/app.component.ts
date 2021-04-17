import { Component } from '@angular/core';


@Component({
  selector: 'lad-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <div style="height: 200px!important; scroll-margin-block: inherit">
        <div *ngFor="let item of data" [tooltip]="item.label" style="display: block; padding: 2px">
          <button
              data-tippy-duration="10"
              data-tippy-arrow="true"
              data-tippy-delay="[30, 10]"
          >
            {{item.label}}
          </button>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-angular-directive';
  data = Array.from({length: 100}, (_, i) => ({
    id: i,
    label: `Value ${i}`
}))
}
