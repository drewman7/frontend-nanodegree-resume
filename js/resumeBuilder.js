var formattedName = 
	HTMLheaderName.replace("%data%","Andrew Totten");

var formattedRole = 
	HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedName,formattedRole);

print(formattedName);