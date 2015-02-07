// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Heapsort algorithm.
 * @param {array} arr Array of items to sort.
 * @param {callback} cmp Optional callback to sort by.
 */
Algorithms.Sort.heapsort = function(arr, cmp) {

	// Default sort comparator
	function comparator(a, b) {
		return a > b;
	}

	// Find the correct place of given element in given max heap
	function heapify(arr, index, heapSize, cmp) {
		var left = 2 * index + 1;
		var right = 2 * index + 2;
		var largest = index;

		if (left < heapSize && cmp(arr[left], arr[index])) {
			largest = left;
		}

		if (right < heapSize && cmp(arr[right], arr[largest])) {
			largest = right;
		}

		if (largest !== index) {
			var temp = arr[index];
			arr[index] = arr[largest];
			arr[largest] = temp;
			heapify(arr, largest, heapSize, cmp);
		}
	}

	// Build the max heap of the array
	function buildMaxHeap(arr, cmp) {
		for (var i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
			heapify(arr, i, arr.length, cmp);
		}

		return arr;
	}

	// Process sorting
	function sort(arr, cmp) {
		cmp = cmp || comparator;
		var size = arr.length,
			temp;

		buildMaxHeap(arr, cmp);

		for (var i = arr.length - 1; i > 0; i -= 1) {
			temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;
			size -= 1;
			heapify(arr, 0, size, cmp);
		}

		return arr;
	}

	return sort(arr, cmp);

};