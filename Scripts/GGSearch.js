function search()
{
	var link="https://www.reddit.com/r/gamegrumps/search?q="
	
	var keyword = document.getElementById("keyword").value;
	
	
	
	link = link.concat(keyword);
	link = link.concat("+AND+(");
	
	//Start Shows
	if (document.getElementById("Grumps").checked)
	{
		link = link.concat("flair:Game");
	}
	
	if (document.getElementById("Steam").checked)
	{
		link = link.concat("+OR+flair:Steam");
	}
	
	if (document.getElementById("Cade").checked)
	{
		link = link.concat("+OR+flair:GrumpCade");
	}
	
	if (document.getElementById("Out").checked)
	{
		link = link.concat("+OR+flair:GrumpOut");
	}
	
	//End Shows
	//Start Content
	
	if (document.getElementById("Art").checked)
	{
		link = link.concat("+OR+flair:Art");
	}
	
	if (document.getElementById("Remix").checked)
	{
		link = link.concat("+OR+flair:Remix");
	}
	
	if (document.getElementById("Discussion").checked)
	{
		link = link.concat("+OR+flair:Discussion");
	}
	
	if (document.getElementById("Joke").checked)
	{
		link = link.concat("+OR+flair:Joke");
	}
	
	if (document.getElementById("Question").checked)
	{
		link = link.concat("+OR+flair:Question");
	}
	
	if (document.getElementById("Animation").checked)
	{
		link = link.concat("+OR+flair:Animation");
	}
	
	if (document.getElementById("Misc").checked)
	{
		link = link.concat("+OR+flair:Misc");
	}
	link = link.concat(")")
	
	//End Content
	
	//Start Sort
	
	if (document.getElementById("relevance").checked)
	{
		link = link.concat("&sort=relevance");
	}
	else if (document.getElementById("new").checked)
	{
		link = link.concat("&sort=new");
	}
	else if (document.getElementById("comments").checked)
	{
		link = link.concat("&sort=comments");
	}
	else if (document.getElementById("top").checked)
	{
		link = link.concat("&sort=top");
	}
	
	
	link = link.concat("&restrict_sr=on")
	
	
	window.open(link);
}