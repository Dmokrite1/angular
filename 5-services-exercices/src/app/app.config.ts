import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // provideHttpClient rend le service httpClient injectable partout dans notre application
  providers: [provideRouter(routes), provideHttpClient()]
};
