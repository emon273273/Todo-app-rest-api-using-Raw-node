//module wrapper
const handler={}


//requrest response handler
handler.reqResHandler=(req,res)=>{

    res.end("hello world")
}

module.exports=handler;