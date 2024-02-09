class student{
    setdetails(){
        this.sid="s0001"
        this.sname="ABC"
        this.grade="A"
    }

    display(){
        console.log(this.sid,this.sname,this.grade)
    }
}

let stu=new student()
stu.setdetails()
stu.display()

class students{
    setdetails(sid,sn,sg){
        this.sid=sid
        this.sname=sn
        this.grade=sg
    }

    display(){
        console.log(this.sid,this.sname,this.grade)
    }
}

let st=new students()
st.setdetails("s0002","Akash","A")
st.display()

class std{
    constructor(sid,sn,sg){
        this.sid=sid
        this.sname=sn
        this.grade=sg
    }
    display(){
        console.log(this.sid,this.sname,this.grade)
    }
}
let s=new std("s0003","ZYX","A")
let s1=new std("s0004","Rahul","B")
let s2=new std("s0005","LMN","B")
s.display()
s1.display()
s2.display()