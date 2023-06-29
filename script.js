function clickButton(val){
  document.getElementById('screen').value+=val

}
function clearAll(){
  document.getElementById('screen').value=''
}
function Answer(){
 var text = document.getElementById('screen').value
 var result = eval(text)
 document.getElementById('screen').value=result
}