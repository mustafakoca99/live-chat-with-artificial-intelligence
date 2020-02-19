$(document).ready(function() {
   navigator.getUserMedia = navigator.getUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia;
   if(navigator.getUserMedia)
    {
		var myvideo = document.getElementById("myvideo");
		var constraints ={audio:false,video:true};
		function successCallback(stream)
		 {
			 myvideo.srcObject = stream; 
				//asenkron olarak kameramızın görüntüsünü bu tag içerisinde görüntüleyelim
    		 myvideo.play(); 
			 }
			 function errorCallback(error)
	 {
			
			 }
		navigator.getUserMedia(constraints, successCallback, errorCallback);
		
		}
		else
		 {
		console.log("tarayıcınızın WEBRTC desteği yok!");
		}
});
