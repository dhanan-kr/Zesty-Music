

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1022518177311248415", ""], 
  mongodbUri : "mongodb+srv://Dj_:dhananjay@cluster0.vroio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "d57c20af87be4865a9c7b39b5acf1938",
  spotifyClientSecret : "88807700bc5f4aff824a04c9fe129642",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
