function climbStairs(n: number, memo: Record<number, number> = {}): number {
   if(n <= 2) return n;

   if(memo[n]) return memo[n];

   memo[n] = climbStairs(n - 1) + climbStairs(n - 2);

   return memo[n]
   
};


climbStairs(3);

