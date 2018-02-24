Vue.use(VueI18n)

const local = {
    en: {
	btn: {
	    seed: 'Seed File',
	    down: 'Download',
	    magnet: 'Magnet',
	    torrent: 'Torrent file',
	    file: 'Get file'
	},
	title: {
	    head: 'Online and offline browser torrent client',
	    seed: 'Seeding',
	    down: 'Downloading'
	},
	text: {
	    file: 'File name',
	    hash: 'Hash',
	    size: 'Size',
	    magnet: 'Magnet Link'
	},
	speed: 'kB/sec'
    },
    ru: {
	btn: {
	    seed: 'Раздать файл',
	    down: 'Скачать',
	    magnet: 'Magnet',
	    torrent: 'Торрент файл',
	    file: 'Получить файл'
	},
	title: {
	    head: 'Онлайн и оффлайн браузерный торрент клиент',
	    seed: 'Раздача',
	    down: 'Скачивание'
	},
	text: {
	    file: 'Имя файла',
	    hash: 'Хэш',
	    size: 'Размер',
	    magnet: 'Magnet ссылка'
	},
	speed: 'кБ/сек'
    }
}

const myLocal = new VueI18n({
				locale: 'en',
				messages: local,
			    })