import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[realBrasilMask]'
})
export class RealBrasilMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    let newValue = initialValue.replace(/\D/g, '');
    newValue = newValue.replace(/^0+/, ''); // remove zeros à esquerda
    if (newValue.length > 2) {
      newValue = newValue.substring(0, newValue.length - 2) + ',' + newValue.substring(newValue.length - 2, newValue.length);
    } else if (newValue.length === 2) {
      newValue = '0,' + newValue;
    } else if (newValue.length === 1) {
      newValue = '0,0' + newValue;
    }
    newValue = 'R$ ' + newValue;
    this.el.nativeElement.value = newValue;
  }

}
