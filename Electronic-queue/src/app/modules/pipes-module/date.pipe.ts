import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateM'
})
export class DatePipe implements PipeTransform {

    public transform(value: string): string {
        if (((/^\d\d$/g.test(value)) && (Number(value) < 32)) 
        || ((/^\d\d\.\d\d$/g.test(value)) && (Number(value.slice(3)) < 13))) {
            return value + '.';
        }

        if ((/^\d\d\.$/g.test(value))
        || (/^\d\d\.\d\d\.$/g.test(value))) {
            return value.slice(0, -1);
        }

        return value;
    }

}
