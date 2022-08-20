var dataValue;
$(".nav-link").click(function(){
  alert("Halo");
});
// GET Request AJAX
$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "portofolio.xml",
    dataType: "xml",
    success: xmlParser
   });
});

// Event change Select 
$(function(){
    $('#data-portofolio').change(function(){
      // dataValue = $(this).val(); 
      $.ajax({
      type: "GET",
      url: "portofolio.xml",
      dataType: "xml",
      success: xmlParser
    });            
  });    
    // $('.check')
    //     .val('two')
    //     .trigger('change');
});

function xmlParser(xml) {
$(".card-list").empty();
$('#load').fadeOut();

$(xml).find($( "#data-portofolio" ).val()).each(function () {
    // Yang penting ini fungsinya sama, nambah article (Card) untuk setiap tag xml
    $(".card-list").append('<article class="card"><header class="card-header"><h2>' + $(this).find("one").text() +   '</h2><p>' + $(this).find("two").text() + '</p><p>' + $(this).find("three").text() + '</p></header></article>');
    $(".card").fadeIn(1000);
 });
}

function showPortofolio(str){
  // Dummy function buat kalo ganti ke vanlla JS
}