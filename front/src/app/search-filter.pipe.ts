import { Pipe, PipeTransform } from '@angular/core';
import { RetailProfileModel } from './Models/retailprofile.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: string){
    if( value.length === 0 || searchText === ''){
      return value;
    }

    const retailData =[];
    for(const rd of value){
      if(rd["userName"] === searchText ){
        retailData.push(rd);
      }

    }
    return retailData;

  }
}
