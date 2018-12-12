let scores = [0 , 0],
    roundScore = 0,
    activePlayer = 0;
    document.querySelector('#current-'+ activePlayer).textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.btn-roll').addEventListener('click', function (){
        let dice = Math.floor(Math.random() * 6) + 1;
        let id = 'dice-' + dice + '.png';
        
        document.querySelector('.dice').src = id;

        if( dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'block';
            
        }
        else {
            nextPlayer();
        }
    });


document.querySelector('.btn-hold').addEventListener('click', function(){
        //ADD Current SCORE to GLOBAL SCORE:
        scores[activePlayer] += roundScore;
        //Update the UI:
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
        //Check if player won the game:
        let max = 100;
        if(scores[activePlayer] >= max) {
            document.querySelector('#current-'+ activePlayer).textContent = max;
            document.querySelector('#score-0').textContent = '0';
            document.querySelector('#score-1').textContent = '0';
            document.querySelector('#btn-txt').style.display="block";
            document.querySelector('.btn-roll').style.display="none";
            document.querySelector('.btn-hold').style.display="none";
            document.querySelector('#name-'+activePlayer).textContent = "WINNER!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            return;
        } 
        else{
            nextPlayer();
        }
    })

    document.querySelector('.btn-new').addEventListener('click', function(){
        restart();
    })
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }

    function restart(){
        scores = [0 , 0];
        roundScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;
        document.querySelector('#btn-txt').style.display="none";
        document.querySelector('.btn-roll').style.display="block";
        document.querySelector('.btn-hold').style.display="block";
        document.querySelector('#name-0').textContent = "Player 1";
        document.querySelector('#name-1').textContent = "Player 2";
    }
















