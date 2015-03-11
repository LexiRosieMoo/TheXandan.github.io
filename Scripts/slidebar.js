$(document).ready(function () {
	var blueout = false;
	var greenout = false;

				$("#Home")
				.click(function() {
					if (greenout==true)
					{
						$("#sidebareffect-green").transition({x:'0px'});
						$("#sidebar-green").transition({x:'0px'});
					}
					if (blueout==true)
					{
						$("#sidebareffect-blue").transition({x:'0px'});
						$("#sidebar-blue").transition({x:'2px'});
					}
					}
				);
	
				$("#Games")
				.click(function() {
						if(blueout == false)
						{
							blueout = true;
							$("#sidebareffect-blue").transition({x:'200px'});
							$("#sidebar-blue").transition({x:'200px'});
							
							if (greenout==true)
							{
								greenout=false;
								$("#sidebareffect-green").transition({x:'0px'});
								$("#sidebar-green").transition({x:'0px'});
							}
						}
						else
						{
							blueout=false;
							$("#sidebareffect-blue").transition({x:'2px'});
							$("#sidebar-blue").transition({x:'0px'})
						}
					}
				);
				
				$("#Stuff")
				.click(function() {
						if(greenout == false)
						{
							greenout = true;
							$("#sidebareffect-green").transition({x:'200px'});
							$("#sidebar-green").transition({x:'200px'});
							
							if (blueout==true)
							{
								blueout=false;
								$("#sidebareffect-blue").transition({x:'2px'});
								$("#sidebar-blue").transition({x:'0px'});
							}
						}
						else
						{
							greenout=false;
							$("#sidebareffect-green").transition({x:'0px'});
							$("#sidebar-green").transition({x:'0px'});
						}
					}
				);
				
			});