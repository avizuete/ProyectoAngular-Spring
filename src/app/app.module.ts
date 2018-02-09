import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginNegocioComponent } from './home/login-negocio/login-negocio.component';
import { LoginUsuariosComponent } from './home/login-usuarios/login-usuarios.component';
import { CreateNegocioComponent } from './home/create-negocio/create-negocio.component';
import { CreateUsuariosComponent } from './home/create-usuarios/create-usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './home/service.service';
import { UsuarioHomePageComponent } from './homePage/usuario-home-page/usuario-home-page.component';
import { NegocioHomePageComponent } from './homePage/negocio-home-page/negocio-home-page.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ServiceEnviadoService } from './service-enviado.service';
import { EventoUsuComponent } from './eventos/evento-usu/evento-usu.component';
import { EventoNegocioComponent } from './eventos/evento-negocio/evento-negocio.component';
import { EditarEventosUsuarioComponent } from './eventos/evento-usu/editar-eventos-usuario/editar-eventos-usuario.component';
import { ListaEventosUsuarioComponent } from './eventos/evento-usu/lista-eventos-usuario/lista-eventos-usuario.component';
import { EditarEventosNegocioComponent } from './eventos/evento-negocio/editar-eventos-negocio/editar-eventos-negocio.component';
import { ListaEventosNegocioComponent } from './eventos/evento-negocio/lista-eventos-negocio/lista-eventos-negocio.component';
import { NuevoEventosNegocioComponent } from './eventos/evento-negocio/nuevo-eventos-negocio/nuevo-eventos-negocio.component';
import { EventoUsuariosServiceService } from './eventos/evento-usu/evento-usuarios-service.service';
import { EventoNegociosServiceService } from './eventos/evento-negocio/evento-negocios-service.service';
import { UsuariosUpdateComponent } from './homePage/usuarios-update/usuarios-update.component';
import { NegociosUpdateComponent } from './homePage/negocios-update/negocios-update.component';
import { CookieService } from 'ngx-cookie-service';
import { NegocioGuardGuard } from './negocio-guard.guard';
import { EventoBuscarComponent } from './eventos/evento-usu/evento-buscar/evento-buscar.component';
import { DetailsUploadUsuComponent } from './fotos/fotos-usu/details-upload-usu/details-upload-usu.component';
import { FormUploadUsuComponent } from './fotos/fotos-usu/form-upload-usu/form-upload-usu.component';
import { ListUploadUsuComponent } from './fotos/fotos-usu/list-upload-usu/list-upload-usu.component';
import { UploadFileUsuService } from './fotos/fotos-usu/upload-file-usu.service';
import { FotosUsuComponent } from './fotos/fotos-usu/fotos-usu.component';
import { FotosNegocioComponent } from './fotos/fotos-negocio/fotos-negocio.component';
import { ListUploadNegoComponent } from './fotos/fotos-negocio/list-upload-nego/list-upload-nego.component';
import { DetailsUploadNegoComponent } from './fotos/fotos-negocio/details-upload-nego/details-upload-nego.component';
import { FormUploadNegoComponent } from './fotos/fotos-negocio/form-upload-nego/form-upload-nego.component';
import { UploadFileNegoService } from './fotos/fotos-negocio/upload-file-nego.service';
import { ValoracionEventoNegoComponent } from './eventos/valoracion-evento-nego/valoracion-evento-nego.component';
import { ValoracionEventoService } from './eventos/valoracion-evento.service';
import { GraficaasEventosComponent } from './eventos/evento-negocio/graficaas-eventos/graficaas-eventos.component';
import { ChartsModule } from 'ng2-charts';
import { ValoracionVigenteComponent } from './eventos/evento-usu/valoracion-vigente/valoracion-vigente.component';
const appRoutes:Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'registroUsuario',
    component:CreateUsuariosComponent
  },
  {
    path:'registroNegocio',
    component:CreateNegocioComponent
  },
  {
    path:'HomePageU',
    canActivate: [AuthGuardGuard],
    component: UsuarioHomePageComponent
  },
  {
    path:'HomePageN',
    canActivate: [NegocioGuardGuard],
    component: NegocioHomePageComponent
  },
  {
    path:'eventoUsuario',
    component:EventoUsuComponent
  },
    

  /*{
    path:'salida',
    component:SalidaComponent,
    
  }*/
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginNegocioComponent,
    LoginUsuariosComponent,
    CreateNegocioComponent,
    CreateUsuariosComponent,
    UsuarioHomePageComponent,
    NegocioHomePageComponent,
    EventoUsuComponent,
    EventoNegocioComponent,
    EditarEventosUsuarioComponent,
    ListaEventosUsuarioComponent,
    EditarEventosNegocioComponent,
    ListaEventosNegocioComponent,
    NuevoEventosNegocioComponent,
    UsuariosUpdateComponent,
    NegociosUpdateComponent,
    EventoBuscarComponent,
    DetailsUploadUsuComponent,
    FormUploadUsuComponent,
    ListUploadUsuComponent,
    FotosUsuComponent,
    FotosNegocioComponent,
    ListUploadNegoComponent,
    DetailsUploadNegoComponent,
    FormUploadNegoComponent,
    ValoracionEventoNegoComponent,
    GraficaasEventosComponent,
    ValoracionVigenteComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ServiceService,
    AuthGuardGuard,
    NegocioGuardGuard,
    ServiceEnviadoService,
    EventoUsuariosServiceService,
    EventoNegociosServiceService,
    CookieService,
    UploadFileUsuService,
    UploadFileNegoService,
    ValoracionEventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
