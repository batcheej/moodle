var StatusEnum = {    "NOT_PLAYED": 0, "PLAYED": 1, "COMPLETED": 2, "NOT_AVAILABLE" : 3   };
Object.freeze(StatusEnum);



var SystemEnum = {    "APB": 0, "ASB": 1, "ACB": 2, "ASB_NON" : 3   };
Object.freeze(SystemEnum);



var AxBsystem = SystemEnum.APB;




function StatusEnumToString(x) {
	switch(x) {
		case StatusEnum.NOT_PLAYED: return "Not Played"; break;
		case StatusEnum.PLAYED:  return "Played"; break;
		case StatusEnum.COMPLETED: return "Completed"; break; 
		case StatusEnum.NOT_AVAILABLE: return "Not Available"; break; 
	}
	return "Err";
}




var stackObject = 	[
	{
		month: "Jul",
		videos: [ { status: 0, video: "Video 1"}
				]
	},
	{
		month: "Aug",
		videos: [
				]
	},
	{
		month: "Sept",
		videos: [
			{ status: 1, video: "Video 22"},
			{ status: 2, video: "Video 23"}
				]
	},
	{
		month: "Oct",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"}
				]
	},
	{
		month: "Nov",
		videos: [
			{ status: 0, video: "Video 1"}
				]
	},
	{
		month: "Dec",
		videos: [
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"}
				]
	},
	{
		month: "Jan",
		videos: [
				]
	},
	{
		month: "Feb",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"}
				]
	},
	{
		month: "Mar",
		videos: [
			{ status: 2, video: "Video 4"}
				]
	},
	{
		month: "Apr",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"}
				]
	},
	{
		month: "May",
		videos: [
			{ status: 0, video: "Video 1"}
				]
	},
	{
		month: "Jun",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"}
				]
	}
];


/*
var stackObject = 	[
	{
		month: "Oct",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Nov",
		videos: [
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"},
			{ status: 2, video: "Video 13"},
			{ status: 2, video: "Video 14"},
			{ status: 1, video: "Video 15"},
			{ status: 0, video: "Video 16"},
			{ status: 1, video: "Video 17"},
			{ status: 2, video: "Video 18"},
			{ status: 0, video: "Video 19"},
			{ status: 2, video: "Video 110"},
			{ status: 0, video: "Video 111"},
			{ status: 1, video: "Video 112"}
				]
	},
	{
		month: "Dec",
		videos: [
			{ status: 0, video: "Video 21"},
			{ status: 1, video: "Video 22"},
			{ status: 2, video: "Video 23"},
			{ status: 2, video: "Video 24"},
			{ status: 1, video: "Video 25"},
			{ status: 0, video: "Video 26"},
			{ status: 1, video: "Video 27"},
			{ status: 2, video: "Video 28"},
			{ status: 0, video: "Video 29"},
			{ status: 2, video: "Video 210"},
			{ status: 0, video: "Video 211"},
			{ status: 1, video: "Video 212"}
				]
	},
	{
		month: "Jan",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Feb",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Mar",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Apr",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "May",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Jun",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Jul",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Aug",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	},
	{
		month: "Sep",
		videos: [
			{ status: 0, video: "Video 1"},
			{ status: 1, video: "Video 2"},
			{ status: 2, video: "Video 3"},
			{ status: 2, video: "Video 4"},
			{ status: 1, video: "Video 5"},
			{ status: 0, video: "Video 6"},
			{ status: 1, video: "Video 7"},
			{ status: 2, video: "Video 8"},
			{ status: 0, video: "Video 9"},
			{ status: 2, video: "Video 10"},
			{ status: 0, video: "Video 11"},
			{ status: 1, video: "Video 12"}
				]
	}
];
*/



var sectorInfo = 	[
		{
			floodColor: "#808040",
			outterTextRadiusOffset: 2, 
			outterRotation: -30,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#6EC1A7",
			outterTextRadiusOffset: -10, 
			outterRotation: -75,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#ECEADD",
			outterTextRadiusOffset: 10, 
			outterRotation: +50,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#EC474B",
			outterTextRadiusOffset: 25, 
			outterRotation: +0,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#3E576D",
			outterTextRadiusOffset: 35, 
			outterRotation: -50,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#757573",
			outterTextRadiusOffset: +30, 
			outterRotation: +70,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		},
		{
			floodColor: "#91AA9D",
			outterTextRadiusOffset: 20, 
			outterRotation: +25,
			outterArcThickness: 10,
			innerTextRotation: 0,
			innerTextColor: "black"
		}
		
	];


var burstObjectOriginal = 	{ 
	sectors: [
		{
			game: "Build A Contact",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit:"Days",
			outterArcColor: "red",
			isEnabled : [true, false, false, false]
		},
		{
			game: "Master of Symbology",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit: "min:sec",
			outterArcColor: "red",
			isEnabled : [true, false, false, false]
		},
		{
			game: "Tactical Oceanography",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit: "dB",
			outterArcColor: "red",
			isEnabled : [true, false, true, false]
		},
		{
			game: "Active Signal Recognition",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit:"Days",
			outterArcColor: "red",
			isEnabled : [true, false, false, false]
		},
		{
			game: "Passive Narrowband Search",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit:"%",
			outterArcColor: "red",
			isEnabled : [true, false, true, false]
		},
		
		{
			game: "Narrowband Adaptive Trainer",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit: "Pts",
			outterArcColor: "red",
			isEnabled : [true, true, true, false]
		},
		{
			game: "PEP Sandbox Tool",
			status: StatusEnum.NOT_PLAYED,
			percent: 0,
			innerText: "",
			outterText: "",
			unit: "Pts",
			outterArcColor: "red",
			isEnabled : [false, false, false, false]
		}
	]
};




var progressObject = {
	percent: 0.0,
	points: 1356
};
