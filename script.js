// ページが読み込まれたら現在の時刻を表示する関数
window.addEventListener('DOMContentLoaded', () => {
  updateTime(0);
});

// 現在時刻プラス表示
function updateTime(minutesToAdd) {
  if (minutesToAdd === undefined) {
    minutesToAdd = parseInt(document.getElementById('minutes').value, 10) || 0; // 入力が数字でない場合は0として扱う
  }
  const now = new Date();
  const futureTime = new Date(now.getTime() + minutesToAdd * 60000); // 1分 = 60000ミリ秒
  const hours = futureTime.getHours();
  const minutes = futureTime.getMinutes();

  const clockDiv = document.getElementById('clock');

  if (minutes < 10) {
    clockDiv.textContent = `${hours}:0${minutes}`;
  } else {
    clockDiv.textContent = `${hours}:${minutes}`;
  }
}

//微調整エリア
function adjustTime(minute) {
  const clocktext = document.getElementById('clock');
  const hours = parseFloat(clocktext.textContent.slice(0, 2));
  const minutes = parseFloat(clocktext.textContent.slice(-2));

  const minutes2 = minutes + minute;

  if (minutes2 < 0) {
    //0分を下回った時に時間を下げる
    clocktext.textContent = `${hours - 1}:${60 + minutes2}`;
  } else if (minutes2 < 10) {
    // 10分以下だったら、数字の前に0を表示する
    clocktext.textContent = `${hours}:0${minutes2}`;
  } else if (minutes2 >= 60) {
    //60分を超えた時に時間を上げる
    clocktext.textContent = `${hours + 1}:0${minutes2 - 60}`;
  } else {
    clocktext.textContent = `${hours}:${minutes2}`;
  }
}

// フルスクリーン表示
function clickfullscreen() {
  const fullscreenTarget = document.getElementById('clock');
  const isFullscreen = document.fullscreenElement;
  if (isFullscreen) {
    document.exitFullscreen();
  } else {
    fullscreenTarget.requestFullscreen();
  }
}
