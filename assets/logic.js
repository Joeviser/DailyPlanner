// The app should:

// Display the current day at the top of the calender when a user opens the planner.

// Present time blocks for standard business hours when the user scrolls down.

// Color-code each time block based on past, present, and future when the time block is viewed.

// Allow a user to enter an event when they click a time block

// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page

//------------------------------------------------------------------------------------------------------------------------------------------------------//
//Display the current day at the top of the calender when a user opens the planner---->Use Day.js library to work with date and time
//It gives you the time when the page is loaded
function displayTime (){
    const today = dayjs();
    const now= dayjs().format("dddd, MMM DD YYYY  [at] HH:mm:ss");
    $("#currentDay").text(now);
}
//Call the display time function-->it will calling it once each second--->it'll keep running the clock.
setInterval(displayTime,1000);


// Set variables
 
    //Descriptions (<textarea>)
    const descrp9 = $('#div9');//9am
    const descrp10 = $('#div10');//10am
    const descrp11 = $('#div11');//11am
    const descrp12 = $('#div12');//12am  
    const descrp1 = $('#div1');//1pm
    const descrp2 = $('#div2');//2pm
    const descrp3 = $('#div3');//3pm
    const descrp4 = $('#div4');//4pm
    const descrp5 = $('#div5');//5pm
   
    //Buttons 
    const button9 = $('#btn9');//9am
    const button10 = $('#btn10');//10am
    const button11 = $('#btn11');//11am
    const button12 = $('#btn12');//12am
    const button1 = $('#btn1');//1pm
    const button2 = $('#btn2');//2pm
    const button3 = $('#btn3');//3pm
    const button4 = $('#btn4');//4pm
    const button5 = $('#btn5');//5pm

    var descriptions = [descrp9, descrp10, descrp11, descrp12, descrp1, descrp2, descrp3, descrp4, descrp5]; 

    var buttons = [button9, button10, button11, button12, button1, button2, button3, button4, button5];

    var inputs = ['Hour:9am', 'Hour:10am', 'Hour:11am', 'Hour:12am', 'Hour:1pm', 'Hour:2pm', 'Hour:3pm', 'Hour:4pm', 'Hour:5pm']; 

    // Persist events between refreshes of a page (Get Values from Local Storage)
    for (let i = 0; i < descriptions.length && inputs.length; i++) {
        descriptions[i].val(localStorage.getItem(inputs[i]));
    };



// Save the event in local storage when the save button is clicked in that time block.

function store(){
    // Store user inputs in local storage

    for (let i = 0; i < buttons.length; i++){
        buttons[i].on('click', function() {
            event.preventDefault(); 
            for (let i = 0; i < descriptions.length && inputs.length; i++) {    
                if (descriptions[i].val() !== '') {
                     localStorage.setItem(inputs[i], descriptions[i].val());
                }
            }
        });


    }
}
store();

