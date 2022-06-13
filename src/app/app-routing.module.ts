import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionLibroComponent } from './creacion-libro/creacion-libro.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthedGuard } from './guards/authed.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'expositorLibros', component: ExpositorLibrosComponent },
    { path: 'login', component: LoginComponent, canActivate:[AuthedGuard] },
    { path: 'creacionLibro', component: CreacionLibroComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
