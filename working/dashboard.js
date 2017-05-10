
//
// ProgressChart
//
function ProgressChart(divId, canvasId) {
	this.divId = divId;
	this.canvasId = canvasId;
	
	this.div = $(this.divId);
	this.canvas = $(this.canvasId);
    this.context = this.canvas[0].getContext('2d');
	
    this.canvas.width(900);
  	this.canvas.height(180);
	
   this.div.width(905);
  	this.div.height(180);
	
	this.context.canvas.width  = 900;
	this.context.canvas.height = 180;
	
	
	this.divWidth = this.div.width();
	this.divHeight = this.div.height();
	
	this.canvasWidth = this.canvas.width();
	this.canvasHeight = this.canvas.height();
};

ProgressChart.prototype.resize = function() {
}

ProgressChart.prototype.draw = function(jsonObject) {
	this.context.fillStyle = 'black';
	this.context.globalAlpha=1.0;
	this.context.fillRect(0,0, this.context.canvas.width, this.context.canvas.height);
	
	quarterHeight = this.context.canvas.height / 4;
	indent = 30;	
	
	length = this.context.canvas.width - (indent * 2);
/*	
	percentLength = Math.floor(length * jsonObject.percent);
	
	console.debug("length: " + length + ", percent: " + jsonObject.percent + ", percentLength: " + percentLength);
	
	
	if (percentLength < quarterHeight) {
			this.context.beginPath();
			xx = Math.acos(percentLength/quarterHeight);
			this.context.arc(indent + quarterHeight, quarterHeight*1.5, 0.75 * quarterHeight, 3 * Math.PI / 2 - xx, Math.PI / 2 + xx, true);
			this.context.fillStyle = '#78909A';
			this.context.fill();
	} else if (percentLength < (length - quarterHeight)) {
			this.context.beginPath();
			this.context.arc(indent + quarterHeight, quarterHeight * 1.5, 0.75 * quarterHeight, 3 * Math.PI / 2, Math.PI / 2, true);
			this.context.fillStyle = '#78909A';
			this.context.fill();
			
			this.context.fillStyle = "#78909A"; 
			this.context.fillRect(indent + quarterHeight, 0.75 * quarterHeight, percentLength - quarterHeight, quarterHeight * 1.5);
	} else {
			this.context.beginPath();
			this.context.arc(indent + quarterHeight, quarterHeight * 1.5, 0.75 * quarterHeight, 3 * Math.PI / 2, Math.PI / 2, true);
			this.context.fillStyle = '#78909A';
			this.context.fill();
			
			this.context.fillStyle = "#78909A"; 
			this.context.fillRect(indent + quarterHeight, 0.75 * quarterHeight, length - (quarterHeight*2), quarterHeight * 1.5);
			
			xx = (percentLength - (length - quarterHeight))/quarterHeight;
			x1 = xx * 90.0 * Math.PI / 180.0;
			
			this.context.beginPath();
	this.context.moveTo(indent + length - quarterHeight, quarterHeight * 2);
	this.context.lineTo(indent + length - quarterHeight, quarterHeight*1);
			this.context.arc(indent + length - quarterHeight, quarterHeight * 1.5, 0.75 * quarterHeight, 3 * Math.PI / 2, (3 * Math.PI / 2)+x1, false);
	this.context.arc(indent + length - quarterHeight, quarterHeight * 1.5, 0.75 * quarterHeight, (1 * Math.PI / 2)-x1, 1 * Math.PI / 2,  false);
	this.context.lineTo(indent + length - quarterHeight, quarterHeight * 2);
			this.context.fillStyle = '#78909A';
			this.context.fill();

			}
	
	this.context.beginPath();
    this.context.arc(indent + quarterHeight, quarterHeight * 1.5, 0.75 * quarterHeight, 3 * Math.PI / 2, Math.PI / 2, true);
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#D1DBBD';
    this.context.stroke();

	this.context.beginPath();
    this.context.arc(this.context.canvas.width - (indent + quarterHeight), quarterHeight * 1.5, 0.75 * quarterHeight, 3 * Math.PI / 2, Math.PI / 2, false);
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#D1DBBD';
    this.context.stroke();
	
	this.context.beginPath();
	this.context.lineWidth = 5;
	this.context.strokeStyle = '#D1DBBD';
		
	this.context.moveTo(indent + quarterHeight, quarterHeight * 0.75);
	this.context.lineTo(this.context.canvas.width - (indent + quarterHeight), quarterHeight * 0.75);
	this.context.stroke();
	this.context.closePath();
	
	this.context.beginPath();
	this.context.lineWidth = 5;
	this.context.strokeStyle = '#D1DBBD';
		
	this.context.moveTo(indent + quarterHeight, quarterHeight * 2.25);
	this.context.lineTo(this.context.canvas.width - (indent + quarterHeight), quarterHeight * 2.25);
	this.context.stroke();
	this.context.closePath();
	*/
	
	this.context.font      = "bold 50px Verdana";
	this.context.fillStyle = "white";
	var str = "Experience Points";
	this.context.fillText(str, 
			(this.context.canvas.width / 2) - (Math.round(this.context.measureText(str).width/2)), 
			2 * quarterHeight-10 );
			
	this.context.font      = "bold 40px Verdana";
	this.context.fillStyle = "white";
	str = jsonObject.points;
	this.context.fillText(str, 
			(this.context.canvas.width / 2) - (Math.round(this.context.measureText(str).width/2)), 
			3 * quarterHeight );
			
			
/*	this.context.font      = "bold 32px Verdana";
	this.context.fillStyle = "white";
	this.context.fillText(jsonObject.points, 
			(this.context.canvas.width / 2) - (Math.round(this.context.measureText(jsonObject.points).width/2)), 
			2 * quarterHeight-10 );
	*/		
			
}

ProgressChart.prototype.simulateStep = function(jsonObject) {
	jsonObject.percent += 0.01;
	if (jsonObject.percent > 1.0) { jsonObject.percent = Math.random();  }
	jsonObject.points = Math.floor(1000000 * jsonObject.percent);
}


//
// StackChart
//
function StackChart(divId, canvasId) {
	this.divId = divId;
	this.canvasId = canvasId;
	
	this.div = $(this.divId);
	this.canvas = $(this.canvasId);
    this.context = this.canvas[0].getContext('2d');
	
    this.canvas.width(900);
  	this.canvas.height(655);
	
   this.div.width(900);
  	this.div.height(655);
	
	this.context.canvas.width  = 900;
	this.context.canvas.height = 655;
	
	
	this.divWidth = this.div.width();
	this.divHeight = this.div.height();
	
	this.canvasWidth = this.canvas.width();
	this.canvasHeight = this.canvas.height();
	
	this.portionedHeight = this.canvasHeight / 19;
};

StackChart.prototype.resize = function() {
}


function roundHundred(value){
   return (value < 100) ? 100 : Math.round(value/100)*100;
}

StackChart.prototype.draw = function(jsonObject) {
	this.context.fillStyle = 'black';
	this.context.globalAlpha=1.0;
	this.context.fillRect(0,0, this.context.canvas.width, this.context.canvas.height);
	

	
	this.context.beginPath();
	this.context.lineWidth = 3;
	this.context.strokeStyle = 'white';
		
	this.context.moveTo(this.portionedHeight+ 15, this.canvasHeight - this.portionedHeight);
	this.context.lineTo(this.canvasWidth - this.portionedHeight/2, this.canvasHeight - this.portionedHeight);
	this.context.stroke();
	this.context.closePath();
	
	this.context.beginPath();
	this.context.lineWidth = 3;
	this.context.strokeStyle = 'white';
		
	this.context.moveTo(this.portionedHeight + 15, this.canvasHeight - this.portionedHeight);
	this.context.lineTo(this.portionedHeight + 15, 1.5 * this.portionedHeight);
	this.context.stroke();
	this.context.closePath();
	
	c = (this.canvasHeight - this.portionedHeight - 1.5 * this.portionedHeight) / 2;
	
	this.context.save();
	this.context.translate(this.portionedHeight - 15  , c + (Math.round(this.context.measureText("Experience Points").width/2)));
	this.context.rotate(-90 *Math.PI/180.0);
	this.context.textAlign = "center";
	this.context.font      = "bold 20px Verdana";
	this.context.fillStyle = "white";
	this.context.fillText("Experience Points", 0, 0);
	this.context.restore();
	
	var highestMonth = 0;
	for (var x = 0; x < 12; x++) {
		if (jsonObject[x].experiences.length > 0) {
			highestMonth = (jsonObject[x].experiences[0].count > highestMonth) ? jsonObject[x].experiences[0].count : highestMonth;
		//	console.debug("jsonObject[x].experiences[0].count = " + jsonObject[x].experiences[0].count);
		}
	}
	
		//	console.debug("highestMonth = " + highestMonth);
	highestMonth = roundHundred(highestMonth);
		//	console.debug("highestMonth = " + highestMonth);
	
	var pixelsPerScore = (this.canvasHeight - this.portionedHeight - 3.75 * this.portionedHeight) / highestMonth;
	
	for (var x = 0; x <= highestMonth; x += 100) {
		this.context.beginPath();
		this.context.lineWidth = 3;
		this.context.strokeStyle = 'white';
			
		this.context.moveTo(this.portionedHeight + 15, this.canvasHeight - this.portionedHeight - x * pixelsPerScore);
		this.context.lineTo(this.portionedHeight + 5, this.canvasHeight - this.portionedHeight - x * pixelsPerScore);
		this.context.stroke();
		this.context.closePath();
	}
	for (var x = 0; x <= highestMonth; x += 50) {
		this.context.beginPath();
		this.context.lineWidth = 3;
		this.context.strokeStyle = 'white';
			
		this.context.moveTo(this.portionedHeight + 15, this.canvasHeight - this.portionedHeight - x * pixelsPerScore);
		this.context.lineTo(this.portionedHeight + 10, this.canvasHeight - this.portionedHeight - x * pixelsPerScore);
		this.context.stroke();
		this.context.closePath();
	}

	
	
	this.spaceWidth = ((this.canvasWidth - this.portionedHeight/2) - this.portionedHeight) / (12 + 13 * .5);
	
	var s = this.portionedHeight + this.spaceWidth / 2;
	
	var cIndex = 0;
	
	for (var x = 0; x < 12; x++) {
		if (jsonObject[x].experiences.length > 0) {
			this.context.fillStyle = "#78909A";
			//console.debug("jsonObject[x].experiences[0].count = " + jsonObject[x].experiences[0].count);
			//console.debug("pixelsPerScore = " + pixelsPerScore);
			//console.debug("this.canvasHeight - this.portionedHeight - jsonObject[x].experiences[0].count * pixelsPerScore = " + (this.canvasHeight - this.portionedHeight - jsonObject[x].experiences[0].count * pixelsPerScore));
			this.context.fillRect(s, this.canvasHeight - this.portionedHeight - jsonObject[x].experiences[0].count * pixelsPerScore, 
								  this.spaceWidth, jsonObject[x].experiences[0].count * pixelsPerScore);
			this.context.strokeStyle = 'white';
			this.context.lineWidth = 3;
			this.context.strokeRect(s, this.canvasHeight - this.portionedHeight - jsonObject[x].experiences[0].count * pixelsPerScore, 
								  this.spaceWidth, jsonObject[x].experiences[0].count * pixelsPerScore);
								  
								  
			this.context.font      = "bold 16px Verdana";
			this.context.fillStyle = "white";
		
			if (jsonObject[x].experiences[0].count > 0) {
				this.context.fillText(jsonObject[x].experiences[0].count, s+5, 
					this.canvasHeight - this.portionedHeight - jsonObject[x].experiences[0].count * pixelsPerScore - 5);
			}
					  
		}
							  
/*		
		if ((x == 1) || (x == 4) || (x == 8)) {
			switch(x) {
				case 1: this.context.fillStyle = "#78909A"; upperLabel = "Games"; lowerLabel = "Accessed"; break;
				case 4: this.context.fillStyle = "#91AA9D"; upperLabel = "Videos"; lowerLabel = "Accessed"; break;
				case 8: this.context.fillStyle = "#D1DBBD"; upperLabel = "Slide/Course"; lowerLabel = "Accessed"; break;
			}
			this.context.fillRect(s, this.portionedHeight, 0.75 * this.spaceWidth, 0.75 * this.portionedHeight);
			this.context.strokeStyle = 'white';
			this.context.lineWidth = 3;
			this.context.strokeRect(s, this.portionedHeight, 0.75 * this.spaceWidth, 0.75 * this.portionedHeight);
			
			this.context.font      = "bold 16px Verdana";
			this.context.fillStyle = "white";
			this.context.fillText(upperLabel, s + 0.75 * this.spaceWidth + 10, 10 + this.portionedHeight);
			this.context.fillText(lowerLabel, s + 0.75 * this.spaceWidth + 10, 10 + this.portionedHeight + 25);

			
			
			
		}
		*/
		
		this.context.font      = "bold 16px Verdana";
		this.context.fillStyle = "white";
		
		this.context.fillText(jsonObject[x].month, s+5, this.canvasHeight - this.portionedHeight+15);
		s += 1.5 * this.spaceWidth;
	}

}

StackChart.prototype.simulateStep = function(jsonObject) {
	addOrUpdate = Math.floor(Math.random() * 2);
	
	
	monthUpdate = Math.floor(Math.random() * 12);
	if (addOrUpdate < 1) {
		if (jsonObject[monthUpdate].videos.length > 0) {
			vNum = Math.floor(Math.random() * (jsonObject[monthUpdate].videos.length - 1));
			jsonObject[monthUpdate].videos[vNum].status++;
			if (jsonObject[monthUpdate].videos[vNum].status > 2) jsonObject[monthUpdate].videos[vNum].status = 2;
		}
	} else {
		if (jsonObject[monthUpdate].videos.length < 12) {
			s = { status: 0, video: "Video 1"};
			s.status = Math.floor(Math.random() * 2);
			jsonObject[monthUpdate].videos.push(s );

		}
	}
	
}


//
// BurstChart
//
function BurstChart(divId, canvasId) {
	this.divId = divId;
	this.canvasId = canvasId;
	
	this.div = $(this.divId);
	this.canvas = $(this.canvasId);
    this.context = this.canvas[0].getContext('2d');
	
	this.div.width(645);
  	this.div.height(500);
	
    this.canvas.width(645);
  	this.canvas.height(500);
	
	this.context.canvas.width  = 645;
	this.context.canvas.height = 500;
	
	
	this.divWidth = this.div.width();
	this.divHeight = this.div.height();
	
	this.canvasWidth = this.canvas.width();
	this.canvasHeight = this.canvas.height();
	
	
	this.div.height(520);
  	this.canvas.height(520);
	this.context.canvas.height = 520;

	
	this.centerX = this.canvasHeight / 2+50;
	this.centerY = this.canvasHeight / 2;
	
	this.outterRadius = (this.canvasHeight-60)/2;
	this.innerRadius = (this.canvasHeight-60)/20;
	
	this.radiusLength = this.outterRadius - this.innerRadius;
	
	//console.debug("dW:" + this.divWidth + ", dH:" + this.divHeight);
	//console.debug("cW:" + this.canvasWidth + ", cH:" + this.canvasHeight);
	//console.debug("cW:" + this.context.canvas.width + ", cH:" + this.context.canvas.height);
	//console.debug("centerX:" + this.centerX + ", centerY:" + this.centerY);
};

BurstChart.prototype.resize = function() {
}

BurstChart.prototype.countEnabledSectors = function(sectors) {
	var c = 0;
	for (var x = 0; x < sectors.length; x++) {		
		if (sectors[x].isEnabled[AxBsystem]) { c++; }
	}
	return c;
}

BurstChart.prototype.draw = function(jsonObject) {
	this.context.fillStyle = 'black';
	this.context.globalAlpha=1.0;
	this.context.fillRect(0,0, this.context.canvas.width, this.context.canvas.height);
	
	this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, this.outterRadius, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'black';
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.strokeStyle = 'green';
    this.context.stroke();
	
	var startingRadian = Math.PI / 2;
	var enabledSectorCount = this.countEnabledSectors(jsonObject.sectors);

	var sectorCount = jsonObject.sectors.length;
	var sectorWidth = 360 / enabledSectorCount;
	

	
	var c = 0;
	for (var x = 0; x < sectorCount; x++) {		
		if (jsonObject.sectors[x].outterText == "-9999") { continue; }
		
		if ((jsonObject.sectors[x].isEnabled[AxBsystem])) {
			//console.debug("sector#: " + x);
			this.drawSector(sectorInfo[x], jsonObject.sectors[x], startingRadian, sectorWidth);
			startingRadian += (sectorWidth * Math.PI / 180.0);
			c++;
		}
	}

		this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, this.innerRadius, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'white';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'white';
    this.context.stroke();

	
   this.context.fillStyle = 'green';
    this.context.fillRect(50, this.divHeight-5, 15, 15);

	this.context.font      = "16px Verdana";
	this.context.fillStyle = "white";
	this.context.fillText("Highest Score Onboard", 80, this.divHeight+8);
	
	
   this.context.fillStyle = 'red';
    this.context.fillRect(this.divWidth/2+50, this.divHeight-5, 15, 15);

	this.context.font      = "16px Verdana";
	this.context.fillStyle = "white";
	this.context.fillText("My Highest Score", this.divWidth/2+80, this.divHeight+8);
	
}

BurstChart.prototype.drawSector = function(sectorInfo, s, startingRadian, sectorWidth) {
	this.drawSectorFill(sectorInfo, s, startingRadian, sectorWidth);
	this.drawSectorOutline(sectorInfo, s, startingRadian, sectorWidth);
}


BurstChart.prototype.drawSectorOutline = function(sectorInfo, s, startingRadian, sectorWidth) {
	var xInner1 = this.centerX + this.innerRadius * Math.cos(startingRadian-1 * Math.PI / 180.0);
	var yInner1 = this.centerY - this.innerRadius * Math.sin(startingRadian-1 * Math.PI / 180.0);
	
	var xOutter1 = this.centerX + (this.innerRadius + s.percent * this.radiusLength) * Math.cos(startingRadian-1 * Math.PI / 180.0);
	var yOutter1 = this.centerY - (this.innerRadius + s.percent * this.radiusLength) * Math.sin(startingRadian-1 * Math.PI / 180.0);
	
	this.context.beginPath();
	this.context.lineWidth = 5;
	this.context.strokeStyle = 'black';
		
	this.context.moveTo(xInner1, yInner1);
	this.context.lineTo(xOutter1, yOutter1);
	this.context.stroke();
	this.context.closePath();
	
	var aRad = startingRadian + sectorWidth * Math.PI / 180.0;
	
	var xInner2 = this.centerX + this.innerRadius * Math.cos(aRad+1 * Math.PI / 180.0);
	var yInner2 = this.centerY - this.innerRadius * Math.sin(aRad+1 * Math.PI / 180.0);
	
	var xOutter2 = this.centerX + (this.innerRadius + s.percent * this.radiusLength) * Math.cos(aRad+1 * Math.PI / 180.0);
	var yOutter2 = this.centerY - (this.innerRadius + s.percent * this.radiusLength) * Math.sin(aRad+1 * Math.PI / 180.0);
	
	
	this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, (this.innerRadius + s.percent * this.radiusLength)-2, 2 * Math.PI - (startingRadian - 1 * Math.PI / 180.0), 2 * Math.PI - (aRad+1 * Math.PI / 180.0), true);
    this.context.lineWidth = 5;
    this.context.strokeStyle = s.outterArcColor;
    this.context.stroke();
	
	
	var xOutter3 = this.centerX + (this.innerRadius + 30) * Math.cos(startingRadian+sectorWidth/2 * Math.PI / 180.0);
	var yOutter3 = this.centerY - (this.innerRadius + 30) * Math.sin(startingRadian+sectorWidth/2 * Math.PI / 180.0);

	
	this.context.font      = "bold 12px Verdana";
	this.context.fillStyle = (s.innerText > -1000)? "#757573" : "black"; //"#000000";
	this.context.fillText(s.innerText, xOutter3 - (Math.round(this.context.measureText(s.innerText).width/2)) , yOutter3);

	var xOutter3 = this.centerX + (this.innerRadius + this.radiusLength + sectorInfo.outterTextRadiusOffset) * Math.cos(startingRadian+sectorWidth/2 * Math.PI / 180.0);
	var yOutter3 = this.centerY - (this.innerRadius + this.radiusLength + sectorInfo.outterTextRadiusOffset) * Math.sin(startingRadian+sectorWidth/2 * Math.PI / 180.0);
	
	this.context.beginPath();
	this.context.lineWidth = 5;
	this.context.strokeStyle = 'black';
		
	this.context.moveTo(xInner2, yInner2);
	this.context.lineTo(xOutter2, yOutter2);
	this.context.stroke();
	this.context.closePath();
	
	if (s.outterText != 0) {
		this.context.save();
		this.context.translate(xOutter3 - (Math.round(this.context.measureText(s.outterText).width/2)) , yOutter3);
		this.context.rotate(sectorInfo.outterRotation *Math.PI/180.0);
		this.context.textAlign = "center";
		this.context.font      = "bold 20px Verdana";
		this.context.fillStyle = sectorInfo.floodColor;
		this.context.fillText(s.outterText, 0, 0);
		this.context.restore();
	}
 

	
}


BurstChart.prototype.drawSectorFill = function(sectorInfo, s, startingRadian, sectorWidth) {
	xInner1 = this.centerX + this.innerRadius * Math.cos(startingRadian-1 * Math.PI / 180.0);
	yInner1 = this.centerY - this.innerRadius * Math.sin(startingRadian-1 * Math.PI / 180.0);
	
	xOutter1 = this.centerX + (this.innerRadius + s.percent * this.radiusLength) * Math.cos(startingRadian-1 * Math.PI / 180.0);
	yOutter1 = this.centerY - (this.innerRadius + s.percent * this.radiusLength) * Math.sin(startingRadian-1 * Math.PI / 180.0);
	
	this.context.beginPath();
	this.context.lineWidth = 1;
		
	this.context.moveTo(xInner1, yInner1);
	this.context.lineTo(xOutter1, yOutter1);
	
	aRad = startingRadian + sectorWidth * Math.PI / 180.0;

	//console.debug("s.percent = " + s.percent);
	
	//console.debug("inner: " + s.innerText + " outter: " + s.outterText + " percent: " + s.percent + " " + this.innerRadius + " " +  this.radiusLength);

	this.context.arc(this.centerX, this.centerY, (this.innerRadius + s.percent * this.radiusLength)-2, 
		2 * Math.PI - (startingRadian-1 * Math.PI / 180.0), 
		2 * Math.PI - (aRad +1 * Math.PI / 180.0), true);
	
	xInner2 = this.centerX + this.innerRadius * Math.cos(aRad+1 * Math.PI / 180.0);
	yInner2 = this.centerY - this.innerRadius * Math.sin(aRad+1 * Math.PI / 180.0);
	
	xOutter2 = this.centerX + (this.innerRadius + s.percent * this.radiusLength) * Math.cos(aRad+1 * Math.PI / 180.0);
	yOutter2 = this.centerY - (this.innerRadius + s.percent * this.radiusLength) * Math.sin(aRad+1 * Math.PI / 180.0);
	
	this.context.lineTo(xInner2, yInner2);
	
    this.context.arc(this.centerX, this.centerY, this.innerRadius, 2 * Math.PI - aRad, 2 * Math.PI - startingRadian, false);

    this.context.fillStyle = sectorInfo.floodColor;
    this.context.fill();
	this.context.closePath();
}



BurstChart.prototype.populateTable = function(jsonObject) {
	sectorCount = jsonObject.sectors.length;
	tableObject = $("#gameTable"); //.find('tbody');
	
	s = "<table id='gameTable' class='gameTable'>";
	s += "<tr></tr>";
	s += "<tr class='headerTr'><td class='gameTd'>Game</td><td class='statusTd'>Completion/<br>Status</td><td class='scoreTd'>My<br>Score</td></tr>";
	
	
	
	for (x = 0; x < sectorCount; x++) {		
		if (jsonObject.sectors[x].isEnabled[AxBsystem]) {
			s1 = "<tr id='row" + (x+1) + "' class='row" + (x+1) + "Tr'><td>" + 
										jsonObject.sectors[x].game + 
										"</td><td>" + 
										StatusEnumToString(jsonObject.sectors[x].status) + 
										"</td><td>" + 
										((scores[x].ownScore != -9999) ? scores[x].ownScore : " ") + //jsonObject.sectors[x].innerText + 
										"</td></tr>";
			s += s1;
		}
	}
	s += "</table>";
	//console.debug(s);
	$("#tableDiv").html(s);
}

BurstChart.prototype.simulateStep = function(jsonObject) {
	addOrUpdate = Math.floor(Math.random() * 2);
	
//	$("#row6").remove();
//	$("#row5").remove();
//	$("#row4").remove();
//	$("#row3").remove();
//	$("#row2").remove();
	
	for (x = (jsonObject.sectors.length-1); x >= 0 ; x--) {
		//$("#row" + (x+1)).remove();
	}
	
	   //$("#gameTable").find("tr:gt(1)").remove();

	
	
	if (addOrUpdate < 1) {
		if (jsonObject.sectors.length > 0) {
			sNum = Math.floor(Math.random() * (jsonObject.sectors.length - 1));
			jsonObject.sectors[sNum].percent += 10;
			if (jsonObject.sectors[sNum].percent > 100) { 	jsonObject.sectors[sNum].percent = 100; }
		}
	} else {
		if (jsonObject.sectors.length < 6) {
			sNum = Math.floor(Math.random() * (burstObjectOriginal.sectors.length - 1));
			jsonObject.sectors.push(burstObjectOriginal.sectors[sNum]);
			burstObjectOriginal.sectors.splice(sNum, 1);
		}
	}

	
}


