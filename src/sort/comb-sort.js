// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Comb sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.combSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		var gap = arr.length,
			swap = true;

		while (gap > 1 || swap) {
			if(gap > 1) {
				gap = parseInt(gap / 1.25);
			}

			swap = false;
			var i = 0;
			
			while(i + gap < arr.length) {
				if( cmp(arr[i], arr[i + gap]) ) {
					var temp = arr[i];
					arr[i] = arr[i + gap];
					arr[i + gap] = temp;
					swap = true;
				}
				i++;
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};
