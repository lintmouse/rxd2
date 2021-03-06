import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Bungie from './bungie';
import * as Player from './player';
import * as Shared from './shared';
import * as Store from './store';

@NgModule({
  declarations: [
    AppComponent,
    Player.PlayerSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    StoreModule.forRoot({ destinyPlayer: Store.destinyPlayerReducer }),
    EffectsModule.forRoot([ Store.DestinyPlayerEffects ]),
    AppRoutingModule
  ],
  providers: [
    Bungie.BungieApiService,
    { provide: Bungie.API_KEY, useValue: Bungie.ApiKey },
    { provide: Bungie.API_KEY_HEADER, useValue: Bungie.ApiKeyHeader },
    { provide: Bungie.API_ROOT_PATH, useValue: Bungie.ApiRootPath },
    Shared.HelperService,
    Shared.HttpHelperService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
