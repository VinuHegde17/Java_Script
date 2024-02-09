function student(){
    this.name="john"
    this.gender="male"
}
student.prototype.age=35
st=new student()
console.log(st.name,st.gender,st.age);
st1=new student()
console.log(st1.name,st1.gender,st.age)

class employee{
constructor(eid,ename){
    this.eid=eid;
    this.ename=ename
}
}

employee.prototype.esal=500000
employee.prototype.display=function(){
    console.log(e.eid,e.ename,e.esal)

}
e=new employee(1,"Akash")
console.log(e.eid,e.ename,e.esal)
e.display()

emp=new employee(2,"Ajay")
console.log(emp.eid,emp.ename,emp.esal)
emp.display()