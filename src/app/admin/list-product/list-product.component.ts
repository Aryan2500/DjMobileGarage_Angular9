import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule , FormGroup , FormControl, FormBuilder , Validators} from '@angular/forms'
import { GlobalConstants } from 'src/app/common/global_constant';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
declare var $:any
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  catList :any
  productForm : FormGroup
  image: any;
  status = false;
  products: any;
  apiBaseUrl = GlobalConstants.apiBaseURL
  product: any;
  oldFileName : string
  totalDocs: any;
  constructor(private cateService : CategoryService , private fb: FormBuilder , private productService: ProductService) { 
    this.productForm = fb.group({
      name : ["" , [Validators.required]],
      price  : ["" , [Validators.required]],
      image: new FormControl(),
      id  : new FormControl(),
      category : ["" , [Validators.required]],
      description :["" , [Validators.required]],
      isAvailable : ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.listProduct()
    
  }

  getCategories(){
    this.cateService.fetchAllCategory().subscribe(data=>{
      this.catList = data['data']

      console.log((this.catList))
    } , err=>{
      this.catList = undefined
    })
  }

  updateProduct(form){
      const formData = new FormData()
      const id = form.value.id
      formData.append('name' , form.value.name)
      formData.append('price' , form.value.price)
      formData.append('category', form.value.category)
      formData.append('isAvailable', form.value.isAvailable)
      formData.append('description', form.value.description)
      if(form.value.image===null){
        form.value.image = this.oldFileName
         
      }
      formData.append('image' , form.value.image)
      console.log(form.value )
  // return
      this.productService.updateProduct(id ,formData).subscribe(data=>{
        if(data){
          
            this.status = true
            this.listProduct()
            this.productForm.reset()
        } 
      }, (err)=>{
        console.log(err)
      })
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
   this.productForm.get('image').setValue(this.image)
     
     console.log(this.image)
  }

  listProduct(){
    this.productService.fetchProductList().subscribe(data =>{
      this.products = data['docs']
      this.totalDocs = data['totalDocs']
      console.log(this.products)
    })
  }
  popUpModal(id , form){
    $("#modal").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });

    this.status = false

    this.productService.getSingleProduct(id).subscribe(data=>{
      this.product = data['doc']
      this.getCategories()
      form.patchValue({
        name:this.product.name,
        price : this.product.price,
        id : this.product._id,
        category : this.product.category,
        description:this.product.description,
        isAvailable:this.product.isAvailable
        
      })
      this.oldFileName = this.product.image
      console.log(this.product.category)
    })
  }

   deleteProduct(id){
     this.productService.deleteProduct(id).subscribe(data=>{
       this.listProduct()
     })

   }

}
