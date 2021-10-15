function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    let valitator = str.split("").reverse().join("")
  
    if(valitator === str){
      return true;
    } else {
      return false
    }
  }
  
  
  palindrome("eye");