const mongoose=require("mongoose")
const Document=require("./Document")

mongoose.connect("mongodb://localhost/google_docs")

const io = require("socket.io")(3002, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const defaultVal=""


io.on("connection", (socket) => {
  socket.on("get-document",async documentId=>{
    const document=await findOrCreateDoc(documentId)
    
    socket.join(documentId)
    socket.emit("load-document",document.data)
  
  socket.on("send-changes", (delta) => {
  socket.broadcast.to(documentId).emit("receive-changes",delta)
  });
  socket.on("save-document",async data=>{
    await Document.findByIdAndUpdate(documentId,{data:data})
  })
});
})

async function findOrCreateDoc(id){
  if(!id) return

  const document=await Document.findById(id)
  if(document) return document
  return await Document.create({_id:id,data:defaultVal})
}