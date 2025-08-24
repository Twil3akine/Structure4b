#include <stdio.h>
#include <stdlib.h>

long long mod_pow(long long base, long long exp, long long mod) {
	if (exp == 0) return 1;
	else if (exp < 0) fprintf(stderr, "exponent is under 0.");
	else {
		long long result = 1;
		while (exp) {
			if (exp & 1 == 1) result = (result*base) % mod;
			base = (base*base) % mod;
			exp >>= 1;
		}
		return result;
	}
}



int main(void) {
	long long m, n; scanf("%lld%lld", &m, &n);
	long long mod = 1000000007;

	printf("%lld\n", mod_pow(m, n, mod));
}