const projectName = "markdown-previewer";

const sampleText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  state = {
    text: sampleText
  };

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  render() {
    return (
      <div id="container">
        <h1 id="title">Simple React Markdown Preview</h1>
        <div id="contenedor-textarea">
          <textarea
            id="editor"
            rows="35"
            cols="100"
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
        </div>
        <div id="container-preview">
          <div id="preview">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
