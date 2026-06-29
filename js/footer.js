{
  const text = `
  <hr class="featurette-divider">
  <footer class="container">
    <div class="d-flex justify-content-end">
      <a href="#">トップに戻る</a>
    </div>
    <p class="p-1 fs-5">食文化専門学校
      <br>〒123-4567 東京都〇〇区〇〇1-2-3
      <br>TEL 03-1234-5678
    </p>
    <p class="p-1 fs-6">&copy; 2026 食文化専門学校</p>
    <p class="text-body-secondary p-1 fs-6">※本サイトは架空のサイトです。</p>
  </footer>`;
  const footer = document.getElementById("footer");
  footer.insertAdjacentHTML('afterbegin', text);
}