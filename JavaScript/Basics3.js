    //creating an array
     var a=new Array("ram",2,"raj");
     for(x in a) //best way
     {
         document.write(a[x]);  //printing an array or for loop and i<array.length(for no errors further pushing in to an arary)
     }
     document.write("<br>",a[0]);
        //second method to create an array
        
    var b=new Array();//size not  necessary
        b[0]=10;
        b[1]=20;
        b[2]=30;
        b[3]=40;
    for(d in b)
        {
            document.write("<br>",b[d]);
        }
        document.write("<br>",b.length);//methods of array
       //join method    
    var t=b.join();
     document.write("<br>",t);
     t=b.join("-");   // VERY IMPORTANT 
     document.write("<br>",t);
     t=b.join("+");
     document.write("<br>",t);
     b.pop()   // POP OPERATION IN AN ARRAY
     for(d in b)
        {
            document.write("<br>",b[d]);
        }
        document.write("<br>",b[3]);   //because poped
        
     b.reverse()  //reverse function in an array which reverses a[0]=a[n]
     for(d in b)
        {
            document.write("<br>",b[d]);
        }
     b.push("900");  //push method
     b.sort();    //sort method
    for(d in b)
        {
            document.write("<br>",b[d]);
        }  
