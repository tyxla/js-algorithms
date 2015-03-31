// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Selection sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.selectionSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		
		var i, j, tmp, tmp2;

		for (i = 0; i < arr.length - 1; i++) {
			tmp = i;

			for (j = i + 1; j < arr.length; j++) {
				if ( cmp(arr[tmp], arr[j]) ){
					tmp = j;
				}
			}
			
			if(tmp != i){
				tmp2 = arr[tmp];
				arr[tmp] = arr[i];
				arr[i] = tmp2;
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};