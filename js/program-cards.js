{
  const contents = [
    {title: "調理実習体験", img: "./img/program_cooking-trial-lesson.jpeg", description: `プロの講師と一緒に本格的な調理に挑戦！
      <br>調理師の仕事の魅力を実践を通して体験できます。`},
    {title: "製菓・スイーツ作り体験", img: "./img/program_pastry-trial-lesson.jpeg", description: `人気のスイーツ作りを通して、
      <br>製菓技術やものづくりの楽しさを学べます。`},
    {title: "模擬授業", img: "./img/program_demo-lesson.jpeg", description: `実際の授業を体験できるプログラムです。
      <br>専門学校ならではの学びや授業の雰囲気を知ることができます。`},
    {title: "キャンパスツアー・学校説明会", img: "./img/program_campus-tour.png", description: `実習室や設備を見学しながら、
      <br>学科の特徴や学校生活について詳しくご紹介します。`}
  ];

  let text = "";
  contents.forEach((e) => {
    text += `
        <div class="col-12 col-sm-12 col-md-6">
          <div class="card mt-5 mb-5 border-0 rounded-30px">
            <img class="card-img-top custom-img-size" src="${e.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title text-warning mb-3">${e.title}</h5>
              <p class="card-text">${e.description}</p>
            </div>
          </div>
        </div>`
  });

  text = `
      <div class="container pt-4">
    <div class="row">
      ${text}
    </div>
  </div>`;

  let cards = document.querySelector("#program-card");
  cards.insertAdjacentHTML('afterbegin', text);
}