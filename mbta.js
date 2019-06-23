const stopsBetweenStations = function(startLine, startStation, endLine, endStation){

    stations = {
        lines: ['Red', 'Green', 'Orange'],

        Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        
        Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        
        Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    }
    let startStops = 0;
    let endStops = 0;

      if (stations.lines.includes(startLine) && stations.lines.includes(endLine)){
    if (startLine === 'Red'){          
      if (stations.Red.includes(startStation))
        {for (var i=0; i<stations.Red.indexOf(startStation); i++)
        { console.log(`Rider boards the train at ${startLine} Line and ${startStation} Station.`);
        startStops++;} } else 
     {      console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }
      if (startLine === 'Green'){          
      if (stations.Green.includes(startStation))
        {for (var i=0; i<stations.Green.indexOf(startStation); i++){
        console.log(`Rider boards the train at ${startLine} Line and ${startStation} Station.`);
        startStops++;}          
      } else 
     { 
                 console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }

    if (startLine === 'Orange'){          
      if (stations.Orange.includes(startStation))
        {for (var i=0; i<stations.Orange.indexOf(startStation); i++){
        console.log(`Rider boards the train at ${startLine} Line and ${startStation} Station.`);
        startStops++;}          
      } else 
     { 
                 console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }  
    
    if (endLine === 'Red'){          
      if (stations.Red.includes(endStation))
        {for (var i=0; i<stations.Red.indexOf(endStation); i++){
        endStops++;}          
      } else 
     { 
                 console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }
      if (endLine === 'Green'){          
      if (stations.Green.includes(endStation))
        {for (var i=0; i<stations.Green.indexOf(endStation); i++){
        endStops++;}          
      } else 
     { 
                 console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }

    if (endLine === 'Orange'){          
      if (stations.Orange.includes(endStation))
        {for (var i=0; i<stations.Orange.indexOf(endStation); i++){
        endStops++;}          
      } else 
     { 
                 console.log(`Incorrect start station or end station. Please enter a valid station and try again.`);
     }
    }
      }  
     else 
     { 
                 console.log(`Incorrect start line or end line. Please enter a valid line and try again.`);
      }    
    

    
    console.log(`Number of stops: ${startStops + endStops}`);
}
stopsBetweenStations('Red', 'Park Street', 'Green', 'Park Street');