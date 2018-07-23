import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MenuTranslatorComponent } from './menu-translator/menu-translator.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/menu-translator', pathMatch: 'full' },
    { path: 'menu-translator', component: MenuTranslatorComponent },
    //{ path: 'items', component: ItemsComponent },
    //{ path: 'item/:id', component: ItemDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}