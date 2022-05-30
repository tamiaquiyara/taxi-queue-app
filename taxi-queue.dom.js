// write your DOM code here.


// DOM element references
const join = document.querySelector(".join_queue");
const leave = document.querySelector(".leave_queue");
const taxiJoin = document.querySelector(".join_taxi_queue");
const taxiLeave = document.querySelector(".depart");

const passengerCount = document.querySelector(".passenger_queue_count");
const taxiCount = document.querySelector(".taxi_queue_count")
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
join.addEventListener("click", function(){
    alert(join);
    passengerCount.innerHTML = taxiQueue(join.value);
});

leave.addEventListener("click", function(){
    alert(leave);
    passengerCount.innerHTML = taxiQueue(leave.value);
});

taxiJoin.addEventListener("click", function(){
    alert(taxiJoin);
    taxiCount.innerHTML = taxiQueue(taxiJoin.value);
});

taxiLeave.addEventListener("click", function(){
    alert(taxiLeave);
    
})

