// write your DOM code here.


// DOM element references
const join = document.querySelector(".join_queue");
const leave = document.querySelector(".leave_queue");
const taxiJoin = document.querySelector(".join_taxi_queue");
const taxiLeave = document.querySelector(".depart");

const passengerCount = document.querySelector(".passenger_queue_count");
const taxiCount = document.querySelector(".taxi_queue_count")
// create Factory Function instance

const currentPassengers = localStorage.getItem("passenger_count");
const currentTaxis = localStorage.getItem("taxi_join");

const taxiQueue = TaxiQueue();

// DOM events
join.addEventListener("click", function(){
    // alert(join);
    taxiQueue.joinQueue()
    passengerCount.innerHTML = taxiQueue.queueLength();

    localStorage.setItem("passenger_count", taxiQueue.queueLength());
});

leave.addEventListener("click", function(){
    // alert(leave);
    taxiQueue.leaveQueue()
    passengerCount.innerHTML = taxiQueue.queueLength();

    localStorage.setItem("passenger_count", taxiQueue.queueLength());
});

taxiJoin.addEventListener("click", function(){
    // alert(taxiJoin);
    taxiQueue.joinTaxiQueue()
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();

    localStorage.setItem("taxi_join", taxiQueue.taxiQueueLength());
});

taxiLeave.addEventListener("click", function(){
    // alert(taxiLeave);
    taxiQueue.taxiDepart()
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
    passengerCount.innerHTML = taxiQueue.queueLength();

    localStorage.setItem("taxi_join", taxiQueue.taxiQueueLength());
    localStorage.setItem("passenger_count", taxiQueue.queueLength());
})

