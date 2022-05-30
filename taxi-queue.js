function TaxiQueue() {
	let counter = 0;
	let taxiCounter = 0;

	function joinQueue() {
		counter++; {
			return counter
		}
	}

	function leaveQueue() {
		counter--; {
			return counter
		}
	}

	function joinTaxiQueue() {

	}

	function queueLength() {
		if (counter > 0) {
			return counter;
		}
		
	}

	function taxiQueueLength() {

	}

	function taxiDepart(){

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}