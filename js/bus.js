import Vue from 'vue'
import WebTorrent from 'webtorrent/webtorrent.min'

export const bus = new Vue()
export let client = new WebTorrent()
