import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  addProductForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminServiceService,
    private toast:NgToastService
  ) {
    this.addProductForm = this.fb.group({
      brand: ['', Validators.required],
      productCode: ['', Validators.required],
      productDescription: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      this.adminService.addProduct(this.addProductForm.value).subscribe({
        next: (res) => {
          this.toast.success({ detail: "SUCCESS", summary: "Product Added Sucessfully", duration: 5000 });
          this.addProductForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.toast.error({ detail: "ERROR", summary: "Product already exists!", duration: 5000 });
        },
        complete: () => {
          this.addProductForm.reset();
        }
      });
    }
  }
}
