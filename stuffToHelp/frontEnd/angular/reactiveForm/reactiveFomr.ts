import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit{

  serviceForm: FormGroup;


  constructor(private fb: FormBuilder, private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceForm = this.fb.group({
      services: this.fb.array([this.newService()])
    });
    this.serviceService.getAllServices().subscribe();
  }

  services(): FormArray {
    return this.serviceForm.get('services') as FormArray;
  }


  newService(): FormGroup {
    return this.fb.group({
      serviceName: '',
      serviceDescription: '',
      feature: this.fb.array([this.newSkill()])
    });
  }


  addService() {
    this.services().push(this.newService());
  }


  removeService(empIndex: number) {
    this.services().removeAt(empIndex);
  }


  servicefeatures(empIndex: number): FormArray {
    return this.services().at(empIndex).get('feature') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({featureName: ''});
  }

  addserviceskill(empIndex: number) {
    this.servicefeatures(empIndex).push(this.newSkill());
  }

  removeserviceskill(empIndex: number, skillIndex: number) {
    this.servicefeatures(empIndex).removeAt(skillIndex);
  }

}
