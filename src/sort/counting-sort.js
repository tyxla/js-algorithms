// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Counting sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.countingSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		}
		return 0;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		var min = arr[0],
			max = arr[0],
			counts = [], 
			newArr = [],
			i, j, k;

		for(i = 0; i < arr.length; i++) {
			if ( cmp(min, arr[i]) > 0 ) {
				min = arr[i];
			} else if ( cmp(max, arr[i]) < 0 ) {
				max = arr[i];
			}
		}

		for(i = 0; i < max - min + 1; i++) {
			counts[i] = 0;
		}
		
		for(i = 0; i < arr.length; i++) { 
			counts[arr[i] - min]++;
		}

		k = 0;
		
		for(i = 0; i < counts.length; i++) { 
			for(j = 0; j < counts[i]; j++) { 
				newArr[k++] = i + min;
			}
		}

		return newArr;
	}

	return sort(arr, cmp);

};