# umnmajormaps
Automatically parses UMN Class Data and creates major maps that show classes and prerequisites.

HOW TO USE:

Demo File: https://imgur.com/gallery/gfV4dzL

Multiple Arrows of the same color that lead to a class indicate substitutable prerequisites (i.e 1103 or 1113 for CSCI 1913)

To create a major map using the files, use parse.py to get all course information for a major, copy it into sketch.js and save it as a variable (i.e csciPrereqs = ), change the dept variable to the department code and pass the prereq array into "parseFromArray". Then run index.html to display the map. (NOTE: Arrow colors are randomized so you can reset to get a series of colors with good contrast.)

File Breakdown:

parse.py: Uses python and BeautifulSoup to parse course information from the UMN course catalog website, printing it to the terminal in a form that can be copied into the map creator javascript file

sketch.js: Uses javascript to create Major Maps from the passed in information. Course information is extracted into a Course object using a custom written recursive function, then a custom written algorithm places courses in optimal locations before using p5.js visual functions to display courses in a grid on the canvas. 
