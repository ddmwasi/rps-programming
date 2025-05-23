import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideState, provideStore} from '@ngrx/store';
import {reducer} from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {AppEffects} from './store/app.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({}, {
      metaReducers: [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    provideState('app', reducer),
    provideEffects([AppEffects]),
    importProvidersFrom(StoreDevtoolsModule.instrument())
  ]
};
