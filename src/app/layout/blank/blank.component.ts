import { Component } from '@angular/core';

@Component({
  selector: 'layout-blank',
  template: `<nz-empty style="padding-top: 20%" [nzNotFoundContent]="null"></nz-empty>`,
  host: {
    '[class.alain-blank]': 'true',
  },
})
export class LayoutBlankComponent {}
