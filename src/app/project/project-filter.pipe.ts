import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: any, expression:string): any {
       let filter = expression.toLocaleLowerCase();
       return filter ? value.filter(project=> project.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }

}
