import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args)
      return value;
    return value.filter(
      item => {
        for (var key of Object.keys(item)) {
          if (item[key].toLowerCase().indexOf(args.toLowerCase()) > -1) {
            return true;
          }
        }
        return false;
        // item.name.toLowerCase().indexOf(args.toLowerCase()) > -1
      }
   );
  }

}
