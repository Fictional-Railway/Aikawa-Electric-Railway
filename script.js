function showStation(name) {
    const info = document.getElementById('station-info');
    info.innerHTML = `<h2>${name}駅</h2><p>${name}駅の情報をここに表示します。</p>`;
    return false; // ページ遷移防止
}