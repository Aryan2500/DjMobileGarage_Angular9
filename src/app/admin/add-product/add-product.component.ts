import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder , Validators} from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
declare  var $ : any
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  catList :any = ''
  productForm : FormGroup
  image: any;
  status: boolean;
  constructor(private cateService : CategoryService , private fb: FormBuilder , private productService: ProductService) { 
    this.productForm = fb.group({
      name : ["" , [Validators.required]],
      price  : ["" , [Validators.required]],
      image: new FormControl(),
      category : ["" , [Validators.required]],
      description :["" , [Validators.required]],
      isAvailable : ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.cateService.fetchAllCategory().subscribe(data=>{
      this.catList = data['data']
      console.log(this.catList)
    } , err=>{
      this.catList = undefined
    })
  }

  saveProduct(form){
      const formData = new FormData()
      formData.append('name' , form.value.name)
      formData.append('price' , form.value.price)
      formData.append('category', form.value.category)
      formData.append('isAvailable', form.value.isAvailable)
      formData.append('description', form.value.description)
      formData.append('image' , form.value.image)
      console.log(form.value.category)

      this.productService.postProduct(formData).subscribe(data=>{
        if(data){
            
            $("#modal").modal({
              backdrop: "static",
              keyboard: false,
              show: true,
            });
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

}
