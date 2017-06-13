const client = new WebTorrent();

function visAlert(vm,stat,col) {
  vm.status = stat;
  if(col == "war"){
    vm.statusVisWar = true;
    function visF(){
      vm.statusVisWar = false;
    }
    setTimeout(visF, 2000);
  }else if(col == "suc"){
    vm.statusVisSuc = true;
    function visF(){
      vm.statusVisSuc = false;
    }
    setTimeout(visF, 2000);
  }
}

var app = new Vue({
  el: '#main',
  data: {
    client : client,
    status: '',
    downSpeed:'',
    upSpeed: '',
    magnetUrlDown: '',
    statusVisSuc: false,
    statusVisWar: false,
    UpVis: false,
    DownVis: false,
  },
  methods:{
    upload: function(event) {
      let vm = this;
      let file = event.target.files[0];
      if(file != null){
        visAlert(vm,'Раздача началась!',"suc");
        client.seed(file, function (torrent) {
          vm.fileNameUp = file.name;
          vm.fileNameTDown = `${file.name}.torrent`;
          vm.magnetUp = torrent.magnetURI;
          vm.hashUp = `Hash:${torrent.infoHash}`;
          vm.torrentFileUp = torrent.torrentFileBlobURL;
          vm.UpVis = true;
        })
      }else{
        visAlert(vm,'Файл не обнаружен!',"war");
      }
    },
    download:function() {
      let vm = this;
      if((this.magnetUrlDown != null) && this.magnetUrlDown.length > 0){
        visAlert(vm,'Загрузка началась!',"suc");
        client.add(this.magnetUrlDown, function(torrent) {
          vm.hashDown = `Hash:${torrent.infoHash}`;
          var file = torrent.files[0];
          vm.fileNameDown = file.name;
          file.getBlobURL(function(err, url) {
            if (err) throw err
            vm.fileUrlDown = url;
            vm.DownVis = true;
            visAlert(vm,'Загрузка завершена!',"suc");
          })
        })
      }else{
        visAlert(vm,'Добавьте magnet ссылку',"war");
      }
    },
  },
})
function updateSpeed() {
    app.downSpeed = client.downloadSpeed;
    app.upSpeed = client.uploadSpeed;
}
setInterval('updateSpeed()',1000);
