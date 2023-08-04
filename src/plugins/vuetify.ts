
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: '#FFFFF0',
          navigationDrawer:'#FFFFFF',
          primary: '#1867C0',
          secondary: '#5CBBF6',
          iconMode: '#000000',
          textActive: '#05ABA3',
          episodeCard:'#d3e5ff',
          locationCard:'#c8ffa3',
        },
      },
      dark: {
        colors: {
          primary: '#000000',
          navigationDrawer:'#000000',
          secondary: '#000000',
          iconMode: '#FFF9C4',
          textActive: '#19F1FF',
          episodeCard:'#1e1b63',
          locationCard:'#267b5e',
        },
      },
    },
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
