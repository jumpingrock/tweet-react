

var saySomething = {
    message: function(){
        console.log("hello!")
    },
    speak: function (){
        for (var i=0; i<tweets.length;i++){
            console.log("Name:", tweets[i].user.screen_name);
            console.log("Message:", tweets[i].text);
            console.log("Source:", tweets[i].source);
        }

    }
};

document.querySelector('#root').addEventListener('click',saySomething.message);
document.querySelector('#replies').addEventListener('click',saySomething.speak);
document.querySelector('#media').addEventListener('click',saySomething.message);
document.querySelector('#likes').addEventListener('click',saySomething.speak);