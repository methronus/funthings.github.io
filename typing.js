var paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum, nisl eu condimentum suscipit,"+
	 "quam enim aliquam leo, vel malesuada sem urna sed augue. Nulla in feugiat diam. Fusce consectetur, eros sit amet condimentum semper,"+ 
	 "urna ipsum fringilla mauris, quis malesuada magna felis et ipsum. Sed ac pellentesque nisl."+ 
	 "Ut ut leo quis diam pellentesque rutrum ac nec odio. Sed eget enim eu augue laoreet ultricies."+
	 "Sed maximus efficitur porttitor. Maecenas porttitor neque orci, eget pulvinar massa ultrices ullamcorper."+ 
	 "Nulla eleifend urna ac est malesuada fermentum. Suspendisse sed auctor metus, consectetur fermentum libero."+ 
	 "Sed eget nulla sem. Donec consectetur non ante id commodo. Vivamus cursus viverra malesuada."+
	 "Nulla feugiat, dui vitae placerat bibendum, risus sem auctor sapien, sit amet faucibus augue felis sed felis. Maecenas sodales commodo diam sit amet mattis."+
	 "<br /><br />"+
	 "Nulla eleifend urna ac est malesuada fermentum. Suspendisse sed auctor metus, consectetur fermentum libero."+ 
	 "Sed eget nulla sem. Donec consectetur non ante id commodo. Vivamus cursus viverra malesuada."+
	 "Nulla feugiat, dui vitae placerat bibendum, risus sem auctor sapien, sit amet faucibus augue felis sed felis. Maecenas sodales commodo diam sit amet mattis.";

var index = 0;

var element = document.getElementById("level1");
element.innerHTML = paragraphText;

 window.onload=function() 
 {


	//https://aceyan.github.io/imgd5400_puzzle_test/
	document.onkeypress = function (event)
	 {
	    var e = event || window.event;
	     //alert(e.keyCode + "   "+ paragraphText.charCodeAt(index) );
	    if (e && e.keyCode == paragraphText.charCodeAt(index))
	    { 
	        
			index++;

			var typeInStr = paragraphText.substring(0,index);
			var cursorStr = paragraphText.charAt(index);
			var restStr = paragraphText.substring(index + 1, paragraphText.length);

			var typeInStrHTML = "<span style='color:#ff0000;'>" + typeInStr + "</span>";
			var cursorStrHTML = "<span style='color:#0000ff; text-decoration: underline ;'>"  + cursorStr.bold() + "</span>";
			var restStrHTML = restStr;

			element.innerHTML =  typeInStrHTML +  cursorStrHTML + restStrHTML;
			if(index >= paragraphText.length)
			{
				 alert('Finish!');
			}
	    }
	};

 }
