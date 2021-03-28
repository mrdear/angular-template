import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DefaultInterceptor} from './net/default.interceptor';
import {StartupService} from './startup/startup.service';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
];

const INTERCEPTOR_PROVIDES = [
  {provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true}
];

@NgModule({
  providers: [
    ...INTERCEPTOR_PROVIDES,
    ...APPINIT_PROVIDES
  ],
})
export class CoreModule {
  // 利用依赖注入
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
