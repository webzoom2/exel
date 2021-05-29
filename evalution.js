let a = [];
// let exp = ( 10 + 20 );
function INFIXEVALUATION(exp){
    let ostack = []; // operator stack
    let  vstack = []; // value stack
    for (let i = 0; i < exp.length;i++) {
      let ch = exp.charAt(i);
      let ascii = exp[i].charCodeAt(0);
      console.log(ascii);
      if (ch == ' ') {
        {
          continue;
        }
      }
    //   else if ((ascii >= 65 && ascii <= 90)||(ascii>=97&&ascii<=122)) {
    //     s = "";
    //      while(ascii >= 65 && ascii <= 90||ascii>=97&&ascii<=122){
    //        ch = exp.charAt(i);
    //        if (ascii >= 65 && ascii <= 90||ascii>=97&&ascii<=122){
    //            s=s + ch;
    //            i++;
    //        }     
    //      }
    //      vstack.push(s);
    //  }
     else if (ch >= '0' && ch <= '9') {
        let v = 0;
        let x = 10;
        while (ch >= '0' && ch <= '9') {
          ch = exp.charAt(i);
          if (ch >= '0' && ch <= '9'){
            v = Number(ch - '0') + v * x;
            i++;
          }
        }
        vstack.push(v);
        // System.out.println("" + v);
        i--;
      } else if (ch == '(') {
        ostack.push(ch);
      }
      else if (ch == ')') {
        while (ostack[ostack.length-1] != '(') {
          let op = ostack.pop();
          let val2 = vstack.pop();
          let val1 = vstack.pop();
          
          let res = evaluate(val1, val2, op);
          vstack.push(res);
        }
        ostack.pop(); // this pop is for opening bracket
      } else {
        while (ostack.length > 0 && ostack[ostack.length-1] != '(' &&
        priority(ostack[ostack.length-1]) >= priority(ch)) {
          // process
          let op = ostack.pop();
          let val2 = vstack.pop();
          let val1 = vstack.pop();
          
          let res = evaluate(val1, val2, op);
          vstack.push(res);
        }
        ostack.push(ch);
      }
    }
    
    while (ostack.length > 0) {
      let op = ostack.pop();
      let val2 = vstack.pop();
      let val1 = vstack.pop();
      
      let res = evaluate(val1, val2, op);
      vstack.push(res);
    }
    console.log(vstack[vstack.length-1])
    return vstack[vstack.length-1];
  }
  // code
  function priority(op) {
    if (op == '*' || op == '/') {
      return 2;
    } else if (op == '+' || op == '-') {
      return 1;
    } else {
      return 0;
    }
  }
  
  function evaluate(val1,val2,op) {
    if (op == '*') {
      return val1 * val2;
    } else if (op == '/') {
      return val1 / val2;
    } else if (op == '+') {
      return val1 + val2;
    } else if (op == '-') {
      return val1 - val2;
    } else {
      return 0;
    }
  }
  function stringevaluation( s , exp){
    for (let i = 0; i < exp.length;i++) {
      let ch = exp.charAt(i);
      if (ch == ' '|| ch == '(' || ch == ')' || ch == '+') 
        {
          continue;
        }
          s = s + ch;
        }
        console.log( s ); 
        return s;
      }
  
  //   // infix
  //   public static int infixEvaluation(String exp) {
    //     Stack<Character> ostack = new Stack<>(); // operator stack
    //     Stack<Integer> vstack = new Stack<>(); // value stack
    //     for (int i = 0; i < exp.length();i++) {
      //       char ch = exp.charAt(i);
      
      //       if (ch == ' ') {
        //         {
          //           continue;
          //         }
          //       } else if (ch >= '0' && ch <= '9') {
            //         int v = 0;
            //         int x = 10;
            //         while (ch >= '0' && ch <= '9') {
              //             ch = exp.charAt(i);
              //             if (ch >= '0' && ch <= '9'){
                //           v = (int)(ch - '0') + v * x;
                //           i++;
                //             }
                //         }
                //         vstack.push(v);
                //         System.out.println("" + v);
                //         i--;
                //       } else if (ch == '(') {
                  //         ostack.push(ch);
                  //       }
                  //       else if (ch == ')') {
                    //         while (ostack.peek() != '(') {
                      //           char op = ostack.pop();
                      //           int val2 = vstack.pop();
                      //           int val1 = vstack.pop();
                      
                      //           int res = evaluate(val1, val2, op);
                      //           vstack.push(res);
                      //         }
                      //         ostack.pop(); // this pop is for opening bracket
                      //       } else {
                        //         while (ostack.size() > 0 && ostack.peek() != '(' &&
                        //                priority(ostack.peek()) >= priority(ch)) {
                          //           // process
                          //           char op = ostack.pop();
                          //           int val2 = vstack.pop();
                          //           int val1 = vstack.pop();
                          
                          //           int res = evaluate(val1, val2, op);
                          //           vstack.push(res);
                          //         }
                          //         ostack.push(ch);
                          //       }
                          //     }
                          
                          //     while (ostack.size() > 0) {
                            //       char op = ostack.pop();
                            //       int val2 = vstack.pop();
                            //       int val1 = vstack.pop();
                            
                            //       int res = evaluate(val1, val2, op);
                            //       vstack.push(res);
                            //     }
                            
                            //     return vstack.peek();
                            //   }
                            // else if (ascii >= 65 && ascii <= 90||ascii>=97&&ascii<=122) {
                            //    s = "";
                            //     while(ascii >= 65 && ascii <= 90||ascii>=97&&ascii<=122){
                            //       ch = exp.charAt(i);
                            //       if (ascii >= 65 && ascii <= 90||ascii>=97&&ascii<=122){
                            //           s=s + ch;
                            //           i++;
                            //       }     
                            //     }
                            //     vstack.push(s);
                            // }