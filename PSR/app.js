var score = 0;
var playerChoice;

var readable = {
    '0': 'Grass',
    '1': 'Fire',
    '2': 'Water'
};

var cpuChoice = {
    init: function(){
        this.store = Math.floor(Math.random() *3);
        this.text = readable[this.store];
    },
    store :'',
    text :'',
};

cpuChoice.init();

var order = [0,1,2,0];

var chooseWinner = function(player,cpu){
    if(order[player] === order[cpu]){
        return 'The game is a tie! Try again?';
    }
    if(order[player] === order[cpu + 1]){
        score ++;
        return 'You Won!!!';
    }else{
        score --;
        return 'You LOST!';
    }
};

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos){
    tag.addEventListener('click', function() {
        playerChoice = pos;
        cpuChoice.init();
        paragraph.innerText = 'The Computer chose' + cpuChoice.text;
        paragraph.innerText += '\n' + chooseWinner(playerChoice,cpuChoice.store);
        paragraph.innerText += '\n' + 'Score: ' + score;
    });
};

var images = {
    tags: document.getElementsByTagName('img'),
    init : function(){
        for (var step = 0 ; step < this.tags.length; step ++){
            assignClick(this.tags[step],step);
        }
    }
};



images.init();