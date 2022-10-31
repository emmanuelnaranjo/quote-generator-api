
        let generator ={};
        function quote (content ,author)
        {
            this.content = content;
            this.author= author;
        }

        
        let quote1 = new quote("Start each day with positive tought and a grateful heart.","Roy Bennet");
        let quote2 = new quote("the way i see if you want to see the rainbow, you gotta put up with rain."," Dollin Parton");
        let quote3 = new quote("Only in the darkness you can see stars.","Mather Luther King"); 
        let quote4 = new quote("intellectual growth should comence at birth and cease only at death","Albert Einstein")   
        generator.quotesList=[quote1,quote2,quote3,quote4];
        generator.quote = function () 
        {
            let randomNum = Math.random();
            let randomNumAnswers = randomNum * this.quotesList.length;
            
            let randomIndex = Math.floor(randomNumAnswers);
            
        
            return this.quotesList[randomIndex];
        }
            
           
        document.getElementById("button").addEventListener("click", function() {
            
            let quote = document.getElementById("quote");
            let ramdon_quote = generator.quote()
            quote.innerHTML =  ramdon_quote.content+" <span id =\"author\">"+ramdon_quote.author+"</span>";
            document.getElementById("author").style.color = "red";
                    
        });
        
    
