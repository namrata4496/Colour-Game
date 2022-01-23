
        let opt=document.getElementsByClassName("option");
        
        let score=0,
        highscore=0;
        let s;
        let flag=0;
        let set;

        function play(h){
        
        let p = Math.floor(Math.random() * 256);   
        let q = Math.floor(Math.random() *256); 
        let r= Math.floor(Math.random() *256);
        s= Math.floor(Math.random() *h);
       
       let ques =document.getElementById("ques");
       ques.innerHTML="RGB ("+p+", "+q+", "+r+")";
        
        for(let i=h;i>=0;i--){
        if(i==s)
        {
            opt[i].style.backgroundColor="rgb("+p+","+q+","+r+")";
        }  
        else{
        let x = Math.floor(Math.random() * 256);   
        let y = Math.floor(Math.random() *256); 
        let z= Math.floor(Math.random() *256);
    
        opt[i].style.backgroundColor="rgb("+x+","+y+","+z+")";
        }
        }}

        function check(n,h){
            n=n-1;
           if(flag)
           return;
           let ans=document.getElementById("ans");

           if(n==s){
            score++;            
           opt[s].innerHTML="";
           set=setTimeout(play(h),2000);
           }
           else{
            opt[s].innerHTML="This was the right answer";
           
           if (score>highscore){
            let ques =document.getElementById("ques");
            ques.innerHTML="New High Score:"+score;
           highscore=score;
           }
           else{
            let ques =document.getElementById("ques");
            ques.innerHTML="Your Score:"+score;   
           }
           let t=document.getElementById("try");     
           t.style.visibility="visible";
           console.log("heya");   
           flag=1;      
           score=0;
           }
          

        }
        function playAgain(h){
            flag=0;
            opt[s].innerHTML="";
            play(h);
            ans.innerHTML="";
            let t=document.getElementById("try");
            setTimeout(()=>{
                t.style.visibility="hidden";
            })

        }
