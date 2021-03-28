import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NzIconService} from 'ng-zorro-antd/icon';
import {zip} from 'rxjs';
import {catchError} from 'rxjs/operators';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private httpClient: HttpClient,
  ) {
  }

  load(): Promise<void> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      zip(this.httpClient.get('assets/tmp/app-data.json'))
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError((res) => {
            console.warn(`StartupService.load: Network request failed`, res);
            resolve();
            return [];
          }),
        )
        .subscribe(
          ([appData]) => {
            // setting language data
            console.log('start up')
          },
          () => {},
          () => {
            resolve();
          },
        );
    });
  }
}
