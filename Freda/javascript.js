$(document).ready(function(){
// Response.Header().Set("Access-Control-Allow-Origin", "*")
// $('#b').click(function(){
// 	// console.log($('#name').val());
// 	// console.log($('#state').val());
// $.ajax({
// 	// header('Access-Control-Allow-Origin: *');
// 	// header('Access-Control-Allow-Methods: GET, POST');
// 	// header("Access-Control-Allow-Headers: X-Requested-With");
// 	crossDomain: true,
// 	dataType: 'xml',
// 	type:'GET',
// 	url:'https://api.greatschools.org/search/schools?key=ntrebpcrjjzxtlq8oxwlpaxx',
// 	data:{
// 		q:$('#name').val(),
// 		state:$('#state').val(),
// 		},
// 	success: function(response){
// 		  // xmlDoc = $.parseXML( response ),
// 		  // $response = $( xmlDoc ),
// 		  // $title = $response.find( "school" );
// 		// console.log(response.getElementsByTagName('school'));
// 		// var x = response.getElementsByTagName('schools')[0];
// 		// $('schools', x) ;
// 		// console.log(x);

// 		var el = document.createElement( 'html' );
// 		el.innerHTML = response.getElementsByTagName('schools')[0].innerHTML;
// 		for (i = 0; i < 10; i++) { 
// 			$('#result').append('<li>'+ el.getElementsByTagName('name')[i].innerHTML+'</li>');};
// 		// console.log(el);
// 	}
// });

// })
var idarr =[];

$('#b').click(function(){
	// console.log($('#name').val());
	// console.log($('#state').val());
$.ajax({
	// header('Access-Control-Allow-Origin: *');
	// header('Access-Control-Allow-Methods: GET, POST');
	// header("Access-Control-Allow-Headers: X-Requested-With");
	crossDomain: true,
	dataType: 'xml',
	type:'GET',
	url:'https://api.greatschools.org/schools/nearby?key=ntrebpcrjjzxtlq8oxwlpaxx',
	data:{
		state:$('#state').val(),
		zip:$('zip').val(),
		},
	success: function(response){
		var el = document.createElement( 'html' );
		el.innerHTML = response.getElementsByTagName('schools')[0].innerHTML;
		for (i = 0; i < 10; i++) { 
			idarr.push(el.getElementsByTagName('gsId')[i].innerHTML);}
			for (n = 0; n < 10; n++){
				$.ajax({
				crossDomain: true,
					dataType: 'xml',
					type:'GET',
					url:'https://api.greatschools.org/school/census/' + $('#state').val() +'/' + idarr[n] + '?key=ntrebpcrjjzxtlq8oxwlpaxx',
					success: function(response){
						var em = document.createElement( 'html' );
						em.innerHTML = response.getElementsByTagName('census-data')[0].innerHTML;
						// 
						// console.log(em.getElementsByTagName('ethnicities')[0].innerHTML);
						var fd = document.createElement( 'html' );
						fd.innerHTML = em.getElementsByTagName('ethnicities')[0].innerHTML;
						$('#result').append('<h3>' + em.getElementsByTagName('schoolName')[0].innerHTML + '<h3>');
							for (i = 0; i < fd.getElementsByTagName('ethnicity').length; i++) { 
							$('#result').append("<li>"+fd.getElementsByTagName('ethnicity')[i].childNodes[0].innerHTML + ": " + fd.getElementsByTagName('ethnicity')[i].childNodes[1].innerHTML +"</li>");
							};
						}
					});
			};	
	}

})
});







})