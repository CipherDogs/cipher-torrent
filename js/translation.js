import Vue from 'vue'
import VueI18n from 'vue-i18n'
import local from '../lang/lang'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  messages: local
})
