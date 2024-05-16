import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ResponseProductDto } from '../../models/categories.model';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit{
  products: ResponseProductDto[];
  selectedProduct: ResponseProductDto;
  showEditModal = false;

  constructor( private adminService : AdminServiceService,
    private toast:NgToastService){

  }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.adminService.GetAllProducts().subscribe({
      next:(res)=>{
        this.products = res;
      },
      error:(err)=>{ 
        console.error('Error fetching products:', err);
      }
    });
  }
  editProduct(product: ResponseProductDto) {
    this.selectedProduct = product;
    this.showEditModal = true;
  }
  closeModal() {
    this.showEditModal = false;
  }
  onProductUpdated() {
    this.getProducts();
  }
  deleteProduct(id: number) {
    this.adminService.DeleteProduct(id).subscribe({
      next: (response) => {
        console.log('Product deleted successfully:', response);
        this.toast.success({ detail: "SUCCESS", summary: "Product deleted successfully", duration: 5000 });
        this.getProducts();
      },
      error: (error) => {
        console.log('Error deleting product:', error);
        this.toast.error({ detail: "ERROR", summary: "Error deleting product", duration: 5000 });
      }
    });
  }
  

}
