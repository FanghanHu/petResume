//code to render the gallery on the homepage
var queryURL3 = "https://dog.ceo/api/breeds/image/random/5"


//querying random images from the dogceo api then rendering them on the browser
$.ajax({
    url: queryURL3,
    method: "GET"
}).then(function(response3){

        console.log("console log before the url")
        console.log(response3.message[0])

        //adding dynamic html that holds the pet info data from our query
        //next step would be to fix image sizes so that they fit the container
        var galleryHtml = `
        
        
            <div class="carousel carousel-slider center">

                   

                    <div class="carousel-item  white-text" href="#one!">
                        <a ><img class="responsive-img" src=${response3.message[1]}></a>
                    </div>

                    <div class="carousel-item  white-text" href="#two!">
                        <a><img class="responsive-img" src=${response3.message[2]}></a>
                    </div>

                    <div class="carousel-item  white-text" href="#three!">
                        <a ><img class="responsive-img" src=${response3.message[3]}></a>
                    </div>

                    <div class="carousel-item  white-text" href="#four!">
                        <a ><img class="responsive-img" src=${response3.message[4]}></a>
                    </div>

                    <div class="carousel-item  white-text" href="#four!">
                        <a ><img class="responsive-img" src=${response3.message[0]}></a>
                    </div>


             </div>


             `

            
            $("#gallery").html(galleryHtml)

            //I need to make seperate javascript files that run depending on which page we're on. 
            //this code changes the carousel image every 2 seconds
            
            $('.carousel').carousel();
            setInterval(function() {
                $('.carousel').carousel('next');
              }, 2000); // every 2 seconds
        

            


})
