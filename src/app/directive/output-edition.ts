import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[appOutputEdition]',
  // host: // declaration des host listener
})
export class OutputEdition<T> {
  value = input.required<T>({alias: 'appOutputEdition'})
  edited = output<T>({alias: 'appOutputEditionEdited'})
  removed = output<void>({alias: 'appOutputEditionRem'})

  @HostListener('dblclick')
  onDblClick() {
    this.edited.emit(this.value())
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault()
    this.removed.emit()
  }
}
