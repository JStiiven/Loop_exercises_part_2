for (let number = 1; number <= 50; number++){
    if(number % 3 == 0 && number % 5 == 0){
        console.log(number , "FizzBuzz")
    }else if(number % 5 == 0){
        console.log(number , "buzz");
    }else if(number % 3 == 0){
        console.log(number ,"fizz");
    }
}