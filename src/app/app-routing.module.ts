import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map';
import { SchumacherComponent } from './schumacher';
import { ProjectListComponent, ProjectDetailsComponent, EmptyProjectComponent } from './project';

const routes: Routes = [
    { path: '', redirectTo: 'karte', pathMatch: 'full' },
    { path: 'fritz-schumacher', component: SchumacherComponent},
    { path: 'karte', component: MapComponent, children: [ 
        { path: '', component: EmptyProjectComponent},
        // { path: 'projekte', component: ProjectListComponent},
        { path: 'projekte/:id', component: ProjectDetailsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }