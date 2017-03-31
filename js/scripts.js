var userInput = "ServiceWorkerterminationbyatimeouttimerwascanceledbecauseDevToolsisattached"; var a;var k =0;var increment=0;
userInputArray = userInput.split("");
var userOutputArray = [];
for (var i=0;i<9;i++)
{
  for (var j=0;j<8 && k<userInputArray.length;j++)
  {
     a[i][j]=userInputArray[k];
     k++;
  }
}
k=0;
for (var i=0;i<9;i++)
{
  for (var j=0;j<8 && k<userInputArray.length;j++)
  {
     userOutputArray += a[j][i];
     k++;
     increment++;
     if (increment === 5)
     {
       userOutputArray += " ";
       increment = 0;
     }
  }
}
console.log(userOutputArray);
