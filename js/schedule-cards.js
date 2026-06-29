{
  const contents = [
    {date: "6/7", week: "日", time: "10:00~16:00"},
    {date: "6/21", week: "日", time: "10:00~16:00"},
    {date: "7/26", week: "日", time: "10:00~16:00"},
    {date: "8/1", week: "土", time: "10:00~16:00"},
    {date: "8/15", week: "土", time: "10:00~16:00"},
    {date: "8/16", week: "日", time: "10:00~16:00"}
  ];
  let text = "";
  contents.forEach((e) => {
    text += `
        <div class="col-12 col-sm-6 col-md-4">
          <div class="skd-card shadow">
            <div class="skd-year">2026</div>
            <div class="skd-date">${e.date}</div>
            <div class="skd-week">${e.week}</div>
            <div class="skd-link">${e.time}</div>
          </div>
        </div>`
  });
  text = `
  <div class="container pt-4">
    <div class="row">
      ${text}
    </div>
  </div>
  `;
  let skdCards = document.querySelector("#skd-cards");
  skdCards.insertAdjacentHTML('afterbegin', text);

  
  const cards = document.querySelectorAll(".skd-card");

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
            transform: ['translateY(25px)', 'translateY(0)'],
            filter: ['blur(3px)', 'blur(0)']
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
    threshold: 0.2
  });

  cards.forEach((card) => observer.observe(card));

}