/***** Service *********/

  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  
  /******* Component:: Sender *******/
  
  
  sendMessage(): void {
    this.serviceService.sendMessage('Message from Home Component to App Component!');
  }
  
  <button (click)="sendMessage()" >Send Message</button>

  
  
    /******* Component:: Receiver *******/

---> in constructor:
    this.subscription = this.serviceService.getMessage().subscribe(message => { this.message = message; });



  <div *ngIf="message" class="alert alert-success">{{message.text}}</div>
