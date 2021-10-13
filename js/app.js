//data setup to recieve
const bidder1Value = document.getElementById('bidValue1');
const bidder2Value = document.getElementById('bidValue2');
const bidpush1 = document.getElementById('bidCommit1');
const bidpush2 = document.getElementById('bidCommit2');
const log = document.getElementById('log');
let leader = document.getElementById('winningBid');
let winningBid;
if(localStorage.getItem("highNumber")){
    winningBid = JSON.parse(localStorage.getItem("highNumber"));
}else {
    winningBid = 0;
}



//placing bids
bidpush1.onclick = function(){
    if(bidder1Value.value > winningBid){
        winningBid = Number(bidder1Value.value);
    log.innerHTML += "bidder One Bids " + bidder1Value.value + "<br>";
    leader.innerHTML = "<h2>Bidder One Leads With A Bid Of " + winningBid + "$</h2>";
    setStorage();
    setLogStorage();
    updateHighNumber();
    bidder1Value.value = null;
    }else{
        bidder1Value.value = null;
        alert("bid more than the bid leader to take the lead")
    }
}

bidpush2.onclick = function(){
    if(bidder2Value.value > winningBid){
        winningBid = Number(bidder2Value.value);
    log.innerHTML += "bidder Two Bids " + bidder2Value.value + "<br>";
    leader.innerHTML = "<h2>Bidder Two Leads With A Bid Of " + winningBid + "$</h2>";
    setStorage();
    setLogStorage();
    updateHighNumber();
    bidder2Value.value = null;
    }else{
        bidder2Value.value = null;
        alert("bid more than the bid leader to take the lead")
    }
}

//setting up local storage
function setStorage(){
    localStorage.setItem('winningBid', leader.innerHTML);
}

function checkStorage(){
if(localStorage.getItem('winningBid')){
    leader.innerHTML = localStorage.getItem('winningBid'); 
}}
checkStorage();

//log storage
function setLogStorage(){
    localStorage.setItem('log', log.innerHTML)
}
function checkLogStorage(){
    if(localStorage.getItem('log')){
        log.innerHTML = localStorage.getItem('log');
    }
}
checkLogStorage();
//highNumber local storage
function updateHighNumber(){
    localStorage.setItem('highNumber', winningBid);
}