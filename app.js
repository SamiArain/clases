// Q-1

class personAccount{
    constructor(Fname ,Lname ,[x,y], [a,b ,c=2000] , Tincome,Texpenses, Abalance){
        this.firstName = Fname;
        this.lastName = Lname;
        this.income = [x, y];
        this.expenses =[a ,b ,c];
        this.totalIncome = Tincome;
        this.totalExpenses= Texpenses;
        this.accountBalance = Abalance;
        
    }
}
const pA = new personAccount("Muhammad" ,"Sami" , [30000, 15000] ,
[5000 , 10000] , 45000 , 17000,70000);
console.log(pA)


// Q2
class AutoMobile{
    constructor(N,C,M,t,[x,y,z]){
        this.Name =N;
        this.Color = C;
        this.Model = M;
        this.Type = t;
        this.Feature([x,y,z])
    }
    Feature([x,y,z] ){
        this.Feature =[x,y,z];
    }
}
// Q3
class bus extends AutoMobile{
    constructor(N,C,M,t,[x,y,z],s){
        super(N,C,M,t,[x,y,z])
        this.Seats = s;
    }
}
class truck extends AutoMobile{
    constructor(N,C,M,t,[x,y,z],cb){
        super(N,C,M,t,[x,y,z])
        this.carryBox = cb;
    }
}
const Amobile = new AutoMobile("civic" , "white" ,2019 ,"honda",["turbo" ,"nitro","automatic"]);
console.log(Amobile);
const Bus = new bus("metro" , "red",2022 ,"paksitan" ,["turbo" ,"nitro","automatic"],64 )
console.log(Bus);
const Truck = new truck("dumper" , "yellow & white" ,"volvo" ,"japan" ,["turbo" ,"nitro","automatic"], "16 feet")
console.log(Truck)


