  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="CSS/bootstrap.min.css"> 
  <link rel="stylesheet" type="text/css" href="CSS/style.css ">



<body>


const xhr=new XMLHttpRequest();
xhr.onload=function(){
	console.log("this");
};
xhr.open('get','https://api.themoviedb.org/3/movie/299574?api_key=4c85c27ee10d1dc3d4bbae3aa8643100');
xhr.send();




</body>