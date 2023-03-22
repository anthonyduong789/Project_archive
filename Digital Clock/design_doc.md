Overview: this clock will display the time. This will have a stop watch feature that pause the time and also start it again. It will also have a reset option to 0 out the time again.

Design implemenations
html: that will have a label 00: 00: 00 

javascript: 
//intial design
counter:
use a while loop to keep the function continously going.
reponsible for label tag to add a second at a time. I.e this will count the seconds. 
min will be seconds/60 <-rooted so rounding down
hours will be mins/60 <-rooted so rounding down

stop:pause the function so we will stop the while loop 

start: this will start the while loop again

reset: this will 0 out everything.
//design 2
instead of having a while loop we will use setinterval()
which will keep calling the update function
// design 3 
for this design I have encapsalte everything in a startfunction

start function components

1.Event handler that will operate handle when the button is clicked that goes to the control function

[control function]
will use a boolean as a means to see if the timer is in operation if it is not then will set the start the timer by setting a set interval of the update fucntion

else if already in motion it will call stop function to stop the timer

[update]will add a+=1 and update the html page
[stop] will stop the timer and update html page

