const cpHand = document.getElementById('cpHand');
const log = document.getElementById('log');
const gameStart = document.getElementById('gameStart');


// 相手の手
cpHand.textContent = '相手の手:';

// 結果
log.textContent = '結果:';


// 決定ボタン
gameStart.addEventListener('click', function() {
    const mystrNum = document.getElementById('myHand').value;
    const myNum = parseInt(mystrNum);
    const cpNum = Math.floor(Math.random() * 3);
    
    //自分の手がグーの時
    if (myNum === 0) {
        // 相手の手がグー
        if (cpNum === 0) {
            cpHand.textContent = '相手の手:グー';
            log.textContent = 'あいこ';
        // 相手の手がチョキ
        } else if (cpNum === 1) {
            cpHand.textContent = '相手の手:チョキ';
            log.textContent = 'あなたの勝ち';
        // 相手の手がパー
        } else {
            cpHand.textContent = '相手の手:パー';
            log.textContent = 'あなたの負け';
        }
    }
    // 自分の手がチョキの時
    else if (myNum === 1) {
        // 相手の手がグー
        if (cpNum === 0) {
            cpHand.textContent = '相手の手:グー';
            log.textContent = 'あなたの負け';
        // 相手の手がチョキ
        } else if (cpNum === 1) {
            cpHand.textContent = '相手の手:チョキ';
            log.textContent = 'あいこ';
        // 相手の手がパー
        } else {
            cpHand.textContent = '相手の手:パー';
            log.textContent = 'あなたの勝ち';
        }
    } 
    // 自分の手がパー
    else if (myNum === 2) {
        // 相手の手がグー
        if (cpNum === 0) {
            cpHand.textContent = '相手の手:グー';
            log.textContent = 'あなたの勝ち';
        // 相手の手がチョキ
        } else if (cpNum === 1) {
            cpHand.textContent = '相手の手:チョキ';
            log.textContent = 'あなたの負け';
        // 相手の手がパー
        } else {
            cpHand.textContent = '相手の手:パー';
            log.textContent = 'あいこ';
        }        
    }
});