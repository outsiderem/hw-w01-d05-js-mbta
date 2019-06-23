const stopsBetweenStations = function(startLine, startStation, endLine, endStation){

    stations = {
        lines: ['Red', 'Green', 'Orange'],

        Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        
        Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        
        Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    }

    let stops = 0;

    for (var i=0; i<stations.lines.length; i++){



      if (stations.lines.includes(startLine)){
        if (stations.lines.includes(endLine))
        {
    console.log(`Rider boards the train at ${startLine} Line and ${startStation} Station.`); 
    }   else 
     { 
                 return `Incorrect start line or end line. Please enter a valid line and try again.`;
      }
      }    
    
    if (startLine === 'Red'){
      for (var i=0; i<stations.Red.length; i++){      
      if (stations.Red.includes(startStation))
        { stops++; } 
        } 
      }
    }

    
    console.log(`Number of stops: ${stops}`);

 }



stopsBetweenStations('Red', 'Alewife', 'Orange', 'Alewife');