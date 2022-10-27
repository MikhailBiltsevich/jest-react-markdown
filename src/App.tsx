import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = `# This is some example markdown
Look at all the great things you can do with markdown!
## This is a Heading
\`\`\`js
console.log('This is some code')
\`\`\`
### This is a Smaller Heading
\`\`\`bash
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`
### This is a link
Markdown link [THE Terms and Conditions](https://www.timeshighereducation.com/terms).
`;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </ReactMarkdown>
    </div>
  );
}

export default App;
