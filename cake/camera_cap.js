  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      ready();
    }
  }

  function ready() {
    document.getElementById("capture").onclick = function() {
          var scene = document.querySelector('a-scene');
          var video = document.getElementById('camera-bg');

          if (scene && video) {
            width = scene.offsetWidth;
            height = scene.offsetHeight;

            // スクリーンショット用のcanvasを作成
            var snapshot = document.createElement('canvas');
            snapshot.width = width;
            snapshot.height = height;
            var context = snapshot.getContext('2d');

            // カメラの映像をsnapshotに描画
            context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);

            // A-Frameの映像をsnapshotに描画
            // components.screenshotの大きさを現在のwidthとheightに指定
            scene.setAttribute('screenshot', 'width:' + width + '; height: ' + height + ';');
            var capture = scene.components.screenshot.getCanvas('perspective');
            context.drawImage(capture, 0, 0, width, height);

            // jpgに変換してダウンロードさせる
            // var a = document.createElement('a');
            // a.href = snapshot.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
            // a.download = 'aquarium.jpg';
            // a.click();
            var d = snapshot.toDataURL('image/png');
            d = d.replace('image/png', 'image/octet-stream');
            d.download   = "sample.png";
            d.onclick = function() {};
          }
    };
  }

