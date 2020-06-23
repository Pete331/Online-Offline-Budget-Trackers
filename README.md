# Offline Budget Tracker
This application allows the user to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, the application populates the total when brought back online. The Data is stored using MongoDB with models being created with mongoose.  
This is done by using service workers to store appropriate files to in cache storage for offline usage. The App also can be installed on the device as it covers off on the requiremetns to do so. The below image shows the lighthouse run rseults from before and after optimisation, It shows that the app is installable.
![Combined Picture](https://raw.githubusercontent.com/Pete331/Online-Offline-Budget-Trackers/master/screenshots/combined.png "Created by Pete331")  
![GitHub last commit](https://img.shields.io/github/last-commit/Pete331/Online-Offline-Budget-Trackers)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Pete331/Online-Offline-Budget-Trackers)
![GitHub repo size](https://img.shields.io/github/repo-size/Pete331/Online-Offline-Budget-Trackers)
![GitHub top language](https://img.shields.io/github/languages/top/Pete331/Online-Offline-Budget-Trackers)  
## Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests

## Installation
There is an instance of this server running on a heroku server - it can be found at: [Budget-Tracker](https://budget-tracker331.herokuapp.com/) (budget items will be saved in this instance of the heroku server)

If looking to run server on a local host
- Install dependencies with ‘npm i’ on your terminal in the repo’s directory
- Make sure MongoDB is installed and running
- Run ‘npm start’ on your terminal in the repo’s directory to begin local server
- Access from http://localhost:5000/
## Usage
You may use this to track your budget.
## License
MIT License
## Contributing
Feel free to submit any pull requests
### Click on profile picture below to see Pete331's Github profile
[![Pete331's Profile Picture](https://avatars2.githubusercontent.com/u/53825841?v=4&s=200 "Created by Pete331")](https://github.com/Pete331)  
![GitHub followers](https://img.shields.io/github/followers/Pete331?style=social)  