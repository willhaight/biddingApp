//data setup to recieve
const bidder1Value = document.getElementById('bidValue1');
const bidder2Value = document.getElementById('bidValue2');
const bidpush1 = document.getElementById('bidCommit1');
const bidpush2 = document.getElementById('bidCommit2');
const log = document.getElementById('log');
const leader = document.getElementById('winningBid');
let winningBid = 0;


//placing bids
bidpush1.onclick = function(){
    if(bidder1Value.value > winningBid){
        winningBid = Number(bidder1Value.value);
    log.innerHTML += "bidder One Bids " + bidder1Value.value + "<br>";
    leader.innerHTML = "<h2>Bidder One Leads With A Bid Of " + winningBid + "$</h2>";
    }else{
        alert("bid more than the bid leader to take the lead")
    }
}

bidpush2.onclick = function(){
    if(bidder2Value.value > winningBid){
        winningBid = Number(bidder2Value.value);
    log.innerHTML += "bidder Two Bids " + bidder2Value.value + "<br>";
    leader.innerHTML = "<h2>Bidder Two Leads With A Bid Of " + winningBid + "$</h2>";
    }else{
        alert("bid more than the bid leader to take the lead")
    }
}