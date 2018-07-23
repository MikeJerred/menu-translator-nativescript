import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { MobileEnvironment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemService } from './item/item.service';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';

import { Environment } from '@menu-translator/shared/environments/environment';
import { SharedModule } from '@menu-translator/shared/shared.module';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from 'nativescript-angular/http';

@NgModule({
    imports: [
        NativeScriptModule,

        SharedModule,

        AppRoutingModule
    ],
    providers: [
        { provide: Environment, useExisting: MobileEnvironment },
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    bootstrap: [AppComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
