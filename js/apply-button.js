{
  const text = `
  <a href="apply.html" class="btn shadow-button custom-gradient text-white font-inter fw-bold rounded-0 border-3 border-white px-5 py-4 fs-4">オープンキャンパス事前予約</a>
  ` ;
  const btns = document.querySelectorAll(".oc-apply-button");
  btns.forEach((btn) => {
    btn.insertAdjacentHTML('afterbegin', text);
  });
}