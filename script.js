var textarea1 = document.getElementById("domainlist")
var domtable = document.getElementById("domaintable")
var bidtable = document.getElementById("bidtable")

var todaydate = document.getElementById("todaydate")
todaydate.innerHTML = formatDate(new Date())

var user = document.getElementById("user")
var username = "user001"
user.innerHTML = username

var domainarray = [
	{
		domain:"google.com",
		dtcreate:formatDate(new Date("10 Jan 1990")),
		dtexpire:formatDate(new Date("27 Oct 2017"))
	},
	{
		domain:"yahoo.com",
		dtcreate:formatDate(new Date("10 Feb 1991")),
		dtexpire:formatDate(new Date("28 Oct 2017"))
	},
	{
		domain:"facebook.com",
		dtcreate:formatDate(new Date("10 Mar 1992")),
		dtexpire:formatDate(new Date("29 Oct 2017"))
	},
	{
		domain:"instagram.com",
		dtcreate:formatDate(new Date("10 Apr 1993")),
		dtexpire:formatDate(new Date("30 Oct 2017"))
	},
	{
		domain:"twitter.com",
		dtcreate:formatDate(new Date("10 May 1994")),
		dtexpire:formatDate(new Date("31 Oct 2017"))
	},
	{
		domain:"youtube.com",
		dtcreate:formatDate(new Date("10 Jun 1995")),
		dtexpire:formatDate(new Date("01 Nov 2017"))
	},
	{
		domain:"wiki.com",
		dtcreate:formatDate(new Date("10 Aug 1997")),
		dtexpire:formatDate(new Date("02 Nov 2017"))
	},
	{
		domain:"taobao.com",
		dtcreate:formatDate(new Date("10 Aug 1997")),
		dtexpire:formatDate(new Date("03 Nov 2017"))
	}
]

function formatDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function domainlisting(){
	for(i=0;i<domainarray.length;i++){
		textarea1.innerHTML += domainarray[i].domain + "\n"
	}
}

function tablelisting(){
	for(i=0;i<domainarray.length;i++){
		var newtr = document.createElement("tr")
		var newtd1 = document.createElement("td")
		var newtd2 = document.createElement("td")
		var newtd3 = document.createElement("td")
		var newtd4 = document.createElement("td")
		var newtd5 = document.createElement("td")
		var bidbtn = document.createElement("button")
		var textbox = document.createElement("input")
		
		bidbtn.innerHTML = "Bid"
		bidbtn.setAttribute("class","btn1")
		bidbtn.setAttribute("onclick","bid("+i+")")
		bidbtn.setAttribute("id","btn"+i)
		
		textbox.setAttribute("type","text")
		textbox.setAttribute("placeholder","USD")
		textbox.setAttribute("class","bidtextbox")
		textbox.setAttribute("id","bidinput"+i)
		
		newtr.appendChild(newtd1)
		newtd1.innerHTML = domainarray[i].domain
		newtr.appendChild(newtd2)
		newtd2.innerHTML = domainarray[i].dtcreate
		newtr.appendChild(newtd3)
		newtd3.innerHTML = domainarray[i].dtexpire
		newtr.appendChild(newtd4)
		newtd4.innerHTML = (Date.parse(domainarray[i].dtexpire) - Date.parse(formatDate(new Date())))/86400000 + " days"
		newtr.appendChild(newtd5)
		newtd5.appendChild(textbox)
		newtd5.appendChild(bidbtn)
		
		
		
		domtable.appendChild(newtr)
	}
}



console.log(domainarray)
console.log(formatDate(new Date()))
domainlisting()
tablelisting()


console.log(domtable.children)

for(a=1;a<domtable.childNodes;a++){
	//var bidbtn1 = document.getElementById("bidinput"+a).value
}

function bid (b){
    var bidamount = document.getElementById("btn"+b).parentElement.firstChild.value;
	if(bidamount==""){
		bidamount = 0
	}
	var biduser = username
	var biddomain = document.getElementById("btn"+b).parentElement.parentElement.firstChild.innerHTML
	var biddate = formatDate(new Date())
	var newtr = document.createElement("tr")
	var newtd1 = document.createElement("td")
	var newtd2 = document.createElement("td")
	var newtd3 = document.createElement("td")
	var newtd4 = document.createElement("td")
	var newtd5 = document.createElement("td")
	var bidbtn = document.createElement("button")
	
	bidbtn.innerHTML = "Approve"
	bidbtn.setAttribute("class","btn1")
	
	newtr.appendChild(newtd1)
	newtd1.innerHTML = biddomain
	newtr.appendChild(newtd2)
	newtd2.innerHTML = biddate
	newtr.appendChild(newtd3)
	newtd3.innerHTML = biduser
	newtr.appendChild(newtd4)
	newtd4.innerHTML = bidamount
	newtr.appendChild(newtd5)
	newtd5.appendChild(bidbtn)
	bidtable.appendChild(newtr)

}














