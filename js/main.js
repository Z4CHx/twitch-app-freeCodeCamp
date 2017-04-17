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
                console.log(channels[channel][0]);
            }
        }});
    });
    
    
    
    
    
    setTimeout(function(){

    channelList.forEach(function(channel){
        
        $.ajax({ 
        type:"GET",
        url: "https://api.twitch.tv/kraken/channels/" + channel,
        headers:{
            "Client-ID": "ljvzlno3ci0iq7l7dl0hxww9dx0j0b",
        },
        success: function(data){
            if(channels.hasOwnProperty(channel)) {
                channels[channel][1] = data.game;
                console.log(channels[channel][1]);
                
                var statusPhrase = function(){
                    if(channels[channel][0]===null){
                        return "Offline";
                    } else {
                        return "Streaming" + " " +channels[channel][1];
                    }
                };
                
                var channelRow = '<div id="' + data.display_name +'" class="row channel ' + statusPhrase() +'"><div class="container-fluid"><div class="panel-body"><div class="channel-logo col-md-4"><a href ="' + data.url + '"><img src="' + data.logo + '"></a></div>' + '<div class="channel-id col-md-4"><a href="' + data.url + '">' + data.display_name + '</a></div><div class="stream-status col-md-4">' + statusPhrase() + '</div></div></div></div>';
                
                $("body").append(channelRow);
                   
            }

        }}); 
         
    });}, 1000);
    
    $('#now-streaming-btn').on('click',function(){
        $("div.Offline").hide();
    });
    
    $('#all-channels-btn').on('click',function(){
        $("div.Offline").show();
    });
        

}); // end main function




