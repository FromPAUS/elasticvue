<template>
  <div>
    <h4 v-if="caption">{{ caption }}</h4>
    <div v-if="resizable" class="py-1">
      <resizable-container :initial-height="initialHeight">
        <code-editor :value="document" read-only/>
      </resizable-container>
    </div>
    <div v-else :style="style" class="pt-2">
      <code-editor :value="document" read-only/>
    </div>
  </div>
</template>

<script>
  import ResizableContainer from '@/components/shared/ResizableContainer'

  export default {
    name: 'PrintPretty',
    components: {
      'code-editor': () => ({
        component: import(/* webpackChunkName: "code-editor" */ '@/components/shared/CodeEditor')
      }),
      ResizableContainer
    },
    props: {
      document: {
        type: null, // any
        default: ''
      },
      initialHeight: {
        type: Number,
        default: 500
      },
      resizable: {
        type: Boolean,
        default: true
      },
      caption: {
        type: String,
        default: ''
      }
    },
    setup (props) {
      const style = `height: ${props.initialHeight}px`
      return {
        style
      }
    }
  }
</script>
