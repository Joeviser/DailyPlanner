// The app should:

// Display the current day at the top of the calender when a user opens the planner.

// Present time blocks for standard business hours when the user scrolls down.

// Color-code each time block based on past, present, and future when the time block is viewed.

// Allow a user to enter an event when they click a time block

// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page


//Display the current day at the top of the calender when a user opens the planner---->Use Day.js library to work with date and time
//It gives you the time when the page is loaded
function displayTime (){
    const today = dayjs();
    const now= dayjs().format("dddd, MMM DD YYYY  [at] HH:mm:ss");
    $("#currentDay").text(now);
}
//Call the display time function-->it will calling it once each second--->it'll keep running the clock.
setInterval(displayTime,1000);


