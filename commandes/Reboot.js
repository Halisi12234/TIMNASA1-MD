




const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"🌀"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝙏𝙄𝙈𝙉𝘼𝙎𝘼-𝙈𝘿 bot Restarting 📡");

  exec("pm2 restart all");
  

  



})
