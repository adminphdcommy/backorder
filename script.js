var textarea1 = document.getElementById("domainlist")
var domtable = document.getElementById("domaintable")


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
		//bidbtn.setAttribute("onclick","bid()")
		
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
		
		bidbtn.onclick = function(){
			var bidamount = document.getElementById("bidinput"+i).value
			console.log(bidamount)
		}
		
		domtable.appendChild(newtr)
	}
}

console.log(domainarray)
console.log(formatDate(new Date()))
domainlisting()
tablelisting()



















