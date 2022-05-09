import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

    public transform(value: string): string {
        if (/^7/g.test(value)){
            return '+' + value + ' (';
        }

        if (/^8$/g.test(value)){
            return value + ' (';
        }

        if (/^(\+7|8) \(9\d\d$/g.test(value)){
            return value + ') ';
        }

        if (/^(\+7|8) \(9\d\d\d$/g.test(value)){
            return value.slice(0, -1) + ') ' + value.slice(-2, -1);
        }

        if ((/^(\+7|8) \(9\d\d\) \d\d\d$/g.test(value)) || 
            (/^(\+7|8) \(9\d\d\) \d\d\d\-\d\d$/g.test(value))){
            return value + '-';
        }

        if ((/^(\+7|8) \(9\d\d\) \d\d\d\d$/g.test(value)) || 
            (/^(\+7|8) \(9\d\d\) \d\d\d\-\d\d\d$/g.test(value))){
            return value.slice(0, -1) + '-' + value.slice(-1);
        }

        if (/^(\+7|8) \($/g.test(value)){
            return '';
        }

        if ((/^(\+7|8) \(9\d\d\) \d\d\d\-$/g.test(value)) || 
        (/^(\+7|8) \(9\d\d\) \d\d\d\-\d\d\-$/g.test(value))){
            return value.slice(0,-1);
        }

        if (/^(\+7|8) \(9\d\d\) $/g.test(value)){
            return value.slice(0, -2);
        }

        if (/^(\+7|8) \(9\d\d\)$/g.test(value)){
            return value.slice(0, -1);
        }

        if (/^9/g.test(value)){
            return '+7 (' + value;
        }

        return value;
    }

}
