#include <iostream>

using namespace std;

int f (int &x, int c) {
    c = c - 1; 
    if (c == 0) return 1; 
    x = x + 1; 
    return f(x,c) * x;
}
	
int fun (int n) { 
    int x = 1, k; 

    if (n==1) return x;
    for (k = 1; k < n; ++k) {
        x = x + fun(k) * fun(n-k); 
    }

    return x; 
}

int main () {
    int p = 5;
    int result = fun(5);
    printf("result %d", result);
}