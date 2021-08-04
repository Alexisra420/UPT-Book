import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FirebaseauthService } from './sevices/firebaseauth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent {

  admin = false;

  constructor(
    private platform: Platform,
  // private splashScreen: SplashScreen,
   // private statusBar: StatusBar,
    private firebaseauthService: FirebaseauthService) {
    this.initializeApp();
 }

  initializeApp() {
    
     this.platform.ready().then(() => {
     //  this.statusBar.styleDefault();
     //  this.splashScreen.hide();
     this.getUid();
     });
  
  }


  getUid() {
      this.firebaseauthService.stateAuth().subscribe( res => {
           if (res !== null) {
                if (res.uid === 'BdCvG4tpr5WKoedexqhHBy8HTc72')  {
                    this.admin = true;
                } else {
                   this.admin = false;
                }
            } else {
            this.admin = false;
           }
      });
  }
}






  //  match /Productos/{documents=**} {
  //  allow read;
  //  allow write: if request.auth.uid == 'BdCvG4tpr5WKoedexqhHBy8HTc72'
  //  }

// match /Clientes/{userId}/pedidos/{documents=**} {
// allow read;
// allow write: if request.auth.uid == userId
// }


//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2020, 12, 28);
//     }
//   }
// }

