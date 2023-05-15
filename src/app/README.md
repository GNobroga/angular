# Componente

E feito por um arquivo HTML, CSS (Opcional) e TS (Configuracoes e Logica).

## Ciclo de vida

### Os 8 eventos no ciclo de vida:
* ngOnInit: é executado uma vez quando o componente é inicializado;
* ngOnChanges: executado também uma vez na criação do componente e toda vez que ele sofrer alguma mudança;
* ngDoCheck: executado a cada mudança que o ngOnChange não detecta;
* ngOnDestroy: executado na destruição do componente.
* Além desses existem outros quatros hooks dentro do ngDoCheck:
* ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;
* ngAfterContentChecked: quando o conteúdo externo é verificado;
* ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;
* ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara.

# Data Binding

E uma forma de exibir dados em seu componente HTML, nada mais do que trabalhar com dados.

- Interpolation
- Property Binding
- Event Binding 
- Two-way binding

## Interpolation

Permite incorporar valores dinamicos nos componentes

````
    HTML: `<h1> {{ variavel }} </h1>`

    CLASS TS: `public title: string = "Bem-vindo";`
````

## Property Binding

Ajuda a definir valores para propriedades de elementos ou diretivas HTML

Definicao: [property]="variavel/funcao" - Permite trabalhar com os dados vindo da classe TS do Componente

````
    <button [disabled]="variavel"> Button </button>

    <img [src]="itemImageUrl">
        // ou
    <img src="{{itemImageUrl}}">
````

## Event Binding

E a associao de eventos que permite voce escutar e responder as acoes do usuario, como pressionamentos de tecla, movimentos do mouse, clique e toques.

Definicao: (event)="funcao()"

````
    <button (click)="funcao()"> Button </button>
````

## Two-way binding

E a uniao do property-binding com o event-binding

Obs: Use para ouvir eventos e atualizar valores simultaneamente entre os componentes pai e filho.

````
    HTML:
        <input [(ngModel)]="nome">
        <span> {{nome}} </span>
    
    Class TS
        public nome = "Dener";
````