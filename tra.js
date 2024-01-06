function trapecio(){
  let baseM=Number(document.getElementById('B1').value);
  let bMenor=Number(document.getElementById('B2').value);
  let altura=Number(document.getElementById('H').value);
  let res=((baseM+bMenor)*altura)/2;
  document.getElementById('A').value=res;
  

}