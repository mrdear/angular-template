import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const routes: Routes = [
  // Blak Layout 空白布局
  {
    path: '',
    component: LayoutBlankComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
