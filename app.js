/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

$(document).ready(function(){
    
    
    
    for(var i = 0; i < data.length; i++){
        
        var word = data[i].word_en;
        var sol = data[i].word_de;
        $("li").addClass("current");
        $(".cards").append(tmpl.replace("WORD", word).replace("ID",i));
        
        $(".cards").on("click", "li", function(){
            
            $(".cards").append(tmpl.replace("SOLUTION", sol).replace("ID",i));
        
        });
        
        
    }


});







