class Courses  {  
  constructor(courseId,categoryId,categoryName,courseName,teacher,price,info,percentage){
      this.courseId = courseId
      this.categoryId = categoryId;
      this.categoryName = categoryName;
      this.courseName = courseName;
      this.teacher = teacher;
      this.price = price;
      this.info = info;
      this.percentage = percentage;
  }
}

class Categories  {  
  constructor(categoryId,categoryName){
      this.categoryId = categoryId;
      this.categoryName = categoryName;
  }
}

class Customer  {  
  constructor(customerId,customerName,password,email,balance,address,creditCart){
      this.customerId = customerId;
      this.customerName = customerName;
      this.password = password;
      this.email = email;
      this.balance = balance;
      this.address = address;
      this.creditCart = creditCart;
  }
}

class Teacher  {  
  constructor(teacherId,teacherName,coursesToTeach,password,email,balance,address,creditCart){
      this.teacherId = teacherId;
      this.teacherName = teacherName;
      this.coursesToTeach = coursesToTeach;
      this.password = password;
      this.email = email;
      this.balance = balance;
      this.address = address;
      this.creditCart = creditCart;
  }
}

class CourseService  {  

  add(){
    console.log("kurs eklendi");
  }
  delete(){
    console.log("kurs silindi");
  }
  list(){
    console.log("kurs listelendi");
  }
  getById(){
    console.log("Id'ye göre kurslar listelendi")
  }
  getByName(){
    console.log("İsme göre kurslar listelendi")
  }
  getByCategoryName(){
    console.log("İstediğiniz kategorideki ürünler getirildi")
  }
  getByTeacher(){
    console.log("İstediğiniz eğitmene ait kurslar")
  }
  }

  class CategoryService {
    getAll(){
      console.log("kategoriler getirildi")
    }
    getById(){
      console.log("İstediğiniz kategoriye göre ürünler geldi");
    }
  }

  class CustomerService {
    add(){
      console.log("kullanıcı eklendi")
    }
    list(){
      console.log("kullanıcılar listelendi");
    }
    delete(){
      console.log("kullanıcı silindi");
    }
    getById(){
      console.log("kullanıcı id ye göre getirildi")
    }
    getByName(){
      console.log("kullanıcı isme göre getirildi")
    }
  }

  class TeacherService {
    add(){
      console.log("eğitmen eklendi")
    }
    list(){
      console.log("eğitmen listelendi");
    }
    delete(){
      console.log("eğitmen silindi");
    }
    getById(){
      console.log("eğitmen id ye göre getirildi")
    }
    getByName(){
      console.log("eğitmen isme göre getirildi")
    }
  }

  let customerService = new CustomerService

  customerService.add()
  customerService.delete()

  let courseService = new CourseService

  courseService.add()
  courseService.delete()

  let categoryService = new CategoryService

  categoryService.getAll()
  categoryService.getById()

  let teacherService = new TeacherService

  teacherService.add()
  teacherService.getById()



