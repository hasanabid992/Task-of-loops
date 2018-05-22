//-- Table generator Program while loop---////


 table =() => {
     //initialization--//
let a=1,b=2;
while (a<=10){
 a++;
while (b<=11)
{
    b++;
    console.log(a*b);
}
}
}
//Calling Function//
table()

//---Even-Odd Number detector using for Loop --//  


//-- using arrow function--//
 Even_Odd = ()=> {
//initialization--//
    let num;
for(num=1; num<=15; num++)
{
    if(num%2)
    {
        console.log(" Odd Numbers are :"+num);
    }
    else{
        console.log("Even Numbers are :"+num);
    }
}
}
//Calling Function//
Even_Odd();


//---Do While Loop--//
