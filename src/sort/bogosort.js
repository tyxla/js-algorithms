// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Bogosort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.bogosort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Randomize array elements
	function shuffle(arr) {
		for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	};

	// Whether the array is sorted
	function isSorted(arr, cmp){
		cmp = cmp || comparator;

		for(var i = 1; i < arr.length; i++) {
			if ( cmp(arr[i - 1], arr[i]) ) { 
				return false; 
			}
		}
		
		return true;
	}

	// Process sorting
	function sort(arr) {
		var sorted = false;

		while(sorted == false){
			arr = shuffle(arr);
			sorted = isSorted(arr);
		}

		return arr;
	}

	return sort(arr, cmp);

};