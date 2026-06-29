{
  const contents = [
    {question: "オープンキャンパスへの参加には予約が必要ですか？", answer: "はい、参加には事前予約をお願いしています。特設サイトの申し込みフォームから簡単にお申し込みいただけます。当日参加可能なプログラムもありますが、定員制の体験授業は早めの予約がおすすめです。"},
    {question: "保護者も一緒に参加できますか？", answer: "もちろんご参加いただけます。保護者向け説明会や個別相談コーナーもご用意していますので、学費や就職サポートについてもお気軽にご相談ください。"},
    {question: "一人で参加しても大丈夫ですか？", answer: "はい、お一人で参加される方もたくさんいらっしゃいます。学生スタッフや教職員がしっかりサポートしますので、初めてでも安心してご参加ください。"},
    {question: "当日の服装に指定はありますか？", answer: "制服・私服どちらでも参加可能です。校内を移動しながら体験するプログラムもあるため、動きやすい服装と靴でのご来校をおすすめします。"},
    {question: "オープンキャンパスに必要な持ち物はありますか？", answer: " 特別な持ち物は必要ありませんが、メモが取れる筆記用具やスマートフォンがあると便利です。体験授業に参加される方は、動きやすい服装でお越しください。"}
  ];

  let text = "";
  
  contents.forEach((e, i) => {
    text += `
        <div class="accordion w-100 mb-3" id="basicAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading${i}">
              <button
                class="accordion-button collapsed fw-bold fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapse${i}"
                aria-expanded="false"
                aria-controls="basicAccordionCollapse${i}">
                ${e.question}
              </button>
            </h2>
            <div
              id="basicAccordionCollapse${i}"
              class="accordion-collapse collapse"
              aria-labelledby="heading${i}"
              data-bs-parent="#basicAccordion">
              <div class="accordion-body">
                ${e.answer}
              </div>
            </div>
          </div>
        </div>`
  });

  let cards = document.querySelector("#question-accordion");
  cards.insertAdjacentHTML('afterbegin', text);}