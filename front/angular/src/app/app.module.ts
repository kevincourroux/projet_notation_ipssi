import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { ConnexionEtudiantComponent } from './connexion-etudiant/connexion-etudiant.component';
import { ConnexionIntervenantComponent } from './connexion-intervenant/connexion-intervenant.component';
import { ModuleComponent } from './module/module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { DelModuleComponent } from './del-module/del-module.component';
import { SessionComponent } from './session/session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { DelSessionComponent } from './del-session/del-session.component';
import { UsersComponent } from './users/users.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DelEtudiantComponent } from './del-etudiant/del-etudiant.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { AddIntervenantComponent } from './add-intervenant/add-intervenant.component';
import { UpdateIntervenantComponent } from './update-intervenant/update-intervenant.component';
import { DelIntervenantComponent } from './del-intervenant/del-intervenant.component';
import { NoteComponent } from './note/note.component';
import { AfficherNoteComponent } from './afficher-note/afficher-note.component';
import { NotationEtudiantComponent } from './notation-etudiant/notation-etudiant.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    ConnexionAdminComponent,
    ConnexionEtudiantComponent,
    ConnexionIntervenantComponent,
    ModuleComponent,
    AddModuleComponent,
    UpdateModuleComponent,
    DelModuleComponent,
    SessionComponent,
    AddSessionComponent,
    UpdateSessionComponent,
    DelSessionComponent,
    UsersComponent,
    EtudiantComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    DelEtudiantComponent,
    IntervenantComponent,
    AddIntervenantComponent,
    UpdateIntervenantComponent,
    DelIntervenantComponent,
    NoteComponent,
    AfficherNoteComponent,
    NotationEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
