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
    
## 2. Extra improvements

###  A) Bonus Driver
![bonus driver](https://user-images.githubusercontent.com/26329771/51450302-37814380-1cfe-11e9-98dc-5296f7413623.png)

    - Users can enter new position of the bonus driver.
    - Input text box validates input ranges.
    - Server updates the porition as soon as the x, y coordinates are changed regressless of the app running.
    
    
###  B) Timer
![timer](https://user-images.githubusercontent.com/26329771/51450331-5bdd2000-1cfe-11e9-844a-cbfb3eb248d6.png)

    - This calculates how long it will take the driver to complete the entire path (all of the legs).
    - This calculates how much time is left for the driver based on their current position.
    - They are displayed at the left-bottom of the screen.
    
    
###  C) Progress slider
![slider](https://user-images.githubusercontent.com/26329771/51450348-6eeff000-1cfe-11e9-9d11-2b62a3cb9b4c.png)

    - This has the visualization update in realtime when you move the slider.
    - Slider show the progress percentage while the driver moves.
    - Socket.io was used for real time communication.
    
    
###  D) Timestamps
![timestamps](https://user-images.githubusercontent.com/26329771/51450367-8038fc80-1cfe-11e9-80ff-979838139bbd.png)

    - This shows timestamps at all the stops.
    - If not passed yet, it shows estimated arrival time.
    

### Full screenshot
![full screen](https://user-images.githubusercontent.com/26329771/51450398-9f378e80-1cfe-11e9-881e-c645e42d03be.png)
