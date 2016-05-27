function ActivityResult(Location, Total, Percentage){
	if (Total > 0) {
    	document.getElementById(Location).innerHTML = Percentage +"%";
 
    }
 	else{
    	document.getElementById(Location).innerHTML = "N/A";
  	}
}

function AvgMeanResult(Location, Total, Percentage){
	if (Total > 0) {
    	document.getElementById(Location).innerHTML = Percentage +"/100";
    }
  	else{
    	document.getElementById(Location).innerHTML = "N/A";
  }
}

function AvgCalc(){
	var AvgCorrect = document.getElementsByClassName("GradeCorrectBox");
	var AvgTotal = document.getElementsByClassName("GradeTotalBox");
	var AvgCorrectCounter = 0;
	var AvgTotalCounter =0;

 	for(i = 0; i<AvgCorrect.length; i++){
   		if (AvgTotal[i].value > 0){
    		AvgCorrectCounter = AvgCorrectCounter + parseFloat(AvgCorrect[i].value);
    		AvgTotalCounter = AvgTotalCounter + parseFloat(AvgTotal[i].value);
   		}
 	}
	var AvgPercentage = parseFloat((AvgCorrectCounter/AvgTotalCounter)*100).toFixed(1);
	AvgMeanResult("AvgMeanPercentage", AvgTotalCounter, AvgPercentage);
}

function MeanCalc(){
	var AvgCorrect = document.getElementsByClassName("GradeCorrectBox");
	var AvgTotal = document.getElementsByClassName("GradeTotalBox");
	var AvgPercentage= 0;
	var AvgTotalCounter = 0;

	for(i=0; i<AvgCorrect.length; i++){
  		if (AvgTotal[i].value > 0){
      		AvgTotalCounter++;
      		AvgPercentage = AvgPercentage + ((parseFloat(AvgCorrect[i].value)/parseFloat(AvgTotal[i].value))*100);
    	}
   	}
   	AvgPercentage = parseFloat(AvgPercentage/AvgTotalCounter).toFixed(1);
 	AvgMeanResult("AvgMeanPercentage", AvgTotalCounter, AvgPercentage);
}

function ActivityPercent(Correct,Total,Location){
	
	var ActivityCorrect = document.getElementById(Correct).value;
	var ActivityTotal = document.getElementById(Total).value;
	var ActivityPercentage = parseFloat((ActivityCorrect/ActivityTotal)*100).toFixed(1);
	ActivityResult(Location, ActivityTotal, ActivityPercentage);
}


