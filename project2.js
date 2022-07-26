let abc = [12, 45, 67, 89, 90, 34, 35, 55]
for (let i in abc){
    if (abc[i] % 5 == 0){
        console.log(abc[i])
    }
}