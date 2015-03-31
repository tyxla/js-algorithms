// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Merge sort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.mergeSort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		
		var i, j, k,
			firstHalf,
			secondHalf,
			arr1,
			arr2;
 
		if (arr.length > 1) {
			firstHalf = Math.floor(arr.length / 2);
			secondHalf = arr.length - firstHalf;
			arr1 = [];
			arr2 = [];

			for (i = 0; i < firstHalf; i++) {
				arr1[i] = arr[i];
			}

			for(i = firstHalf; i < firstHalf + secondHalf; i++) {
				arr2[i - firstHalf] = arr[i];
			}

			arr1 = sort( arr1, cmp );
			arr2 = sort( arr2, cmp );

			i = j = k = 0;

			while(arr1.length != j && arr2.length != k) {
				if ( cmp( arr1[j], arr2[k] ) <= 0 ) {
					arr[i] = arr1[j];
					i++;
					j++;
				} else {
					arr[i] = arr2[k];
					i++;
					k++;
				}
			}

			while (arr1.length != j) {
				arr[i] = arr1[j];
				i++;
				j++;
			}

			while (arr2.length != k) {
				arr[i] = arr2[k];
				i++;
				k++;
			}
		}

		return arr;
	}

	return sort(arr, cmp);

};