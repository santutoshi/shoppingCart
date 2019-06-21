import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'filterUnique',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        const unique = value
            .map(e => e["id"])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => value[e]).map(e => value[e]);
        return unique;
    }
}

