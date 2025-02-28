import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent } from '../students/students/students.component';
import { StudentsPersonalDataComponent } from '../students/students-personal-data/students-personal-data.component';
import { StudentsCoursesComponent } from '../students/students-courses/students-courses.component';
import { LayoutComponent } from '../students/layout/layout.component';
import { PagoPageComponent } from '../students/pago-page/pago-page.component';
import { ProfesorsComponent } from '../profesors/profesors/profesors.component';
import { ProfesorsCoursesComponent } from '../profesors/profesors-courses/profesors-courses.component';
import { ProfesorsPersonalDataComponent } from '../profesors/profesors-personal-data/profesors-personal-data.component';
import { LayoutProfComponent } from '../profesors/layout-prof/layout-prof.component';
import { AdmiComponent } from '../administrador/admi/admi.component';
import { LayoutAdmiComponent } from '../administrador/layout-admi/layout-admi.component';
import { AdmiApplicationComponent } from '../administrador/admi-application/admi-application.component';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { WelcomeStudentComponent } from '../students/welcome-student/welcome-student.component';
import { FormularioProfesorComponent } from '../formulario-profesor/formulario-profesor.component';



const routes: Routes = [
  { path: 'students', component: LayoutComponent, children: [
    { path: '', component: WelcomeStudentComponent },
    { path: 'user-dashboard', component: StudentsComponent },
    { path: 'student-courses', component: StudentsCoursesComponent },
    { path: 'student-personalData', component: StudentsPersonalDataComponent },
    { path: 'pago-page', component: PagoPageComponent},
  ]},
{
  path: 'profesors',
  component: LayoutProfComponent,
  children: [
    {path: 'profesor-dashboard', component: ProfesorsComponent},
    {path: 'profesor-courses', component: ProfesorsCoursesComponent},
    {path: 'profesor-personalData', component: ProfesorsPersonalDataComponent }
    
  ]
},
{
  path: 'admi', 
  component: LayoutAdmiComponent,
  children: [
    {path: 'admi-dashboard', component: AdmiComponent},
    {path: 'admi-application', component: AdmiApplicationComponent},
    
  ]
},
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'registro-profesor', component: FormularioProfesorComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' }, 
  { path: 'dashboard', loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: 'dashboard' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
