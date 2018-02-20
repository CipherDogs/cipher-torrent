let client = new WebTorrent();

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

let app = new Vue({
		      el: '#main',
		      data:{
			  main: true,
			  loader: false,
			  status: '',
			  magnetUrlDown: '',
			  speed: {
			      up: 0,
			      down: 0,
			  },
			  statusVisSuc: false,
			  statusVisWar: false,
			  UpVis: false,
			  DownVis: false,
		      },
		      mounted: function(){
			  let vm = this
			  setInterval(function() {
					  vm.speed.down = client.downloadSpeed
					  vm.speed.up = client.uploadSpeed
				      },500)
		      },
		      methods:{
			  upload: function(event) {
			      let vm = this;
			      let file = event.target.files[0];
			      if(file != null){
				  visAlert(vm,'The distribution began!',"suc");
				  client.seed(file, function (torrent) {
						  vm.fileNameUp = file.name;
						  vm.fileNameTDown = `${file.name}.torrent`;
						  vm.magnetUp = torrent.magnetURI;
						  vm.hashUp = `Hash:${torrent.infoHash}`;
						  vm.torrentFileUp = torrent.torrentFileBlobURL;
						  vm.UpVis = true;
					      })
			      }else{
				  visAlert(vm,'File not found',"war");
			      }
			  },
			  download:function() {
			      let vm = this;
			      if((this.magnetUrlDown != null) && this.magnetUrlDown.length > 0){
				  visAlert(vm,'Download has started!',"suc");
				  client.add(this.magnetUrlDown, function(torrent) {
						 vm.hashDown = `Hash:${torrent.infoHash}`;
						 var file = torrent.files[0];
						 vm.fileNameDown = file.name;
						 file.getBlobURL(function(err, url) {
								     if (err) throw err
								     vm.fileUrlDown = url;
								     vm.DownVis = true;
								     visAlert(vm,'Loading is complete!',"suc");
								 })
					     })
			      }else{
				  visAlert(vm,'Add a magnet link',"war");
			      }
			  },
		      },
		  })
