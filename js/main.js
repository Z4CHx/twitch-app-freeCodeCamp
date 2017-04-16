$(document).ready(function(){
    
    var channels = ["dootbeep","bort_hammer","freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    
    
    
    
    
    $.ajax({ 
    type:"GET",
    url: "https://api.twitch.tv/kraken/channels/" + channels[0],
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
    },
    success: function(data1){
        
        var userInfo = '<div="row"><div class="container-fluid channel"><div class="panel-body"><div class="channel-logo col-md-4"><a href ="' + data1.url + '"><img src="' + data1.logo + '"></a></div>' + '<div class="channel-id col-md-4"><a href="' + data1.url + '">' + data1.display_name + '</a></div><div class="stream-status col-md-4"></div></div></div></div>';
        
        console.log(data1);
        console.log(data1.display_name);
        $("body").append(userInfo); 
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
            $("div.stream-status").text("Streaming");
        } else {
            $("div.stream-status").text("Not Streaming"); 
        }
         
    }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    

});