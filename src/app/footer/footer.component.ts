import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnDestroy {

  // Quando o elemento sumir da tela de renderizacao essa funcao sera executado
  public ngOnDestroy(): void {
      window.alert("Eu fui morto");
  }

}
