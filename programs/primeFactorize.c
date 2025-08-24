#include <stdio.h>
#include <stdlib.h>

void prime_factorize(int number) {
	for (int i=2; i*i<=number; i++) {
		while (number%i == 0) {
			printf(" %d", i);
			number /= i;
		}
	}
	if (number > 1) printf(" %d", number);
	putchar(10);
}

int main(void) {
	int n; scanf("%d", &n);
	printf("%d:", n);
	prime_factorize(n);

	return 0;
}