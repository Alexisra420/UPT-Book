import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';
import { Producto } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private path = 'Productos';

  productos: Producto[] = [];

  constructor(public menucontroler: MenuController,
              public firestoreService: FirestoreService ) { 

              this.loadProductos();

}

  ngOnInit() {}

  openMenu(){
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }

  loadProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res =>{
        
        this.productos = res;
    });
  }

}
