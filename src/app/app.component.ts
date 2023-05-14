import { Component } from '@angular/core'; // E um decorator para falar que e um componente angular.

/*

	Ocultar elemento com base em uma variavel boolean:
	<selector *ngIf="variavel"> </selector>

*/
@Component({
  selector: 'app-root', // Nome do selector para o  componente
  template: `
    <app-header title="Testando o Angular"></app-header>
    <app-footer *ngIf="getVisible()"></app-footer>
    <router-outlet></router-outlet>
    <button (click)="show()">Destruir footer</button>
  `,
  styleUrls: ["./app.component.css"]
})

/*

  Eu posso criar meu componente por aqui ou separar em arquivos:

    EX:

      template: "<div> Hello World </div>"
      style: ""

  E possivel passar codigo para o template atraves da interpolacao {{}}, esses dados
  vem da classe AppComponent.

*/
export class AppComponent {
  
    private visible: boolean = true;

    public show(): void {
        this.visible = !this.visible;
    }

	public getVisible(): boolean {
		return this.visible;
	}
}
