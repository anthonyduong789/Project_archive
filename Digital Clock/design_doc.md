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
