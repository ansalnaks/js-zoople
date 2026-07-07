
    // <!-- Callback Hell in JavaScript is a situation where multiple callbacks are nested 
    // inside each other, making the code hard to read, debug, and maintain. -->
        function task1(callback){
            setTimeout(()=>{
                console.log("task1 completed"); 
                callback()
            },2000)
             
        }
        function task2(callback){
            setTimeout(()=>{
                console.log("task2 completed"); 
                  callback() 
            },1000)
          
        }
        function task3(callback){
           setTimeout(()=>{
                console.log("task3 completed"); 
                callback() 
            },2000)
            
        }
        function task4(callback){
            setTimeout(()=>{
                console.log("task4 completed");  
                callback()
            },1500)
            
        }
        task1(()=>{
            task2(()=>{
                task3(()=>{
                    task4(()=>console.log('complete')
                    )
                })
            })
        })


        

        // function task1(){
        //     setTimeout(()=>{
        //         console.log("task1 complete");
        //     },2000)
 
            
        // }
        // function task2(){
        //     console.log("task2 complete");
            
        // }
        // function task3(){
        //     console.log("task3 complete");
            
        // }
        // function task4(){
        //     console.log("task4 complete");
            
        // }
        // task1()
        // task2()
        // task3()
        // task4()