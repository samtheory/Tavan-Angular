import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var months =[
   "فروردین",
   "اردیبهشت",
   "خرداد",
   "تیر",
   "مرداد",
   "شهریور",
   "مهر",
   "آبان",
   "آذر",
   "دی",
   "بهمن",
   "اسفند",
];
@Pipe({ name: 'PersianDate' })
export class PersianDatePipe implements PipeTransform {
   transform(value: string): string {
      // Date 
      var y : number = + value.slice(0, 4); 
      var sm = value.slice(5, 7); 
      var d : number = +value.slice(8, 10); 
      var m : number = +sm;
      sm = months[m -1];
      
      // Time
      var hour : string = value.slice(11, 13); 
      var minutes : string = value.slice(14, 16); 

      return`${d} ${sm} ${y} - ساعت ${hour}:${minutes}` ;
   }
}