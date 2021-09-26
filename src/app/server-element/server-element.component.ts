import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";
@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //emulated = default
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name:string;

  constructor() {
    console.log("constructor called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  ngDoCheck(): void {
     console.log('ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
