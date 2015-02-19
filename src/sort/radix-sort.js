// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Radix sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {bool} order Sort order. True for ascending, false otherwise. Default: true (ascending).
 */
Algorithms.Sort.radixSort = function(arr, order) {

	// Process sorting
	function sort(arr, order) {
	    var result = new Array(arr.length),
	    	workingCopy = new Array(10),
	    	toResult = true,
	    	d = 0,
	    	digits, 
	    	i, 
	    	j, 
	    	index;

		if (typeof order === 'undefined') {
			order = true;
		}

        for (i = 0; i < arr.length; i++) {
            digits = arr[i].toString().length;
            if (digits > d) d = digits;
        }

	    for (i = 1; i <= d; i++) {
	        for (j = 0; j < 10; j++) {
	        	workingCopy[j] = 0;
	        }

	        for (j = 0; j < arr.length; j++) {
	        	var value = toResult ? arr[j] : result[j];
	        	digits = value.toString();

	        	if (digits.length < i) {
	        		workingCopy[0]++;
	        	} else {
	        		workingCopy[digits[digits.length - i]]++;
	        	}
	        }

	        if (order) {
	        	for (j = 1; j < workingCopy.length; j++) {
	        		workingCopy[j] = workingCopy[j] + workingCopy[j - 1];
	        	}
	        } else {
	        	for (j = workingCopy.length - 2; j >= 0; j--) {
	        		workingCopy[j] = workingCopy[j] + workingCopy[j + 1];
	        	}
	        }

	        for (j = arr.length - 1; j >= 0; j--) {
	        	digits = toResult ? arr[j].toString() : result[j].toString();

	        	if (digits.length < i) {
	        		index = workingCopy[0] - 1;
	        		workingCopy[0]--;
	        	} else {
	        		index = workingCopy[digits[digits.length - i]] - 1;
	        		workingCopy[digits[digits.length - i]]--;
	        	}
	        	
	        	toResult ? result[index] = arr[j] : arr[index] = result[j];
	        }
	        
	        toResult = !toResult;
	    }
	    return toResult ? arr : result;

	}

	return sort(arr, order);

};
