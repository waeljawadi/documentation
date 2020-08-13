/***** in childComponent.ts ******/

@Input() private uploadSuccess: EventEmitter<boolean>;

ngOnInit() {
  if (this.uploadSuccess) {
    this.uploadSuccess.subscribe(data => {
      // Do something in the childComponent after parent emits the event.
    });
  }
}

/***** In ParentComponent.ts *****/

private uploadSuccess: EventEmitter<boolean> = new EventEmitter();
onImageUploadSuccess() {
   // The parent emits the event which was given as `@Input` variable to the child-component
   this.uploadSuccess.emit(true);
}

/***** In ParentComponent.html *****/
<app-gallery  [uploadSuccess] = "uploadSuccess" > </app-gallery>
<button (click)="onImageUploadSuccess()"> </button>