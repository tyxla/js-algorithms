// Using strict mode
'use strict';

// Define our globals
window.Algorithms = window.Algorithms || {};
Algorithms.Sort = Algorithms.Sort || {};

/**
 * Flash sort algorithm.
 * @param {array} arr Array of items to sort.
 */
Algorithms.Sort.flashSort = function(arr) {

	// Process sorting
	function sort(arr) {
		var n = arr.length,
			i = 0, j = 0, k = 0, t,
			m = ~~( n * 0.125 ),
			a_nmin = arr[ 0 ],
			nmax = 0,
			nmove = 0,
			l = new Array(m);

		for ( i = 0; i < m; i++ ) {
			l[ i ] = 0;
		}

		for ( i = 1; i < n; ++i ) {
			var a_i = arr[ i ];

			if ( a_i < a_nmin ) { 
				a_nmin = a_i; 
			}

			if ( a_i > arr[ nmax ] ) { 
				nmax = i; 
			}
		}

		var a_nmax = arr[ nmax ];

		if ( a_nmin === a_nmax) { 
			return arr; 
		}

		var c1 = ( m - 1 ) / ( a_nmax - a_nmin );

		for ( i = 0; i < n; ++i ) {
			++l[ ~~( c1 * ( arr[ i ] - a_nmin ) ) ];
		}

		for ( k = 1; k < m; ++k ) {
			l[ k ] += l[ k - 1 ];
		}

		var hold = a_nmax;
		arr[ nmax ] = arr[ 0 ];
		arr[ 0 ] = hold;

		var flash;
		j = 0;
		k = m - 1;
		i = n - 1;

		while ( nmove < i ) {
			while ( j > ( l[ k ] - 1 ) ) {
				k = ~~( c1 * ( arr[ ++j ] - a_nmin ) );
			}

            if (k < 0) { 
            	break; 
            }

            flash = arr[ j ];

            while ( j !== l[ k ] ) {
            	k = ~~( c1 * ( flash - a_nmin ) );
            	hold = arr[ t = --l[ k ] ];
            	arr[ t ] = flash;
            	flash = hold;
            	++nmove;
            }
        }

        for( j = 1; j < n; ++j ) {
        	hold = arr[ j ];
        	i = j - 1;

        	while( i >= 0 && arr[i] > hold ) {
        		arr[ i + 1 ] = arr[ i-- ];
        	}
        	
        	arr[ i + 1 ] = hold;
        }

		return arr;
	}

	return sort(arr);

};