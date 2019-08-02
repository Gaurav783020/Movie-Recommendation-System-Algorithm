	
	
$(document).ready(()=>{
 	$('#searchForm').on('submit',(e)=>{
 		let searchText = $('#searchtext').val();
 		
 	 getMovies(searchText);
 	
 	 e.preventDefault();
 	});
 });
let cl='';
 function getMovies(searchText){
 	axios.get('https://api.themoviedb.org/3/search/movie?api_key=4c85c27ee10d1dc3d4bbae3aa8643100&query='+searchText)
 	.then((resp)=>{
 		console.log(resp.data.results);
 		let movies = resp.data ;
 		

 		let output='';
 		
 		var len= Object.keys(movies.results ).length ;

 		for(var i=0;i<len;i++){
 			output+='<div class ="col-md-3">'+'<div class ="well text-center"';
 			output+='<br>'+movies.results[i]["title"]+'<br>';
 			cl=movies.results[i]["id"];
 			output+='<a onclick = "movieSelected('+cl+')" class="btn btn-primary" href="#">Details</a>';
 			output+='</div>'+'</div>';
 		}

 		output+='<br><br><br><br><br><br><br><br><br><br>'
 		$('#mov').html(output);
 	})
 	.catch((err)=>{
 		console.log(err);
 	})
}

function movieSelected(id){
	console.log(id);	
	sessionStorage.setItem('movieId',id);
	window.location='index.html';
	return false;
}

function getMovie(){
	let movieId=sessionStorage.getItem('movieId');
axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=4c85c27ee10d1dc3d4bbae3aa8643100')
 	.then((data)=>{
 		console.log(data);
 		let output='';
 		let temp1='http://image.tmdb.org/t/p/w185/'
 		var temp=data.data["poster_path"];
 		console.log(temp);
 		temp=temp1+temp;
 		output+='<div class="row">';
 		output+='<div class="col-md-3">';
 		output+='<img src='+temp+' class="thumbnail"></img>';
 		output+='<div class="col-md-8">';
 		output+='<br>'+'<h2>'+data.data["title"]+'</h2>'+'<br>';
 		output+='<div class="well"><strong>OVERVIEW:</strong>'+data.data["overview"]+'</div>'+'<br>';
 		output+='<ul class="list-group" >';
 		output+='<li class="list-group-item"><strong>POPULARITY:</strong>'+data.data["popularity"]+'</li>'+'<br>';
 		output+='<li class="list-group-item"><strong>VOTES:</strong>'+data.data["vote_count"]+'</li>'+'<br>';
 		output+='<li class="list-group-item"><strong>AVERAGE VOTES:</strong>'+data.data["vote_average"]+'</li>'+'<br>';
 		output+='</ul>'+'</div>'+'</div>';
 		sessionStorage.removeItem('movieId');
 		$('#mat').html(output);
 	})
}