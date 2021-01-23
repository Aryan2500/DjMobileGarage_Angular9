import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
declare var $:any
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  // @ViewChild('name') name :ElementRef
  category_list : any
  status: any;
  constructor(private  categoryService : CategoryService ) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  addCategory(form){
    
    console.log(form.value.name)
    const formData = new FormData()
    formData.append('category' , form.value.name)
    this.categoryService.postCategory(formData).subscribe(data=>{
      console.log(data)
      this.getAllCategory()
      form.reset()
    })
  }

  getAllCategory(){
    this.categoryService.fetchAllCategory().subscribe(data=>{
      this.category_list= data['data']
      console.log(data)
      if(data['data'].length >0){
        this.category_list = data['data']
      }else{
        this.category_list = null
      }
      console.log(this.category_list)
    })
  }

  setDataForEdit(id , name ,Editform ){
    console.log(id)
    console.log(name)
    this.status = false
    Editform.setValue({name:name , id:id})
    $("#modal").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });


  }
  
  editCategory(form){
    const formData = new FormData()
    formData.append('category' , form.value.name)
    formData.append('id' , form.value.id)
    console.log(form.value)
    this.categoryService.updateCategory(formData).subscribe(data=>{
      this.status = data['updated']
      if(this.status){
         this.getAllCategory()
         setTimeout(()=>{
            this.status = false
         },2000)
      }
    })
  }

  deleteCategory(id){
    this.categoryService.deleteCategory(id).subscribe(data=>{
      const deleteCount = data['data']['deletedCount']
      if(deleteCount){
        this.getAllCategory()
      }
      
    })
  }
}
