const { ipcRenderer } = window.require('electron');




let closeWin=()=>{
    ipcRenderer.invoke('closeAppWin', {
        id: "Main"
    })
}


let getChatRecords=async(chatId)=>{
    let res=await ipcRenderer.invoke('getChatRecords',{chatId:chatId,rangeStart:0,rangeEnd:5});
    return res;
}

let queryChatList=async()=>{
    let res=await ipcRenderer.invoke('queryChatList');
    return res;
}

module.exports={closeWin,queryChatList,getChatRecords}