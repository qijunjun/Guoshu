<?php
//禁止客户端缓存数据
header("Cache-Control:no-cache,must-revalidate");
   if(isset($_POST['submit'])){
        //获取文件扩展名(jpg、png等)
        $extname = strrchr($_FILES['photo']['name'],'.')
        //生成新的文件名
        $filename = time().$extname;
        //文件上传
        copy($_FILES['tmp_name'],'upload/'.$filename);
        //如果上传成功的话，$filename返回的是120675321.jpg
        将js语句输到iframe中，在iframe中执行parent.callback
        //调用父窗口中的callback函数
        echo "<script>parent.callback($filename);</script>";
   }
?>