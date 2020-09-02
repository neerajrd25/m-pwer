import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kognitive';

  deferredPrompt: any;
  showButton = false;

  constructor(private swUpdate: SwUpdate, push: SwPush) {
    
    // push.messages.subscribe(mes=>{
    //   console.log(JSON.stringify(mes))
    // })
    // const pushKey ='BJbI-2PHC0KS-gdzVdwCnoL988yhDeUwwijPmuQP-iZB114aMraZYXH6KzUqIYGHkmiUBmd7DFYISCM0N_SH71c';
    // push.requestSubscription({serverPublicKey: pushKey}).then((pushsubscription)=>{
    //   console.log(pushsubscription.toJSON)
    // })
  }
  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {

          window.location.reload();
        }
      });
    }

    // this.swUpdate.available.subscribe((data)=>{
    //     console.log(data);
    // })

    

  }


  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onbeforeinstallprompt(e) {
  //   console.log(e);
  //   // Prevent Chrome 67 and earlier from automatically showing the prompt
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   this.deferredPrompt = e;
  //   this.showButton = true;
  // }
  // addToHomeScreen() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //     .then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the A2HS prompt');
  //       } else {
  //         console.log('User dismissed the A2HS prompt');
  //       }
  //       this.deferredPrompt = null;
  //     });
  // }
}
