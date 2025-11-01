function showStation(name) {
    const info = document.getElementById('station-info');
    info.innerHTML = `<h2>${name}駅</h2><p>${name}駅の情報をここに表示します。</p>`;
    return false; // ページ遷移防止
}

<script>
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".news-item");

  items.forEach((item) => {
    const title = item.querySelector(".news-title");
    const content = item.querySelector(".news-content");

    // 初期状態では非表示にする
    content.style.display = "none";

    // クリックしたら開閉
    title.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
</script>

