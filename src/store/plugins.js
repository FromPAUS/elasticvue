import createPersistedState from 'vuex-persistedstate'
import { LOCALSTORAGE_KEY } from '@/consts'

export const plugins = [
  createPersistedState({
    key: LOCALSTORAGE_KEY,
    paths: [
      'connection.elasticsearchHost', // deprecated
      'connection.activeInstanceIdx',
      'connection.instances',
      'theme',
      'queryRest',
      'indices',
      'nodes',
      'repositories',
      'snapshots',
      'search.q',
      'search.stickyTableHeader',
      'search.indices',
      'search.selectedColumns',
      'search.columns'
    ]
  })
]
