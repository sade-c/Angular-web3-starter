import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rounding',
    standalone: true
})

export class RoundingPipe implements PipeTransform {

    transform(value: string, args: any[]): string {
        const num: number = +value
        return num.toFixed(args[0])
    }
}
