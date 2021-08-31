import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayData: any[],searchBy: any): any {
    if(!arrayData) return [];
    if(!searchBy) return arrayData;
    console.log('pipe',searchBy);
    console.table(arrayData); 
    if()
    return arrayData.filter((obj:any)=>obj.name.toLowerCase().indexOf(searchBy.toLowerCase())!=-1);
  }

}
