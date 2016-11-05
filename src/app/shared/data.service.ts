import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from '../project';
import { IMAGES } from './data';

@Injectable()
export class DataService {

  public projects;
  public imageData;
  public projectsArray: Project[] = [];
  public selectedProject: Project = {};
  public searchTerm = '';
  
  constructor(private http: Http) { 
      console.log('const');
      this.projects = this.getFsData();
      this.imageData = this.getImageData();
  }

  getFsData() {
      var that = this;
      return this.http.get('https://spreadsheets.google.com/feeds/list/1ehR5coXSI3uYQRjKsmW4l5WWMxm0bTelCKptT836kYM/default/public/values?alt=json')
          .map(data => data.json().feed.entry).map(data => { data.forEach(dataItem => {
              var project = {
                  'id'           : dataItem.gsx$projectid.$t,
                  'name'         : dataItem.gsx$name.$t,
                  'lat'          : dataItem.gsx$lat.$t,
                  'lng'          : dataItem.gsx$lng.$t,
                  'description'  : dataItem.gsx$description.$t,
                  'teaser'       : that.truncateOnWord(dataItem.gsx$description.$t, 100),
                  'icon'         : dataItem.gsx$icon.$t,
                  'tagsImportant': dataItem.gsx$tagsimportant.$t,
                  // 'tags'         : dataItem.gsx$tags.$t
                  'img'          : dataItem.gsx$img.$t
              };

              dataItem = project;
              that.checkAndAdd(that.projectsArray, project)
              // that.projectsArray.push(project);
          });
      } ).share();
  }

  checkAndAdd(arr, toAdd) {
      var id = arr.length + 1;
      var found = arr.some(function (el) {
        return el.id === toAdd.id ;
      });
      if (!found) { arr.push(toAdd)}
    }
  selectProject(id) {
      var id2 = id-1;
      var that = this;
      if(this.projectsArray.length > id2){
          this.selectedProject = this.projectsArray[id-1];
      } else {
          this.getFsData().subscribe(data => {
              that.selectedProject = that.projectsArray[id-1];
          })
      }
  }  


  truncateOnWord(str, limit) {
        var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
        var reg = new RegExp('(?=[' + trimmable + '])');
        var words = str.split(reg);
        var count = 0;
        var returnValue = words.filter(function(word) {
            count += word.length;
            return count <= limit;
        }).join('');
        if (count > limit) {
            return returnValue+'...';
        } else {
            return returnValue;
        }
    }
  // getProject(id) {
  //     return this.projects.filter(function(obj){
  //         console.log(obj)
  //         return obj.id === id;
  //     })[0];
  // }

  getImageData(){

    return IMAGES;
  }
}
