let client = new WebTorrent()

let app = new Vue({
		      el: '#main',
		      data:{
			  main: true,
			  loader: false,
			  notification: {
			      message: '',
			      warning: false,
			      success: false,
			  },
			  magnetUrlDown: '',
			  speed: {
			      up: 0,
			      down: 0,
			  },
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
		      watch:{
			  'notification.success': function(){
			      let vm = this
			      if(this.notification.success === true){
				  setTimeout(function(){vm.notification.success = false},2000)
			      }
			  },
			  'notification.warning': function(){
			      let vm = this
			      if(this.notification.warning === true){
				  setTimeout(function(){vm.notification.warning = false},2000)
			      }
			  }
		      },
		      methods:{
			  upload: function(event) {
			      let vm = this
			      let file = event.target.files[0]
			      if(file != null){
				  vm.notification.message = 'The distribution began!'
				  vm.notification.success = true
				  client.seed(file, function (torrent) {
						  vm.fileNameUp = file.name;
						  vm.fileNameTDown = `${file.name}.torrent`;
						  vm.magnetUp = torrent.magnetURI;
						  vm.hashUp = `Hash:${torrent.infoHash}`;
						  vm.torrentFileUp = torrent.torrentFileBlobURL;
						  vm.UpVis = true;
					      })
			      }else{
				  vm.notification.message = 'File not found'
				  vm.notification.warning = true
			      }
			  },
			  download:function() {
			      let vm = this;
			      if((this.magnetUrlDown != null) && this.magnetUrlDown.length > 0){
				  vm.notification.message = 'Download has started!'
				  vm.notification.success = true
				  client.add(this.magnetUrlDown, function(torrent) {
						 vm.hashDown = `Hash:${torrent.infoHash}`;
						 var file = torrent.files[0];
						 vm.fileNameDown = file.name;
						 file.getBlobURL(function(err, url) {
								     if (err) throw err
								     vm.fileUrlDown = url;
								     vm.DownVis = true;
								     vm.notification.message = 'Loading is complete!'
								     vm.notification.success = true
								 })
					     })
			      }else{
				  vm.notification.message = 'Add a magnet link'
				  vm.notification.warning = true
			      }
			  },
		      },
		  })
