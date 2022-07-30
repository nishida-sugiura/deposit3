var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        
        
        
        var textarea1 = $('textArea[name="textarea"]').val();
        
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        
        var [price1,price2,price3,price4,price5,price6] = [400,200,500,500,800,1000];    //　メダカの値段 １．spread sheet medaka、２．の値と一致させてください
        
       
        
      
 msg =["【deposit id】"+ textarea1]


let ppn=[]

       let sum_char = Number(num1*price1)+Number(num2*price2)+Number(num3*price3)+Number(num4*price4)+Number(num5*price5)+Number(num6*price6);
       
    //  msg = msg + ["代金合計：" + sum_char + "円"　]  + "\n"+ "============================="+ "\n"
    //  msg = msg + ["受取日：" + daytime] ;

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});





