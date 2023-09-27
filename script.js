function forUpper(){
    let text1=document.getElementById('text1')
    let forUp=text1.value;
    console.log(forUp.toUpperCase())
    
    text1.value=text1.value.toUpperCase()
}
function forLower(){
    let text1=document.getElementById('text1')
    
    text1.value=text1.value.toLowerCase()
}
function textChange(){
    let sp1=document.getElementById('sp1');
    let sp2=document.getElementById('sp2');
    let para=document.getElementById('para');
    let text1=document.getElementById('text1')
    console.log(text1.value.length)
    let forWord=text1.value.split(" ")
    console.log(forWord.length)
    
    sp2.innerHTML=text1.value.length
    para.innerHTML=text1.value
}