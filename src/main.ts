import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// navigator.serviceWorker.ready.then((data)=>{
//   console.log('ready', data)
// })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
