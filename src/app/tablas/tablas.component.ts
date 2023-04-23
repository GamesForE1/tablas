import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  current: number = 2;

  valor2: number;
  valor3: number;
  valor4: number;
  valor5: number;
  valor6: number;
  valor7: number;
  valor8: number;
  valor9: number;
  valor10: number;

  constructor(){
  }

  tabla(numero: number){
    this.current = numero;
  }

  ok(current: number, multiplicador: number, valor){
    console.log(current, multiplicador, valor)
    if(current * multiplicador === valor){
      Swal.fire('PERFECTO!')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: current + " x " + multiplicador + " no es " + valor
      })
    }
  }

}
