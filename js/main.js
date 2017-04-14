$(document).ready(function(){
    
    $.ajax({
        
    type:"GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b"
    },
    success: function(data1){
        
        console.log(data1);
    }
    

    
    });
    
    
    
});