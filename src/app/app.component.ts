import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deluxdemo';
  canvas: any;
  url = '';
  uploadNewImage = false;

  ngOnInit() {

  }


  onSelectFile(event) {
    this.uploadNewImage = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  addFabricText() {
    this.canvas = new fabric.Canvas('canvas');
    this.canvas.add(new fabric.IText('new text'));


    // let rect = new fabric.Text('New Text',{
    //   top:Math.floor(Math.random()*350+1),
    //   left:Math.floor(Math.random()*250+1),
    //   fill:'red'
    //
    //
    // });
    // this.canvas.add(rect);
  }
}
