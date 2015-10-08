if ("undefined" == typeof(ImapAclExt)) {
	var ImapAclExt = {};
};
if ("undefined" == typeof(ImapAclExt.Debug)) {
  ImapAclExt.Debug = {
	var_dump : function (x, max, sep, l) {
	l = l || 0;
	max = max || 10;
	sep = sep || ' ';

	if (l > max) {
		return "[WARNING: Too much recursion]\n";
	}

	var
		i,
		r = '',
		t = typeof x,
		tab = '';

	if (x === null) {
		r += "(null)\n";
	} else if (t == 'object') {

		l++;

		for (i = 0; i < l; i++) {
			tab += sep;
		}

		if (x && x.length) {
			t = 'array';
		}

		r += '(' + t + ") :\n";

		for (i in x) {
			try {
				r += tab + '[' + i + '] : ' + this.var_dump(x[i], max, sep, (l + 1));
			} catch(e) {
				return "[ERROR: " + e + "]\n";
			}
		}

	} else {
		if (t == 'string') {
			if (x == '') {
				x = '(empty)';
			}
		}
		r += '(' + t + ') ' + x + "\n";
	}

	return r;

	}
	};
};
