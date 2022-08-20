// Scuffed variables for holding Tag Value from XML
var tagvalue;
var one;
var two;
var three;

function showPortofolio(str){
  // Basicly Copy Paste from w3School
  tagvalue = str;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fetchData(this);
    }
  };
  xhttp.open("GET", "portofolio.xml", true);
  xhttp.send();
}

function fetchData(xml){
  var i;
  var card;
  var xmlDoc = xml.responseXML;
  document.getElementsByClassName("card-list")[0].innerHTML = "";
  var x = xmlDoc.getElementsByTagName(tagvalue);
  // Loop for each xml that have tagValue
  for (i = 0; i < x.length; i++){
    one = x[i].getElementsByTagName("one")[0].childNodes[0].nodeValue;
    two = x[i].getElementsByTagName("two")[0].childNodes[0].nodeValue;
    three = x[i].getElementsByTagName("three")[0].childNodes[0].nodeValue;
    document.getElementsByClassName("card-list")[0].append(createCard());
  }
}

function createCard(Data){
  // Create Card
  var article = document.createElement("article");
  article.classList.add("card");

  // Create header for text
  var header = document.createElement("header");
  header.classList.add("card-header")

  // Insert Text
  var title = document.createElement("h2");
  title.innerHTML = one;
  var deskripsi = document.createElement("p");
  deskripsi.innerHTML = two;
  var option = document.createElement("p");
  option.innerHTML = three;
  
  // Append text to header
  header.append(title);
  header.append(deskripsi);
  header.append(option);
  
  // Append header to Card
  article.append(header);
  return article;
}