function add(n1: number,n2: number, showResult: boolean,phrase: string){
    if(showResult){
      console.log(phrase,n1+n2);
    }
    return n1 + n2;
  }
  
  const number1 = 10;
  const number2 = 2.8;
  
  const printResult = true;
  const resultPhrase  = 'Result is: ';
  
  const result = add(number1, number2, printResult,resultPhrase);
  console.log(result);