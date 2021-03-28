import { NgModule, Type } from '@angular/core';

import { RouteRoutingModule } from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS: Type<null>[] = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS],
})
export class RoutesModule {}
