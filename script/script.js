
$(document).ready(function(){
    
    $(function(){
        var includes = $('[data-include]');
        jQuery.each(includes, function(){
          var file = 'data/' + $(this).data('include') + '.html';
          $(this).load(file);
        });
    });
     
    $.fn.extend({
        toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
        }
    }); 
 

    $("#menuBut").click(function(){
        $("#menu").toggle();
        $("#menuBut").toggleClass("but2Sel");
        }); 
    
    $("#chapBut").click(function(){
        $( ".anot" ).removeClass("seeAnot");
        $("h1, h2, h3").show();
        $("#lobagola").hide();
        $("#text p").hide();
        $(".tsoagl").hide();
        $("#chapBut").addClass("butSel");
        $("#anotBut").removeClass("butSel");
        $("#textBut").removeClass("butSel");
        });
    
    $("#textBut").click(function(){
        $("#text p").show();
        $( ".anot" ).removeClass("seeAnot");
        $("h1, h2, h3").show();
        $(".tsoagl").hide();
        $("#textBut").addClass("butSel");
        $("#anotBut").removeClass("butSel");
        $("#chapBut").removeClass("butSel");
        });
    
    $("#anotBut").click(function(){
        $( ".anot" ).show();
        $( ".anot" ).addClass("seeAnot");
        $("#text > :not(.anot)").hide();
        $(".tsoagl").show();
        $("h1").show();
        $("#chap1,#chap2,#chap3,#chap6,#chap7,#chap12,#chap18,#chap21").hide();
        $("#lobagola").hide();
        $("#anotBut").addClass("butSel");
        $("#chapBut").removeClass("butSel");
        $("#textBut").removeClass("butSel");
        });
    
    $("#libBut").click(function(){
        $(".objBox").toggle();
        $("#lmenuBut").toggle();
        $("#libBut").toggleClass("butSel");
        $("#storyBut").removeClass("butSel");
        });
    
    $("#clear").click(function(){
        $("#libtext").empty();
        $("#libtext").removeClass("bor");
        $("#clear").hide();
        });
    
    $("#workBut").click(function(){
        $("#workBox").toggle();
        $("#wMenuBox").toggle();
        $("#diaryF").toggle();
        $("#workBut").toggleClass("butSel");
        });
    
    $("#wmenuBut").click(function(){
        $("#workMenu").toggle();
        $("#wmenuBut").toggleClass("but2Sel");
        });
     
     
     $("#storyBut").click(function(){;
        $("#storyBox").toggle();
        $("#storyBut").toggleClass("butSel");      
        });
    

           
/**   
    var timesClicked = 0;
    
    $("#textBut").click(function() {
        timesClicked++;
        if (timesClicked%2==0) {
            //run second function
            $("#text > :not(.anot)").show();
            $("h1").show();
            $("#tsoagl").hide();
            $("h2").toggleClass("pad");
            $("#textBut").toggleClass("butSel");
        } else {
            //run first function
            $("#text > :not(.anot)").hide();
            $("h1").hide();
            $("#tsoagl").show();
            $("h2").toggleClass("pad");
            $("#textBut").toggleClass("butSel");
        }
        });
    
    **/
    

    
    /**
    $("#lmenuBut").click(function(){
        $("#libMenu li").toggle();
        $("#lmenuBut").toggleClass("butSel");
        });
    */
    
    /*
    
    Work Menu function:
    Click li in work menu
    Get link of clicked li
    Show the corresponding div with that id
    Hide the visible div
    
    */
    
    $('#workMenu li').click(function(){
        var link = $(this).attr('href');
        var visible = $(".diary").not(":hidden");
        $(link).addClass("show");
        $(visible).removeClass("show");
    });
    
    /**
    
    Function for library object click:
    Get "id" of this button
    Load "id".txt from lobacor folder into #libtext
    Add class "objSel" to clicked img
    
    */
    
    $(".object").click(function(){
        var id = $(this).attr('id');
        $("#libtext").addClass("bor");
        $("#libtext").load("lib/text/" + id + ".txt");
        $(this).addClass("objSel");
        $(".object").not(this).removeClass("objSel");
        $("#clear").show();
    });
    
    /*
    
    Function for Work Gallery:
    Click diaryF
    Get visible element class
    Hide visible element
    Show next element
    Hide diaryF if last element, diaryB if first element
    
   */
    
    $("#diaryF").click(function(){
        var visible = $(".diary").not(":hidden");
        $(visible).removeClass("show");
        $(visible).next('.diary').first().addClass("show");
        $("#diaryB").show();
        if($(visible).is(':nth-last-child(2)')){
        $('#diaryF').hide();
        }
    }); 
    
    $("#diaryB").click(function(){
        var visible = $(".diary").not(":hidden");
        $(visible).removeClass("show");
        $(visible).prev('.diary').first().addClass("show");
        $('#diaryF').show();
        if($(visible).is(':nth-child(2)')){
        $('#diaryB').hide();
        }
    }); 

    
});

     