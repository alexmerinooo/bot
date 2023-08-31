var embeddedBot = {

    secret:"",
    token:"",
    botname:"",
    BRAND: "#232d4b",
    id: "",
    username: "",
    botavatar: "",
    useravatar: "",
    assetsbaseurl: "https://nosotros.gfi.es/chatbot/",
    webchatshown: false,
    //tokenurl: "https://web-app-back-covidee8.azurewebsites.net/api/token",
    tokenurl: "https://web-app-back-sofiupdate74c.azurewebsites.net/api/token",	
    directLine: undefined,

    guid: function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    },

    loadBotName: function() {
        document.getElementById("BotName2").innerText = embeddedBot.botname;
    },

    loadDivs: function(){
        

        bubblediv = document.createElement("div");
        bubblediv.id = "toggleBtn";
        bubblediv.className += "bubbleDiv";

        bubbledivincentive = document.createElement("div");
        
        bubbledivincentive.className += "incentiveBubble";
        bubbledivincentive.className += " sb12";
        //bubbledivincentive.innerText = "Haz clic aquí para chatear con el bot";
	bubbledivincentive.innerText = "Pulsa aquí si tienes dudas sobre recursos humanos";
        bubbleimg = document.createElement("img");
        bubbleimg.className += "bubbleImg";
        bubbleimg.src = this.assetsbaseurl+"avatar.jpg";

        bubblediv.appendChild(bubbleimg);
        bubblediv.appendChild(bubbledivincentive);
        document.body.appendChild(bubblediv);

        $("#toggleBtn").click(function() {
            embeddedBot.toggleWebChat();
          });
        //temp.html = '  <div id="toggleBtn" class="bubbleDiv" onclick="jeffy.toggleWebChat()"><img class="bubbleImg" src="https://storageaccount711.blob.core.windows.net/jeffy/jeffy.png" /></div>';
        
        content = '<div id="webchatBorder">';
        content += '<div id="BotTitle" style="height:34px; padding-left:10px; padding-top:3px; padding-right:10p; background-color:'+embeddedBot.BRAND+'">';
        content += '<h4 id="BotName2" style="font-weight:bold; ">'+embeddedBot.botname+'</h4>';
        content += '<img id="closeIcon" src="'+embeddedBot.assetsbaseurl+'close.svg" class="sizebtn" alt="Alternate Text" onclick="embeddedBot.toggleWebChat()" style="" />';
        //content += '<img id="gfilogo" src="'+embeddedBot.assetsbaseurl+'gfi.png" class="gfilogo" alt="Alternate Text" onclick="" style="" />';
        content += '<img id="maximizeIcon" src="'+embeddedBot.assetsbaseurl+'maximize.svg" class="sizebtn" alt="Alternate Text" onclick="embeddedBot.maximize()" style="" />';
        content += '<img id="minimizeIcon" src="'+embeddedBot.assetsbaseurl+'minimize.svg" class="sizebtn" alt="Alternate Text" onclick="embeddedBot.minimize()" style="display:none" />';
        //content += '<img id="reloadIcon" src="reload.svg" class="sizebtn" alt="Alternate Text" onclick="sgdbf.reload()" style="" />';
        content += '</div>';
        content += '<div id="webchat" role="main">';
        content += '</div>';
        content += '</div>';
        
        $("body").append(content);

    },

    loaduuid: function(s, bname, botavatar, useravatar, uname, userid) {

        embeddedBot.secret = s;
        //embeddedBot.token = embeddedBot.getToken(this.tokenurl);
        
        embeddedBot.botname = "Informacion acerca de People & Talent";
        embeddedBot.id = embeddedBot.guid();
        embeddedBot.username = "Anonymous";
		//Para recuperar el nombre desde el portal
		//var div = document.getElementById("block-views-men-usuario-block");
		//var els = div.getElementsByTagName("a");
		//embeddedBot.username = els[1].innerText; // aquí está el nombre completo
        embeddedBot.botavatar = botavatar;
        embeddedBot.useravatar = useravatar;
        //PROD
        $('head').append('<link rel="stylesheet" type="text/css" href="'+embeddedBot.assetsbaseurl+'embeddedBot.css">');
        //DEV
        //$('head').append('<link rel="stylesheet" type="text/css" href="file:///C:/Users/labgfi/Desktop/Jeffy/jeffy.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700">">');
        embeddedBot.loadDivs(bname);
        //embeddedBot.showBot();
        //embeddedBot.getToken(this.tokenurl);
    },

    fullscreen : function() {
        var e = $('#webchatBorder');
        e.css("position", "fixed");
        e.css("top", "0");
        e.css("left", "0");
        e.css("width", "100vw");
        e.css("height", "100vh");
        e.css("margin", "0");
        e.css("z-index", "10");

        $('#btnmaximize').hide();
        $('#btnminimize').show();
    },

    restore: function() {
        var e = $('#webchat');
        e.css("position", "sticky");
        e.css("top", "0");
        e.css("left", "0");
        e.css("width", "calc(100% - 50px)");
        e.css("height", "calc(100% - 100px)");
        e.css("margin", "50px 25px");
        e.css("z-index", "10");

        $('#btnmaximize').show();
        $('#btnminimize').hide();
    },

    showBot: function() {
        function fontFamily(fonts) {
            return fonts.map(font => `'${ font }'`).join(', ');
        }
        embeddedBot.directLine = window.WebChat.createDirectLine({ token: embeddedBot.token })
        const DEFAULT_ACCENT = '#005573';
        const DEFAULT_SUBTLE = '#767676'; // With contrast 4.5:1 to white
        const PADDING_REGULAR = 10;

        const styleOptions = {
            // Color and paddings
            accent: '#005573',
            backgroundColor: '#ffffff',
            paddingRegular: PADDING_REGULAR,
            paddingWide: 20,
            subtle: DEFAULT_SUBTLE,
            
            // Word break
            messageActivityWordBreak: 'break-word', // 'normal' || 'break-all' || 'break-word' || 'keep-all'

            // fonts
            primaryFont: fontFamily(['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif']),
            monospaceFont: fontFamily(['Consolas', 'Courier New', 'monospace']),
            fontSizeSmall: '80%',

            // Avatar
            avatarSize: 40,
            botAvatarImage: this.assetsbaseurl+"avatar.jpg",
            //userAvatarImage: this.assetsbaseurl+"user.jpg",

            // Bubble
            bubbleBackground: '#ffffff',
            bubbleBorder: 'solid 1px #E6E6E6',
            bubbleBorderRadius: 14,
            bubbleFromUserBackground: '#005573',
            bubbleFromUserBorder: 'solid 0px #E6E6E6',
            bubbleFromUserBorderRadius: 14,
            bubbleFromUserTextColor: '#ffffff',
            bubbleImageHeight: 300,
            bubbleMaxWidth: 700,
            bubbleMinHeight: 40,
            bubbleMinWidth: 250, // min screen width = 300px, Edge requires 372px (https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/)
            bubbleTextColor: '#000000',

            // Root
            rootHeight: '100%',
            rootWidth: '100%',

            // Visually show spoken text
            showSpokenText: false,           

            // Send box
            hideSendBox: false,
            hideUploadButton: true,
            microphoneButtonColorOnDictate: '#F33',
            sendBoxBackground: 'White',
            sendBoxButtonColor: '#005573',
            sendBoxButtonColorOnDisabled: '#CCC',
            sendBoxButtonColorOnFocus: '#333',
            sendBoxButtonColorOnHover: '#333',
            sendBoxHeight: 40,
            sendBoxTextColor: 'Black',           

            // Suggested actions
            suggestedActionBackground: '#005573',
            suggestedActionBorder: `solid 2px #005573`,
            suggestedActionBorderRadius: 14,
            suggestedActionTextColor: '#ffffff',
            suggestedActionDisabledBackground: 'White',
            suggestedActionDisabledBorder: `solid 2px #E6E6E6`,
            suggestedActionDisabledTextColor: '#000000',
            suggestedActionHeight: 32,

            // Timestamp
            timestampColor: '#292929',            

            // Transcript overlay buttons (e.g. carousel and scroll to bottom)
            transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
            transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
            transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
            transcriptOverlayButtonColor: 'White',
            transcriptOverlayButtonColorOnFocus: 'White',
            transcriptOverlayButtonColorOnHover: 'White',

            // Video
            videoHeight: 270, // based on bubbleMaxWidth, 480 / 16 * 9 = 270

            // Connectivity UI
            connectivityIconPadding: PADDING_REGULAR * 1.2,
            connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
            connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
            connectivityTextSize: 12,
            failedConnectivity: '#C50F1F',
            slowConnectivity: '#EAA300',
            slowConnectivityText: '#5E5E5E',
        };

        window.WebChat.renderWebChat({
            directLine: embeddedBot.directLine,
            userID: embeddedBot.id,
            username: embeddedBot.username,
            styleOptions,
            store
        }, document.getElementById('webchat'));

        //embeddedBot.showWebChat();
    },

    toggleWebChat: function() {
		  if(embeddedBot.webchatshown == false){
            if(embeddedBot.token == ''){
                embeddedBot.getToken(this.tokenurl);
				}
			}
            if (embeddedBot.webchatshown) {
                embeddedBot.hideWebChat()
            }
            else {
                embeddedBot.showWebChat()
            }
            embeddedBot.webchatshown = !embeddedBot.webchatshown;
        },

    showWebChat: function() {
        if ($(window).width()<=500) {
            
            $('body').css('overflow', 'hidden');
        }

        var e = $('#webchatBorder');
        $('#webchatBorder').show(250);
        $(".incentiveBubble").hide();    
    },

    getToken: function(url){

        $.ajax({
            url: url,
            type: 'GET', 
            success: function (data, status) {
                console.log(data);
                embeddedBot.token = data;
                embeddedBot.showBot();
            }
        });
    },
    

    hideWebChat: function() {
        //document.getElementById('webchatBorder').style.display = "none";
        $('#webchatBorder').hide(500);
        

        var b = $('body');
        b.css('overflow', 'initial');

        var e = $('#webchatBorder');

    },


    maximize: function() {
        e = $('#webchatBorder');

        e.css('position','fixed');
        e.animate({
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            margin:0,
            "border-radius":0,
            "box-shadow":"none"
        });

        var webchat = $('#webchat');
        
        webchat.animate({
            width: '100%',
        });

        webchat.css("width", "100%");
        webchat.css("height", "calc(100vh - 37px)");

        var input = $(".main");
        input.animate({
            'border-bottom-left-radius': 0,
            'border-bottom-right-radius': 0
        });

        $('#maximizeIcon').hide();
        $('#minimizeIcon').show();
    },

    minimize: function() {


        var webchat = $('#webchat');

        webchat.animate({
            width: '40vw',
            height: '70vh',
        },{
        complete: function() {
            webchat.css('width','');
            webchat.css('height','');

       

        }});


             
        e = $('#webchatBorder');
        e.css('border-radius', '16px');
        
        
        e.animate({
            bottom: '25px',
            right: '25px',
            margin: 0,
            "box-shadow": "0px 3px 12px 2px rgba(0, 0, 0, 0.6)",
            display:'block',
            width:"40vw",
            height: "70vh"
        },{
        complete: function() {
            e.css('bottom', '');
            e.css('right','');
            e.css('width','');
            e.css('height','');
            e.css('margin','');
            e.css('style', 'display:block');
        }});


        var input = $(".main");
        input.css('border-bottom-left-radius', '16px');
        input.css('border-bottom-right-radius', '16px');

        $('#maximizeIcon').show();
        $('#minimizeIcon').hide();
    },

/*     reload:function() {
            store.dispatch({
                type: 'WEB_CHAT/SEND_EVENT',
                payload: {
                    name: 'restart', 
                    value: {}
                }
            });
        $(".content, .avatar").remove();
        
    } */

    
    
    

}


const store = window.WebChat.createStore({},
    ({ dispatch }) => next => async action => {
        console.log(action);
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
            // if (navigator.geolocation) {
            //     await navigator.geolocation.getCurrentPosition(showPosition);
            //     await sendUserInfo();
            //     sendUserLocationHref();
            // }
            sendUserLocationHref();
        }

        return next(action);
    });
function showPosition(position) {

    store.dispatch({
        type: 'WEB_CHAT/SEND_EVENT',
        payload:
        {
            name: 'user_info_position',
            value: { latitude: position.coords.latitude, longitude: position.coords.longitude }
        }
    });
    console.log("latitude :" + position.coords.latitude + " longitude :" + position.coords.longitude);
}

function sendUserLocationHref() {

    store.dispatch({
        type: 'WEB_CHAT/SEND_EVENT',
        payload:
        {
            name: 'user_info_href',
            value: { href: window.location.href }
        }
    });
    console.log(window.location.href);
}



async function sendUserInfo() {
    $(function () {
        $.getJSON("https://userinfos.azurewebsites.net/", function (json) {
            console.log(json);
            store.dispatch({
                type: 'WEB_CHAT/SEND_EVENT',
                payload:
                {
                    name: 'user_info_ip',
                    value: { ip: json.ip }
                }
            });
        });
    });
}
