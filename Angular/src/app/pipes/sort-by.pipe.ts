import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(array: Array<String>, args?: any): any {
        if (array) {
            const sortField = args[0];
            const sortDirection = args[1];
            let modifier = 1;
            if (sortDirection === 'desc') {
                modifier = -1;
            }
            array.sort((a: any, b: any) => {
                if (a[sortField] < b[sortField]) {
                    return -1 * modifier;
                } else if (a[sortField] > b[sortField]) {
                    return 1 * modifier;
                } else {
                    return 0;
                }
            });
            return array;
        }
    }
}
