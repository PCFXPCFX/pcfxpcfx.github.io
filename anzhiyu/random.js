var posts=["2025/03/04/GDB学习指北/","2025/01/22/git使用指北/","2025/07/21/一次GitHub学生认证记录/","2025/05/10/双指针，滑动窗口/","2025/02/08/笔记本780M部署deepseek-r16b指北/","2025/07/20/线性代数的本质/","2025/03/08/Markdown学习指北/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };