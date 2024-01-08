# include <stdio.h>
int main() {
    char name[20];
    int n;
    float amount;

    printf("enter the name of consumer: ");
    scanf("%s",name);

    printf("enter the number of units consumed: ");
    scanf("%d",&n);

    if (n<=200) {
        amount = n*80;
    }

    else if (n>200 && n<=300) {
        amount = 200 * 80;
        amount = amount + (n-200)*90;
    }
    
    else {
        amount = (n-300) * 100;
        amount = amount + 200 * 80;
        amount = amount + 100 * 90;
    }

    amount = amount/100;
    amount = amount + 100;

    if (amount>400) {
        amount = amount + amount * 15/100;
    }

    printf("total amount to be paid is = %2f Rs \n",amount);

    return 0;
}