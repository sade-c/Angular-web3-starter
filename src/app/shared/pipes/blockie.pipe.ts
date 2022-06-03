import { Pipe, PipeTransform } from '@angular/core';

declare const blockies

@Pipe({
    name: 'blockie'
})

export class BlockiePipe implements PipeTransform {

    transform(value: string, args: any[]): string {
        let size = 8
        let scale = 2
        if (args.length >= 2) {
            size = args[0]
            scale = args[1]
        }
        return this.createBlockie(value, size, scale)
    }

    private createBlockie(value: string, size: number, scale: number) {
        var blockie = blockies.create({
          seed: value,
          size: size,
          scale: scale
        })
        return blockie.toDataURL()
      }
}
