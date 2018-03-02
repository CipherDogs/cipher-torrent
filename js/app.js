let client = new WebTorrent()

let app = new Vue({
		      el: '#main',
		      i18n: myLocal,
		      data:{
			  main: true,
			  loader: false,
			  notification: {
			      message: '',
			      warning: false,
			      success: false
			  },
			  magnetUrlDown: '',
			  speed: {
			      up: 0,
			      down: 0
			  },
			  down: {
			      length: 0,
			      visible: false,
			      hash: '',
			      name: '',
			      url: '',
			      btns: {
				  visible: false
			      },
			      process: {
				  visible:true
			      }
			  },
			  up: {
			      visible: false,
			      name: '',
			      torrent: '',
			      magnet: '',
			      hash: '',
			      blob: ''
			  }
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
			  switchLang: function(lang){
			      if (lang in this.$i18n.messages) {
				  this.$i18n.locale = lang
			      } else {
				  vm.notification.message = 'Language not found!'
				  vm.notification.warning = true
			      }
			  },
			  upload: function(event) {
			      let vm = this
			      let file = event.target.files[0]
			      if(file != null){
				  vm.notification.message = 'The distribution began!'
				  vm.notification.success = true
				  client.seed(file, function (torrent) {
						  vm.up.name = file.name;
						  vm.up.torrent = `${file.name}.torrent`
						  vm.up.magnet = torrent.magnetURI
						  vm.up.hash = torrent.infoHash
						  vm.up.blob = torrent.torrentFileBlobURL
						  vm.up.visible = true
					      })
			      }else{
				  vm.notification.message = 'File not found'
				  vm.notification.warning = true
			      }
			  },
			  download:function() {
			      let vm = this
			      if((this.magnetUrlDown != null) && this.magnetUrlDown.length > 0){
				  vm.notification.message = 'Download has started!'
				  vm.notification.success = true
				  client.add(this.magnetUrlDown, function(torrent) {
						 vm.down.hash = torrent.infoHash
						 var file = torrent.files[0]
						 vm.down.name = file.name
						 vm.down.length = file.length/1000/1000
						 vm.down.visible = true
						 file.getBlobURL(function(err, url) {
								     if (err) throw err
								     vm.down.process.visible = false
								     vm.down.url = url
								     vm.down.btns.visible = true
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
