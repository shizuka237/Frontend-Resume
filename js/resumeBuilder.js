var formattedName = HTMLheaderName.replace("%data%","Smriti Raj");
var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);