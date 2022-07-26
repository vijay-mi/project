for (let i = 1; i <= 50; i++) {
         let abc = false
         for (let j = 2; j < i; j++) {
             if (i % j == 0) {
                 abc = true
                 break
             }
         }
         if (i > 1 && abc == 0) {
            console.log(i)
         }
     }