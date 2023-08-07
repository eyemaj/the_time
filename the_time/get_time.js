function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate a color based on the time of day
    const red = Math.floor(255 * (hours / 23));
    const green = Math.floor(255 * ((hours % 12) / 12));
    const blue = Math.floor(255 * (1 - (hours / 23)));

    // Convert hours to 12-hour format and determine AM/PM
    let formattedHours = hours % 12;
    if (formattedHours === 0) {
      formattedHours = 12; 
    }
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Apply the calculated color according to time of day to the background
    const background = document.querySelector('.background');
    background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
    // Display the digital time to the foreground
    const clock = document.getElementById('clock');
    //clock.textContent = `${String(hours).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    clock.textContent = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Run the initial update
  updateTime();
