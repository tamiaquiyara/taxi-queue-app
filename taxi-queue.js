function TaxiQueue() {
	let length = 0;
	let taxiCounter = 0;

	function joinQueue() {
		length++; {
			return length;
		}
	}

	function leaveQueue() {
		length--; {
			return length;
		}
	}

	function joinTaxiQueue() {
		taxiCounter++; {
			return taxiCounter;
		}
	}

	function queueLength() {
		if (length > 0) {
			return length;
		}
		
	}

	function taxiQueueLength() {
		return taxiCounter;
	}

	function taxiDepart(){
		if (length <= 12){
			return length--;
		}
		taxiCounter--; {
			return taxiCounter;
		}
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