import { render } from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <p>Do you agree to the statement: "Preact is awesome"?</p>
            <input value={input} onInput={(e) => setInput((e.target as HTMLInputElement).value)} />
        </div>
    );
};

render(<App />, document.body);
