var express=require("express"),app=express();app.use("/api",api),app.use("/",express.static(__dirname+"/www")),app.use("/js",express.static(__dirname+"/node_modules/bootstrap/dist/js")),app.use("/js",express.static(__dirname+"/node_modules/jquery/dist")),app.use("/css",express.static(__dirname+"/node_modules/bootstrap/dist/css"));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJ1c2UiLCJhcGkiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiJBQVNBLElBQUlBLFFBQVVDLFFBQVEsV0FDbEJDLElBQU1GLFVBR1ZFLElBQUlDLElBQUksT0FBUUMsS0FDaEJGLElBQUlDLElBQUksSUFBS0gsUUFBUUssT0FBT0MsVUFBWSxTQUN4Q0osSUFBSUMsSUFBSSxNQUFPSCxRQUFRSyxPQUFPQyxVQUFZLG9DQUMxQ0osSUFBSUMsSUFBSSxNQUFPSCxRQUFRSyxPQUFPQyxVQUFZLDhCQUMxQ0osSUFBSUMsSUFBSSxPQUFRSCxRQUFRSyxPQUFPQyxVQUFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vLyBnbG9iYWwgbGlic1xyXG4vLz0gLi4vLi4vYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuLypcclxuKiBDdXN0b20gc2NyaXB0c1xyXG4gKi9cclxuLy89IHBhcnRpYWwvYXBwLmpzXHJcbi8vXHJcblxyXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxudmFyIGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIHByZXBhcmUgc2VydmVyXHJcbmFwcC51c2UoJy9hcGknLCBhcGkpOyAvLyByZWRpcmVjdCBBUEkgY2FsbHNcclxuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvd3d3JykpOyAvLyByZWRpcmVjdCByb290XHJcbmFwcC51c2UoJy9qcycsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzJykpOyAvLyByZWRpcmVjdCBib290c3RyYXAgSlNcclxuYXBwLnVzZSgnL2pzJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QnKSk7IC8vIHJlZGlyZWN0IEpTIGpRdWVyeVxyXG5hcHAudXNlKCcvY3NzJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzJykpOyAvLyByZWRpcmVjdCBDU1MgYm9vdHN0cmFwIl19