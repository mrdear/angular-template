import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LayoutBlankComponent} from './blank/blank.component';

/**
 * 管理全局页面相关布局
 */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutBlankComponent],
  exports: [LayoutBlankComponent],
})
export class LayoutModule {}
