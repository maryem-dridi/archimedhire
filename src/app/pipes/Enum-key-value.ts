import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumKeyValue' })
export class EnumKeyValue implements PipeTransform {
  transform(obj: object): { key: string, value: any }[] {
    return Object.entries(obj)
      .filter(([key, value]) =>
        !/^\d+$/.test(key) ||         // Inclure les clés qui ne ressemblent pas à des entiers ou...
        !obj.hasOwnProperty(value))   // ...inclure les clés dont les valeurs n'apparaissent pas aussi comme des clés.
      .map(([key, value]) => ({ key, value }));
  }
}
