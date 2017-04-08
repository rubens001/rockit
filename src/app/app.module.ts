import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './feature/left-bar/left-bar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { HomeComponent } from './feature/home/home.component';
import { TestComponent } from './feature/test/test.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { BrowseComponent } from './feature/browse/browse.component';
import { ModalboxComponent } from './feature/modalbox/modalbox.component';
import { NotifyboxComponent } from './feature/notify/notify.component';
import { I18nPipe } from './pipe/i18n.pipe';
import { StoreService } from './service/store/store.service';

export const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'browse', component: BrowseComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'home', component: HomeComponent, data: { title: 'home List' } },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    TestComponent,
    NavbarComponent,
    BrowseComponent,
    ModalboxComponent,
    NotifyboxComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
    NgbCollapseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ StoreService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
