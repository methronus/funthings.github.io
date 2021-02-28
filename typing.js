
var enterText = "<br /><br />";
var paragraph1Text = "So you have accepted my challenge and likely do not know what this is about. Well... I am about to tell you.";
var paragraph2Text = "You see that timer in the top right hand corner? If it goes to zero, then the puppies will die. What puppies? The cute kind that's what. The ones that YOU DO NOT want to die!";
var paragraph3Text = "Since you don't want the puppies to die, I encourage YOU to type quickly because things will become MUCH... MORE... DIFFICULT! How difficult?! ReAlLy DiffiCULT!!!";
var paragraph4Text = "These challenging challenges will make you want to $%^& your pants because your success determines whether these puppies will live or DIE!!!";
var paragraph5Text = "Now you might be wondering why I'm doing this. It's because I'm a MaLEvoLeNT, iNEviTAble, DEMENted, inSANE, UNpropitious, and maniacal son of a &*$%@!!! Pretty much I'm a psycho. And that's DOCTOR Psycho to you!";
var paragraph6Text = "Go %^&* yourself,";
var paragraph7Text = "Doctor Psycho";


var paragraphArray=new Array();
paragraphArray[0] = paragraph1Text;
paragraphArray[1] = paragraph2Text;
paragraphArray[2] = paragraph3Text;
paragraphArray[3] = paragraph4Text;
paragraphArray[4] = paragraph5Text;
paragraphArray[5] = paragraph6Text;
paragraphArray[6] = paragraph7Text;

var textIndex = 0;
var paragraphIndex = 0;//index in paragraphArray

var currentParagraphText  = paragraph1Text;//current paragraph text


//init 
var element = document.getElementById("level1");
element.innerHTML = currentParagraphText;

//update HTML for paragraphs
function updateHTML()
{

		var finishedParagraphText = "";//paragraphs that have already been typed

		for (i = 0; i < paragraphIndex; i++) 
		{ 
    		finishedParagraphText += paragraphArray[i] + enterText;
 		}

			var typeInStr = currentParagraphText.substring(0,textIndex);
			var cursorStr = currentParagraphText.charAt(textIndex);
			var restStr = currentParagraphText.substring(textIndex + 1, currentParagraphText.length);

			var typeInStrHTML = "<span style='color:#ff0000;'>" + typeInStr + "</span>";
			var cursorStrHTML = "<span style='color:#0000ff; text-decoration: underline ;'>"  + cursorStr.bold() + "</span>";
			var restStrHTML = restStr;
			var finishedParagraphHTML = "<span style='color:#ff0000;'>" + finishedParagraphText + "</span>";
			element.innerHTML =  "<p align='left'>" +  finishedParagraphHTML   +   typeInStrHTML +  cursorStrHTML + restStrHTML + "</p>";
}

updateHTML();

 window.onload=function() 
 {


	document.onkeypress = function (event)
	 {
	    var e = event || window.event;
	     console.log(e.keyCode + "   "+ currentParagraphText.charCodeAt(textIndex) );
	    if (e && e.keyCode == currentParagraphText.charCodeAt(textIndex))
	    { 
	        
			textIndex++;

			updateHTML();


			if(textIndex >= currentParagraphText.length)
			{
				paragraphIndex++;
				if(paragraphIndex >= paragraphArray.length)
				{
					 document.getElementById("next1").style.visibility = "visible"; 
				}
				else
				{
					//go to next paragraph and display
					textIndex = 0;
					currentParagraphText  = paragraphArray[paragraphIndex];
					updateHTML();
				}
			}
	    }
	};

 }
