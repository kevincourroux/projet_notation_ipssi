import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path:'admin', component: AdminComponent},
  { path:'connexion_admin', component: ConnexionAdminComponent},
  { path:'connexion_etudiant', component: ConnexionEtudiantComponent},
  { path:'connexion_intervenant', component: ConnexionIntervenantComponent},
  { path:'module', component: ModuleComponent},
  { path:'add_module', component: AddModuleComponent},
  { path:'update_module', component: UpdateModuleComponent},
  { path:'del_module', component: DelModuleComponent},
  { path:'session', component: SessionComponent},
  { path:'add_session', component: AddSessionComponent},
  { path:'update_session', component: UpdateSessionComponent},
  { path:'del_session', component: DelSessionComponent},
  { path:'users', component: UsersComponent},
  { path:'etudiant', component: EtudiantComponent},
  { path:'add_etudiant', component: AddEtudiantComponent},
  { path:'update_etudiant', component: UpdateEtudiantComponent},
  { path:'del_etudiant', component: DelEtudiantComponent},
  { path:'intervenant', component: IntervenantComponent},
  { path:'add_intervenant', component: AddIntervenantComponent},
  { path:'update_intervenant', component: UpdateIntervenantComponent},
  { path:'del_intervenant', component: DelIntervenantComponent},
  { path:'note', component: NoteComponent},
  { path:'afficher_note', component: AfficherNoteComponent},
  { path:'notationEtudiant', component: NotationEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AdminComponent,
  ConnexionIntervenantComponent,
  ConnexionEtudiantComponent,
  ConnexionAdminComponent,
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
];
