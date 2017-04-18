$(document).ready(function(){
    
    var channelList = ["dootbeep","bort_hammer","freecodecamp","ESL_SC2", "OgamingSC2", "cretetion","habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404","yaraskygaming"];
    
    var channels = {
        
        dootbeep : ["",""],
        bort_hammer : ["",""],
        freecodecamp : ["",""],
        ESL_SC2 : ["",""],
        OgamingSC2 : ["",""],
        cretetion : ["",""],
        habathcx : ["",""],
        RobotCaleb : ["",""],
        noobs2ninjas : ["",""],
        brunofin : ["",""],
        comster404 : ["",""],
        yaraskygaming :  ["",""]
    };
    
    
    // get the stream status and write to channels
    channelList.forEach(function(channel){
        
        $.ajax({ 
        type:"GET",
        url: "https://api.twitch.tv/kraken/streams/" + channel,
        headers:{
            "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
        },
        success: function(data){
            if(channels.hasOwnProperty(channel)) {
                channels[channel][0] = data.stream;
            }
        }});
    });
      
    
    // set a timeout to alleviate call timing errors, will refactor with promises
    setTimeout(function(){
        
    // look at each channel in the channelList and do the following...
    channelList.forEach(function(channel){
        
        $.ajax({ 
        type:"GET",
        url: "https://api.twitch.tv/kraken/channels/" + channel,
        headers:{
            "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
        },
            
        statusCode: {
            404: function(data) {
            
            var channelRow = '<div id="' + channel + '" class="row channel not-found"><div class="container-fluid"><div class="panel-body"><div class="channel-logo no-logo col-md-4"><a href ="#"><img src="img/box.svg"></a></div><div class="channel-id col-md-4"><a href="#">' + channel + '</a></div><div class="stream-status col-md-4">Channel Not Found</div></div></div></div>';
                
                $("div#channels").append(channelRow);
                
            } // end channelRow
        }, // end status code
        
        // build valid channels (excludes channels not-found)
        success: function(data){
            
            // write null or streaming plus game title accordingly
            if(channels.hasOwnProperty(channel)) {
                channels[channel][1] = data.game;
                var statusPhrase = function(){
                    if(channels[channel][0]===null){
                        return "Offline";
                    } else {
                        return "Streaming" + " " + channels[channel][1];
                    }
                }; // end statusPhrase
                
                // buildout and display based data of both API calls
                var channelRow = '<div id="' + data.display_name +'" class="row channel ' + statusPhrase() +'"><div class="container-fluid"><div class="panel-body"><div class="channel-logo col-md-4"><a href ="' + data.url + '"><img src="' + data.logo + '"></a></div>' + '<div class="channel-id col-md-4"><a href="' + data.url + '">' + data.display_name + '</a></div><div class="stream-status col-md-4">' + statusPhrase() + '</div></div></div></div>';
                
                $("div#channels").append(channelRow);
                   
            } // end check if channels object has my channels

        }, //end success function
        
        // see status code above
        error:  function (request, status, error){}
        
        }); // end call for channel info ( not stream status )
         
    }); // end forEach that cycles through channelList item
    
    }, 250); // end setTimeout
    
    
    // listen for user click to sort channels based on a class that was appended when each channel was created and displayed.
    $('#now-streaming-btn').on('click',function(){
        $("div.Offline").hide();
        $(this).addClass("active");
        $('#all-channels-btn').removeClass('active');
    });
    
    $('#all-channels-btn').on('click',function(){
        $("div.Offline").show();
        $(this).addClass("active");
        $('#now-streaming-btn').removeClass('active');
    });
        

}); // end main function




