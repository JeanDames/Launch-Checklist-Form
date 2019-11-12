// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         let int = Math.floor(Math.random()*6);
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[int].name}</li>
            <li>Diameter: ${json[int].diameter}</li>
            <li>Star: ${json[int].star}</li>
            <li>Distance from Earth: ${json[int].distance}</li>
            <li>Number of Moons: ${json[int].moons}</li>
         </ol>
         <img src="${json[int].image}">
         `;
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let status = document.getElementById("launchStatus");
      let faultyList = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      if(pilotName.value==="" || copilotName.value==="" || fuelLevel.value.toString() === "" || cargoMass.value.toString() === ""){
         alert("All fields are required!");
      } else if(isNaN(fuelLevel.value) === true|| isNaN(cargoMass.value) === true || isNaN(pilotName.value) === false || isNaN(copilotName.value) === false){
         alert("Invalid data entered");
      } else if(fuelLevel.value < 10000 && cargoMass.value > 10000){
         faultyList.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for journey";
         cargoStatus.innerHTML = "Cargo mass too high for takeoff";
         status.innerHTML = "Shuttle not ready for launch";
         status.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
      } else if(fuelLevel.value < 10000){
         faultyList.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for journey";
         status.innerHTML = "Shuttle not ready for launch";
         status.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;   
      } else if(cargoMass.value > 10000){
         faultyList.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for takeoff";
         status.innerHTML = "Shuttle not ready for launch";
         status.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;   
      } else {
         status.style.color = "green";
         status.innerHTML = "Shuttle is ready for launch"
      };
      event.preventDefault();
   });
   });
});
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
