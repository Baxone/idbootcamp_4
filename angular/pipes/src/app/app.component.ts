import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //lso pipes son herramientas de Angular que me permiten transformar o formatear visualmente un dato o contenido sin modificar el valor del propio dato. El data sigue siendo el mismo pero se visualiza de otra forma.

  nombre: string = "Juan Antonio";
  iva: number = 0.21;
  porcentaje: number = 0.253;
  arrayNumeros: any[] = [
    { numero: 1, tipo: 'impar' },
    { numero: 13, tipo: 'impar' },
    { numero: 12, tipo: 'par' },
    { numero: 21, tipo: 'impar' },
  ];
  precio: number = 12345;
  fecha: Date = new Date();
  birthday: string = '2022-12-22'
  racional: number = 3.1455161719;
  arrAnimales: string[] = ['Leon', 'Gato', 'Periquito', 'Mofeta']
  inicio: number = 0;
  maximo: number = 0;
  texto: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus libero provident laboriosam illo nam aspernatur, dolorem deserunt quod soluta officia velit pariatur doloremque officiis quibusdam numquam ea, itaque autem quis cumque. Praesentium, atque eius odio vitae unde tenetur rem, porro eligendi sit cupiditate expedita? Beatae qui perferendis voluptate ullam molestiae aut tempore sapiente doloremque dicta perspiciatis quibusdam at voluptates fuga hic voluptatem iusto possimus eligendi repellat sequi repudiandae, totam harum sint! Ducimus quidem ab adipisci officiis nobis omnis, nostrum doloremque. Est impedit hic maiores maxime, magnam tempore cum unde, sapiente enim consequuntur dolores? Est alias aperiam accusantium ad culpa.'


  cambiarLong($event: any) {
    this.maximo = $event.target.value;
  }


}
