class student{
    constructor(){
        let name,marks
    }

    getname(){
        return this.name
    }

    setname(name){
        this.name=name
    }

    getmarks(){
        return this.marks
    }

    setmarks(marks){
        this.marks=marks
    }

}

let stu=new student()
stu.setname("John")
stu.setmarks("98")
console.log(stu.getname())
console.log(stu.getmarks())