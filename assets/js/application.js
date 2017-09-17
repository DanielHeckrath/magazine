import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import markdown from 'raw-loader!./videos.md';
import { createMarkdownEngine, styles as markdownStyles } from './markdown';

const styles = theme => ({
    ...markdownStyles,
    input: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: '1px solid',
    },
    renderContainer: {
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        border: '1px solid',
        boxSizing: 'border-box',
        padding: 8,
        '& img': {
            maxWidth: '100%',
            marginBottom: 24,
        }
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);

        const { parser, renderer } = createMarkdownEngine(props);
        
        this.parser = parser;
        this.renderer = renderer;

        this.state = {
            syntaxTree: this.parser(markdown),
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item lg={6} md={12}>
                    <textarea className={this.props.classes.input} defaultValue={markdown} onChange={this.onInputChange}/>
                </Grid>
                <Grid item lg={6} md={12}>
                    <div className={this.props.classes.renderContainer}>
                        {
                            this.renderer(this.state.syntaxTree)
                        }
                    </div>
                </Grid>
            </Grid>
        );
    }

    onInputChange(event) {
        this.setState({
            syntaxTree: this.parser(event.target.value),
        });
    }
}

const AppWithStyles = withStyles(styles)(App)

render(<AppWithStyles/>, document.querySelector('#app-root'));
