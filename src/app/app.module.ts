import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { ZonaResenasComponent } from './zona-resenas/zona-resenas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

/*servicios*/

import { NoticiasService } from './noticias.service';
import { ZonaNoticiasComponent } from './zona-noticias/zona-noticias.component';


const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'zona-reseñas/:id', component: ZonaResenasComponent},
  { path: 'zona-noticias/:id', component: ZonaNoticiasComponent},
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    InicioComponent,
    ZonaResenasComponent,
    NosotrosComponent,
    ZonaNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
