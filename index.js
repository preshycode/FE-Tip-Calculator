
const jsonData = fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    let output = '';
    data.forEach(function(user) {
        output += 
        `<div id="${user.day} ">
        <div class="h1" id="h">$${user.amount}</div>
        <div class="h2" id="h2">$${user.amount}</div>
        <div class="days" id="${user.day}-div" style="height:${user.amount*2}px"></div>
        <div class="days2" id="${user.day}-div2" style="height:${user.amount*3}px"></div>
        <p id="${user.day}-text">${user.day}</p>
      </div>`;
    });
    const bar = document.getElementById("bar");
    bar.innerHTML = output;
    
    
    const hover2 = document.querySelectorAll("#h");
    const hover3 = document.querySelectorAll("#h2");
    const hoverDiv = document.querySelectorAll(".days");
    const hoverDiv2 = document.querySelectorAll(".days2");

    for(let i = 0; i<hoverDiv.length; i++) {
      
      hoverDiv[i].addEventListener("mouseover", () => {
        
        hover2[i].style.display = "block";
      })

      hoverDiv[i].addEventListener("mouseout", () => {
        
        hover2[i].style.display = "none";
      })

      hoverDiv2[i].addEventListener("mouseover", () => {
        
        hover3[i].style.display = "block";
      })
     
      hoverDiv2[i].addEventListener("mouseout", () => {
          
        hover3[i].style.display = "none";
      })
    }
    
   
  
});



