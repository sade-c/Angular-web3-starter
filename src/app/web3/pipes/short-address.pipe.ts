import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAddress',
  standalone: true,
})
export class ShortAddressPipe implements PipeTransform {
  transform(value: string = "", args: any[]): string {
    if (args.length < 3) {
      return value
    }
    const headLength = parseInt(args[0], 10)
    const tailLength = parseInt(args[2], 10)
    const concatenator = args[1]
    const head = value.substring(0, headLength)
    const tail = value.substring(value.length - tailLength)
    return `${head}${concatenator}${tail}`
  }
}
