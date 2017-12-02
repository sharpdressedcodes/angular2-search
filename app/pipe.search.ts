import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(data, modifier) {
        const mod = modifier.toLowerCase();
        return data.filter((item) => {
            const includesName = item['name'].toLowerCase().includes(mod);
            const includesReknown = item['reknown'].toLowerCase().includes(mod);
            return includesName || includesReknown;
        });
    }
}