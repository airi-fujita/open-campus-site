{
  const contents = [
    {title: "調理師学科", img: "./img/course_chef.png", color: "danger",
      description: "和食・洋食・中国料理の調理技術を基礎から実践的に学び、プロの現場で活躍できる調理師を目指します。<br>調理技術はもちろん、食材の知識や衛生管理も習得できます。"},
    {title: "製菓学科", img: "./img/course_pastry.png", color: "warning",
      description: "ケーキ・パン・和菓子など幅広い製菓技術を学び、表現力とセンスを磨きます。<br>好きを仕事にしたいあなたを全力でサポートします。"},
    {title: "栄養士学科", img: "./img/course_nutrition.png", color: "success",
      description: "栄養学と調理技術を学び、健康を支える食のプロを育成。<br>病院や保育園、福祉施設など幅広い分野で活躍できる力を身につけます。"}
  ];

  let text = "";
  contents.forEach((e) => {
    text += `
        <div class="card mb-5 rounded-30px border-${e.color}" >
          <div class="row g-0">
            <div class="col-md-6">
              <img src=${e.img} class="img-fluid custom-img-size h-100 w-100 object-fit-cover" alt="">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title text-${e.color} mb-4">${e.title}</h5>
                <p class="card-text">${e.description}</p>
              </div>
            </div>
          </div>
        </div>`
  });

  text = `
      <div class="container pt-4">
        ${text}
      </div>`;

  let container = document.querySelector("#course-cards");
  container.insertAdjacentHTML('afterbegin', text);

  const cards = document.querySelectorAll(".card");

    // 順番を保存
  cards.forEach((card, index) => {
    card.dataset.index = index;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        const i = entry.target.dataset.index;
        
        entry.target.animate(
          {
            opacity: [0, 1],
            transform: ['translateX(-50px)', 'translateX(0)'],
            filter: ['blur(5px)', 'blur(0)']
          },
          {
            duration: 500,
            delay: i * 150,
            fill: 'forwards'
          }
        );
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach((card) => observer.observe(card));
}