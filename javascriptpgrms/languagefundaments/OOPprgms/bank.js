class Bank{
    static bankName=()=>{
        console.log("SBI");
    }
    createAccount=(accno,name,min_bal)=>{
        this.accno =accno;
        this.name=name;
        this.min_bal=min_bal;
    }
    deposit=(amount)=>{
        this.min_bal +=amount;
        console.log("Your account is credited with",amount,"balance is",this.min_bal);
    }
    withdraw=(amount)=>{
        if(this.min_bal < amount){
            console.log("Insufficient balance");
        }
        else{
            this.min_bal -=amount;
            console.log("Your account is debited with",amount,"Minimum balance is",this.min_bal);
        }
    }
    balenq=()=>{
        console.log("Your account balance is",this.min_bal);
    }
}

var obj= new Bank();
obj.createAccount(1001,"Libin",5000);
obj.deposit(10000);
Bank.bankName();