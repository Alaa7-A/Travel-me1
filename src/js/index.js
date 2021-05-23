import '../sass/style.scss';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import '@fortawesome/fontawesome-free/js/all';

$(document).ready(function(){
    $("a.scroll").on('click', function(event) {
 
         var hash = this.hash;
 
         $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){});
     
     });
     $('.timer').countTo();

     $(function () {
      $("#commentForm").validate();
  });
 });
