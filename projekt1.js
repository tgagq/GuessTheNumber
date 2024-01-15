let score=20;
let highscore=0;
//metoda per ndryshimin e numrit sa here gjejme filestarin.
let secretNumber= Math.trunc(Math.random() *20)+1;
//shkurtimi i shprehjes se me poshtme
const displayM=function(message){
    document.querySelector('.message').textContent=message;
}
    //fuksioni qe pritet te kryhet pasi shtyper butoni: check .
    document.querySelector('.check').addEventListener('click',
    function () {
        //numri qe shkruhet te meret numer dhe jo string.
        const guess = Number(document.querySelector('.guess').value);
        //kushti nese sehste numer nese e gjen numrin dhe nese nuk e gjen dhe rezultati.
        if (!guess) {
            displayM('Write a number!');

        } else if (guess === secretNumber) 
        {
                displayM('Correct answer !');
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#606347';
                document.querySelector('.number').textContent = secretNumber;
            if (score > highscore) 
            {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess !== secretNumber) {
            if(score>1){
                displayM(guess > secretNumber ? 'too high!' : 'too low!');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                displayM('You lost the game!');
                document.querySelector('.score').textContent=0;
            }
        }

    }
);

document.querySelector('.again').addEventListener('click', function()
{
    score=20;
    secretNumber=Math.trunc(Math.random()* 20)+1;
    displayM('Start guessing...!');
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value=" ";//kjo do ta ktheje vleren bosh.
});
