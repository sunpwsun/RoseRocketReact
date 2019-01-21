## This file includes a list of extra improvements (or bonuses) available on the page for examiners to test and to make a note.

## 1. How to run
  
###  Run the Backend App first.
  
###  A) Backend App (Node.js)
    1) git clone https://github.com/sunpwsun/RoseRocketNode.git
    2) cd RoseRocketNode
    3) npm install
    4) node rose_rocket_server.js
    
###  B) Frontend App (React and Redux)
    1) git clone https://github.com/sunpwsun/RoseRocketReact.git
    2) cd RoseRocketReact
    3) npm install
    4) npm start
    
## This2. Extra improvements

###  A) Bonus Driver
    - Users can enter new position of the bonus driver.
    - Input text box validates input ranges.
    - Server updates the porition as soon as the x, y coordinates are changed regressless of the app running.
    
    
###  B) Timer
    - This calculates how long it will take the driver to complete the entire path (all of the legs).
    - This calculates how much time is left for the driver based on their current position.
    - They are displayed at the left-bottom of the screen.
    
    
###  C) Progress slider
    - This has the visualization update in realtime when you move the slider.
    - Slider show the progress percentage while the driver moves.
    - Socket.io was used for real time communication.
    
    
###  D) Timestamps
    - This shows timestamps at all the stops.
    - If not passed yet, it shows estimated arrival time.
    
