import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; 

import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

function CodeHighlighter({ code }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}

export default CodeHighlighter;
