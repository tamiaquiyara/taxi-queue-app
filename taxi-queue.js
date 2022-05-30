function TaxiQueue() {
	let length = 0;
	let taxiCounter = 0;

	function joinQueue() {
		length++; {
			return length;
		}
	}

	function leaveQueue() {
		if (length>0) {
			return length--;
		}
	}

	function joinTaxiQueue() {
		taxiCounter++; {
			return taxiCounter;
		}
	}

	function queueLength() {
			return length;
		
	}

	function taxiQueueLength() {
		return taxiCounter;
	}

	function taxiDepart(){
		if (length >= 12 && taxiCounter >= 0){
			 taxiCounter--;
			 length = length - 12;
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