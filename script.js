// var saySomething = {
//     message: function(){
//         console.log("hello!")
//     },
//     speak: function (){
//         for (var i=0; i<tweets.length;i++){
//             console.log("Name:", tweets[i].user.screen_name);
//             console.log("Message:", tweets[i].text);
//             console.log("Source:", tweets[i].source);
//         }

//     }
// };

// document.querySelector('#root').addEventListener('click',saySomething.message);
// document.querySelector('#replies').addEventListener('click',saySomething.speak);
// document.querySelector('#media').addEventListener('click',saySomething.message);
// document.querySelector('#likes').addEventListener('click',saySomething.speak);

class List extends React.Component {
    render() {
        return (
          <ul>
            <img src={tweets[0].user.profile_image_url}/>
            <li>{tweets[0].user.screen_name}</li>
            <li>{tweets[0].text}</li>
          </ul>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);