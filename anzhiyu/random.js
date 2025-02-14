var posts=["2025/01/21/git使用/","2025/02/12/hello-world/","2025/02/07/笔记本780M部署deepseek-r1指北/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };