// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Adaptive sort algorithm.
 * @param {array} arr Array of items to sort.
 */
Algorithms.Sort.adaptiveSort = function(arr) {

	// Given two non-empty ordered arrays (chains), returns a new 
	// array containing an ordered union of the input chains.
	function merge(left, right) {
		var left_len = left.length,
			right_len = right.length,
			left_val,
			right_val,
			result;

		if (left[left_len - 1] <= (right_val = right[0])) {
			result = left.concat(right);
		} else if (right[right_len - 1] < (left_val = left[0])) {
			result = right.concat(left);
		} else {
			result = new Array(left_len + right_len);
			var k = 0, h = 0;
			
			while (true) {
				if (right_val < left_val) {
					result[k + h] = right_val;
					if (++h < right_len) {
						right_val = right[h];
					} else {
						while (k < left_len) {
							result[k + h] = left[k++];
						}
						break;
					}
				} else {
					result[k + h] = left_val;
					if (++k < left_len) {
						left_val = left[k];
					} else {
						while (h < right_len) {
							result[k + h] = right[h++];
						}
						break;
					}
				}
			}
		}

		left.length = 0;
		right.length = 0;
		return result;
	}

	// Given an array and offset equal to indexOf(elA), find    
	// the (indexOf(elZ) + 1) of an element elZ in the array,   
	// such that all elements elA..elZ form a non-strict 
	// forward-ordered chain.
	function find_fchain(arr, offset, limit) {
		var tmp, succ;

		for (tmp = arr[offset];
			++offset < limit && tmp <= (succ = arr[offset]);
			tmp = succ
			) {}

		return offset;
	}

	// Given an array and offset equal to indexOf(elA), find   
	// the (indexOf(elZ) + 1) of an element elZ in the array,  
	// such that all elements elA..elZ form a strict 
	// reverse-ordered chain.
	function find_strict_rchain(arr, offset, limit) {
		var tmp, succ;

		for (tmp = arr[offset];
			++offset < limit && (succ = arr[offset]) < tmp;
			tmp = succ
			) {}

		return offset;
	}

	// Return an array of chain arrays, expecting data
	// in reverse order
	function chain_unit(arr) {
		var terminus,
			len = arr.length,
			tmp = [],
			f = find_strict_rchain;

		for (var k = 0; k < len; k = terminus) {

			terminus = f(arr, k, len);
			if (terminus - k > 1) {
				tmp.push(
					(f === find_strict_rchain) ? 
					arr.slice(k, terminus).reverse() : 
					arr.slice(k, terminus)
					);
			} else if (f === find_strict_rchain) {
				tmp.push(arr.slice(k, ++terminus));
				f = find_fchain;
			} else {
				tmp.push(arr.slice(k, ++terminus).reverse());
				f = find_strict_rchain;
			}
		}
		return tmp;
	}

	// Join all chain arrays
	function chain_join(tmp) {
		var j = tmp.length;

		if (j < 1) { 
			return tmp; 
		}

		for (; j > 1; tmp.length = j) {
			var k, lim = j - 2;

			for (j = 0, k = 0; k < lim; k = j << 1) {
				tmp[j++] = merge(tmp[k], tmp[k + 1]);
			}

			tmp[j++] = (k > lim) ? tmp[k] : merge(tmp[k], tmp[k + 1]);
		}

		var result = tmp.shift();
		return result;
	}

	// Process sorting
	function sort(arr) {
		return chain_join(chain_unit(arr));
	}

	return sort(arr);

};