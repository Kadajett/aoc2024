#!/bin/bash

# Loop from day 2 to day 30
for i in {2..30}
do
    # Create the directory
    mkdir -p "day$i"
    
    # Copy the template files
    cp dayTemplate/app.js "day$i/app.js"
    touch "day$i/input.txt"
    
    # Replace the placeholder 'N' with the actual day number in app.js
    sed -i "s/readInputFile(N)/readInputFile($i)/" "day$i/app.js"
    
    echo "Created day$i folder with template files"
done