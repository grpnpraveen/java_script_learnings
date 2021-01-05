 var x=3;
        var y=-10;
        var z=10.232323;
        var name="praveen";
        var b=true;
        var n=null;
        document.writeln(x,",",y,",",z,",",name," is my name",",",b,",",n);
        x-=10;          //3-10
        document.write(",",x);
        x+=10;         //-7+10
        document.write(",",x);
        x*=10 ;          //3*30
        document.write(",",x);
        x/=10;           //30/10
        document.write(",",x);
//global var              
        //FUNCTIONS
        
        function fun1(name){
            //inside local var
            document.writeln(",Just called fun1 function using parameter ",name)
        }
        fun1(name);             //can have multiple parameters
        fun1("Sanju");
        
        function fun2(){    //func from func
            fun1("Ram");
        }
        fun2();
        function fun3()
        {
            fun1("ramram");
            fun2();
        }
        fun3();
//if and else conditions
        if(x>2)
        {   p=true;
            document.write(",",p);
           
           }
        else
        {   p=false;
            document.write(",",p);
           
           }
        if(x==3 && b==true)// != &&  ||   condition
        {
            document.write(",","and condition");
        }
        
//switch  as same as c 
        
        var grade="A";
        
        switch(grade)
            {
                    
                case "A": document.write(",","Excellent <br>");
                            break;
                    
                case "B": document.write(",","Good <br>");
                            break;
                case "C": document.write(",","Not Bad <br>");
                            break;
                default: document.write(",","INVALID <br>");
                  
            }

//for loop
        for(var t=0;t<8;t++){
            if(t==5){
                continue;
            }
            if(t==7){
                break;
            }
            document.write("Hello World!<br>");
        }
//while loop
        var check=5;
        while(check>3)
            {
                document.write("While loop!!<br>");
                --check;
            }
//do while loop
        var ddo=4;
        do{
            document.write("Do While loop!!<br>");
            ddo--;
        }while(ddo>2);
        