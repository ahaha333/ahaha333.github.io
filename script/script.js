
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
 

     $("#chapBut").click(function(){
        $("p").toggle();
        $("#chapBut").toggleText('contents', 'full text');
        });
     
     $("#menuBut").click(function(){
        $("#menu").toggle();
        $("#menuBut").toggleClass("butSel");
        });
      
     $("#anotBut").click(function(){
        $( ".anot" ).toggleClass("seeAnot");
        $( ".anot2" ).toggleClass("seeAnot2");
        $( ".anot3" ).toggleClass("seeAnot3");
        $( ".anot4" ).toggleClass("seeAnot4");
        $("#anotBut").toggleClass("butSel");
        });
     
    $("#libBut").click(function(){
        $("#storyBox").hide();
        $("#workBox").hide();
        $("#libBox").toggle();
        $("#lmenuBut").toggle();
        $("#libBut").toggleClass("butSel");
        $("#workBut").removeClass("butSel");
        $("#storyBut").removeClass("butSel");
        $("#wmenuBut").hide();
        });
     
    $("#workBut").click(function(){
        $("#storyBox").hide();
        $("#libBox").hide();
        $("#workBox").toggle();
        $("#wmenuBut").toggle();
        $("#workBut").toggleClass("butSel");
        $("#libBut").removeClass("butSel");
        $("#storyBut").removeClass("butSel");
        $("#lmenuBut").hide();
        });
     
     $("#storyBut").click(function(){
        $("#libBox").hide();
        $("#workBox").hide();
        $("#storyBox").toggle();
        $("#storyBut").toggleClass("butSel");
        $("#libBut").removeClass("butSel");
        $("#workBut").removeClass("butSel");
        $("#wmenuBut").hide();
        $("#1menuBut").hide();
        });
    
    $("#wmenuBut").click(function(){
        $("#workMenu li").toggle();
        $("#wmenuBut").toggleClass("butSel");
        });
    
    /**
    $("#lmenuBut").click(function(){
        $("#libMenu li").toggle();
        $("#lmenuBut").toggleClass("butSel");
        });
    */    
    
    /**
    
    Function for object click:
    Get "id" of this button
    Load "id".txt from lobacor folder into #libtext
    Add class "objSel" to clicked img
    
    */
    
    $(".object").click(function(){
        var id = $(this).attr('id');
        $("#libtext").load("lib/text/" + id + ".txt");
        $(this).addClass("objSel");
        $(".object").not(this).removeClass("objSel");
    });
    
    
    $(document).ready(function(){
      $('.single').zoom({url: 'IMG_2064.jpg'});
    });

    // Using Colorbox with Zoom
    $(document).ready(function(){
      $('.single').zoom({
        url: 'IMG_2064.jpg', 
        callback: function(){
          $(this).colorbox({href: this.src});
        }
      });
    });
    
    
});

     