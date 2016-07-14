#Run
- mongod
- npm start

# 3WireChatApp
Collaborative web app to Chat, Layout(QuickSketch), and Estimate board-feet for woodworking projects.
- MEAN stack with Socket.io
- Passport Local for Authentication

#Login Express Frontend 
- main.html 
- login.html (already a user)
- signup.html (new user)
- redirect to dashboard.html (landing page for Angular app) 

#Dashboard 
###Chat 
- socket.io connect 
- saves messages to MongoDB/3WireChat {messages}
- uploads old messages if any available. 
- chat name at bottom left 
- chat window sized to fit max height available. 
- message screen scrollable 

###Draw 
- looking to create quick sketch 
- inspiration sketch.io/sketchpad 
- save projects locally or to MongoDB for print/use 

###Calc 
- Describe Board Feet 

- Calculator 
  - Piece name (ie. Table Legs) 
  - Thickness (4/4, 8/4, etc.) 
  - Width 
  - Length 
  - Number of pieces needed  
  - Add to List 

- Project List 
  - Project Title 
  - Appended Calculations and Names 
  - Total Board Feet 
  - Displays 