<!-- EDITOR SCRIPT -->
  <script>
        var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            mode: "xml",
            theme: "dracula",
            lineNumbers: true,
            autoCloseTags: true
        });
        
        editor.setSize("100%", "100%");
    
    var editorTwo = CodeMirror.fromTextArea(document.getElementById('editorTwo'), {
            mode: "xml",
            theme: "dracula",
            lineNumbers: true,
            autoCloseTags: true
        });
        
        editorTwo.setSize("100%", "100%");
    </script>