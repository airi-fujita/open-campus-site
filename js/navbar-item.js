{
  const contents = [
    {title:"開催日時", href:"schedule"},
    {title:"OCの魅力", href:"about-oc"},
    {title:"プログラム", href:"program"},
    {title:"学科紹介", href:"course"},
    {title:"よくあるご質問", href:"question"}
  ];

  let text="";
  contents.forEach((e) => {
    text += 
        `<li class="nav-item mx-1">
            <a class="nav-link" href="#${e.href}">${e.title}</a>
          </li>`
  });

  let items = document.querySelector("#navbar-items");
  items.insertAdjacentHTML('afterbegin', text);
}