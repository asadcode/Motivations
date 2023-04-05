// var num = parseInt(Math.random() * quotes.length);
var btn = document.querySelector('.button')
// console.log(quotes[num]);
var index = 0;
// function changeColors(){
//     var colors = ["red","blue", "orange", "yellow" , "green", "purple"];
//     document.getElementsByTagName("body")[0].style.background = colors[index++];

//     if(index > colors.length - 1){
//         index = 0;
//     }
// }
var quote = document.querySelector('#quote');
var randomQuotes = ['It does not mater how slowly you go as long as you do not stop (Jon smith).', 
                    'Life is really simple, but we insist on making it complicated (Lara croft).', 
                    'Only the wisest and stupidest of men never change (Karter John).', 
                    'Wherever you go, go with all your heart (Wrat Tomson). ', 
                    'Choose a job you love, and you will never have to work a day in your life. (Suran Chopra)', 
                    'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. (Lionel Messi )', 
                    'Our greatest glory is not in never falling, but in rising every time we fall. (David Ewpolatov)', 
                    'Everything has beauty, but not everyone sees it. (Ricardo Kaka)', 
                    'Silence is a true friend who never betrays (Ronaldinho Nazzario).', 
                    'By three methods we may learn wisdom: first, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest (Pele R.I.P).'];

function changeQuotes() {
  var i = parseInt((Math.random() * randomQuotes.length));
           quote.textContent = randomQuotes[i];
           var colors = ["red","blue", "orange", "yellow" , "green", "purple"];
           document.getElementsByTagName("body")[0].style.background = colors[index++];
           if(index > colors.length - 1){
               index = 0;
           }
        
}


changeQuotes();