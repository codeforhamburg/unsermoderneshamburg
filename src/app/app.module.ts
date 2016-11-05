import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { SchumacherComponent } from './schumacher/schumacher.component';
import { ProjectListComponent } from './project/project-list.component';
import { ProjectDetailsComponent } from './project/project-details.component';

import { DataService, MapService } from './shared';
import { EmptyProjectComponent } from './project/empty-project.component';
import { SearchFieldComponent } from './map/search-field/search-field.component';
import { ProjectFilterPipe } from './project/project-filter.pipe';
import { MarkerComponent } from './map/marker.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SchumacherComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    EmptyProjectComponent,
    SearchFieldComponent,
    ProjectFilterPipe,
    MarkerComponent,
    GalleryComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [DataService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
