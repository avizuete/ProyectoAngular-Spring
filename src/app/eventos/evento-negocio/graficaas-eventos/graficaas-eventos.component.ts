import { Component, OnInit, Input } from '@angular/core';
import { ValoracionEventoService } from '../../valoracion-evento.service';
import { ValoracionEvento } from '../../valoracion-evento';

@Component({
  selector: 'graficaas-eventos',
  templateUrl: './graficaas-eventos.component.html',
  styleUrls: ['./graficaas-eventos.component.css']
})
export class GraficaasEventosComponent implements OnInit {

  constructor(private _valoracionEventoService:ValoracionEventoService) { }
  @Input() evento;
  nota:number;
  sobre_diez:number;
  length:number;
  //eventoMedia:ValoracionEvento[] = new ValoracionEvento()[]
  eventoMedia:any={};
  //eventoMedia:ValoracionEvento = new ValoracionEvento()  
  dataAvaliableDoughnut:boolean= false;
  ngOnInit() {
    this.getMedias();

  }

  getMedias(){
    this._valoracionEventoService.getMedia<ValoracionEvento>(this.evento)
    .subscribe((data: ValoracionEvento) => this.eventoMedia = data,
      error => () => {
        console.log("GetEvento MEdia");

      },
      ()=>{
       
        console.log("GetEvento MEdia");
        console.log(this.eventoMedia)
        console.log("GetEvento MEdia");

        if(this.eventoMedia.length>0){

          this.nota= this.eventoMedia[0][0]
          this.sobre_diez =(10-this.nota);
         this.doughnutChartData = [this.sobre_diez,this.nota];
         this.dataAvaliableDoughnut= true;
        }

       
      }
    );
  }

  // doughnut
  public doughnutChartLabels:string[] = ['-','+'];
  

  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';


  public doughnutChartOptions: any = {
    responsive: true,
     legend: {
      display: false,
      
     },/*
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
             // max:100
              
          }
      }],
      xAxes:[]
    }*/

  };
  
    private doughnutChartColors: any[] = [{ backgroundColor: ["#FFFFFF", "#FFC107"] }]

  // events
   chartClicked(e: any): void {
    console.log(e);
  }

   chartHovered(e: any): void {
    console.log(e);
  }

}
