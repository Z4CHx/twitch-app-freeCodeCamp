$(document).ready(function(){
    
    var channels = ["dootbeep","bort_hammer","freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    
    
    
    
    
    $.ajax({ 
    type:"GET",
    url: "https://api.twitch.tv/kraken/channels/" + channels[0],
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
    },
    success: function(data1){
        
        var userInfo = '<div class="row"><div class="channel col-md-12"><div class="channel-logo col-md-1"><img src="' + data1.logo + '"></div>' + '<div class="channel-id col-md-6">' + data1.display_name + '</div>' + '<div class="streaming-status col-md-5"</div></div></div>';
        
        console.log(data1);
        console.log(data1.display_name);
        $("div.container").append(userInfo); 
    }
    });
    
    
    
    $.ajax({ 
    type:"GET",
    url: "https://api.twitch.tv/kraken/streams/" + channels[0],
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
    },
    success: function(data1){
        
        console.log(data1);
        if (data1.stream !== null){
            $("div.streaming-status").text("Streaming");
        } else {
            $("div.streaming-status").text("Not Streaming"); 
        }
         
    }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    

});