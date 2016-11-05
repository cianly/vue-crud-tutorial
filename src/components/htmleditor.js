import "codemirror"
import "codemirror/mode/markdown/markdown"
import "codemirror/addon/mode/overlay"
import "codemirror/mode/xml/xml"
import "codemirror/mode/gfm/gfm"
import "marked"
import 'codemirror/lib/codemirror.css'
import "uikit/dist/js/components/htmleditor"
import "uikit/dist/css/components/htmleditor.css"
import 'uikit/dist/css/components/htmleditor.gradient.css'

export default {
    template: `<div>
                  <textarea rows="20"
                            ref="editor"
                            >{{ value }}</textarea></div>`,
    props: ['value'],
    mounted () {
        // Vue 2.0 的组件只能单向赋值,以往可以通过两路绑定的做法已经失效
        // 所以只能通过事件将组件内部的数据变化暴露给父组件
        debugger
        var htmlEditor = UIkit.htmleditor(this.$refs.editor, {
            markdown: true,
            mode: 'tab'
        })

        var self = this

        UIkit.$(this.$refs.editor).on('input', ()=> {
            const _val = htmlEditor.editor.getValue()
            if (_val != self.value) {
                this.$emit('change', _val)
            }
        })
    }
}