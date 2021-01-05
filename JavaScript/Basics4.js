  //associative arrays or dictionaries
        var person=new Array();
        person["name"]="Praveen";
        person["Age"]=19;
        for(j in person)
            {
                document.write(person[j],"<br>");
            }
        document.write(person["name"]+"  "+person["Age"]);
        
        
        
        
        //Prompts
     var user_name=prompt("Enter name",""); //stores value in name
     var user_age=prompt("Enter age"); //another way of calling
     document.write("<br>",user_name,"<br>");
     document.write(user_age); 