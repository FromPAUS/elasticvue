<template>
  <v-snackbar v-model="visible"
              :color="color"
              :multi-line="additionalText !== undefined"
              :timeout="timeout"
              right>
    <strong>{{ text }}</strong>
    <template v-if="additionalText">
      <p class="mb-0">
        {{ additionalText }}
      </p>
      <div v-if="color === 'red'" class="mt-2">
        <v-btn class="mr-4" @click.native="copy">Copy error</v-btn>
        <v-btn text @click.native="visible = false">Close</v-btn>
      </div>
      <v-btn v-else text @click.native="visible = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  import { compositionVuexAccessors } from '@/helpers/store'

  export default {
    name: 'Snackbar',
    setup () {
      const { text, additionalText, timeout, color, visible } = compositionVuexAccessors('snackbar', ['text', 'additionalText', 'timeout', 'color', 'visible'])

      const copy = () => {
        navigator.clipboard.writeText(additionalText.value)
      }

      return {
        visible,
        text,
        additionalText,
        timeout,
        color,
        copy
      }
    }
  }
</script>
