        //math operators
        
        document.write(Math.PI);
        var p=prompt("Enter the num to find square root");
        alert("Square root of "+p+" is "+Math.sqrt(p));   //very important here used + sign for concurrent values
            
        function f1()
            {
                document.write("Hello<br>");
            }
            
            //set interval function
        setInterval(f1(),1000);  //will be called only onoce

        setInterval("f1()",1000);//infinite after every 1 sec
            
            //date object
            
            function currenttime()
            {
                var time=new Date();
                var hrs=time.getHours();
                var mins=time.getMinutes();
                var secs=time.getSeconds();
                document.write(hrs+":"+mins+":"+secs+"<br>");
            }
            setInterval("currenttime()",1000);