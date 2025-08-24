#include <stdio.h>

int main(void) {
	// 各型1つが何byte占めるのかを表示
	// sizeof演算子の返り値の型はsize_t型なのでprintfでは%zuを使用
	printf("%zu\n", sizeof(int)); // 4
	printf("%zu\n", sizeof(char)); // 1
	printf("%zu\n", sizeof(long long)); // 8
	
	// 各要素がint型
	// 要素数5
	// 要素の値が先頭から10, 20, 30, 40, 50
	// 上記3つを満たす配列を定義
	int ary[5] = {10, 20, 30, 40, 50};

	// aryの4番目の要素を二つの種類で表示
	printf("%d\n", ary[3]); // 40
	printf("%d\n", *(ary+3)); // 40

	return 0;
}