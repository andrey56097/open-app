
// alert("Hi");
$( document ).ready(function() {
    console.log( "ready!" );
	var vid = document.getElementById('bgvid');
	var pause = $('#info-block button');

	vid.onEnded = function(){
		this.pause();
		this.classList.add('stopfade');
	}

	pause.on('click', function(){
		vid.classList.toggle('stopfade');

		if(vid.paused){
			vid.play();
			$(this).html('Pause');
		}
		else{
			vid.pause();
			$(this).html('Play');
		}           
	});
});