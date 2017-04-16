$(document).ready(function(){
    
    var channels = ["dootbeep","bort_hammer","freecodecamp","ESL_SC2", "OgamingSC2", "cretetion","habathcx", "RobotCaleb", "noobs2ninjas"];
    
    
     
  var displayChannel = function(channel){
    //display channel info
    $.ajax({ 
    type:"GET",
    url: "https://api.twitch.tv/kraken/channels/" + channel,
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
    },
    success: function(data){

        var userInfo = '<div="row"><div class="container-fluid channel"><div class="panel-body"><div class="channel-logo col-md-4"><a href ="' + data.url + '"><img src="' + data.logo + '"></a></div>' + '<div class="channel-id col-md-4"><a href="' + data.url + '">' + data.display_name + '</a></div><div class="stream-status col-md-4"></div></div></div></div>';

        console.log(data);
        console.log(data.display_name);
        $("body").append(userInfo); 
    }
    });

    //display status  
    $.ajax({ 
    type:"GET",
    url: "https://api.twitch.tv/kraken/streams/" + channel,
    headers:{
        "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
    },
    success: function(data){

        console.log(data);
        if (data.stream !== null){
            $("div.stream-status").text("Streaming");
        } else {
            $("div.stream-status").text("Not Streaming"); 
        }

    }
    });

  };
    
    
  channels.forEach(displayChannel);  
    
    
    
    
    
    
    
    
    
    

});