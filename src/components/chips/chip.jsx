import { useState } from 'react';
import './chip.css';
const Chip = () => {
    const [chips, setchip] = useState([]);
    const [input, setInput] = useState('');
    const [counter, setCounter] = useState(0);


    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleDeleteChip = (isToDelete) => {
        setchip(chips.filter((chip) => chip.id !== isToDelete));
    };

    const handleOnKeyPress = (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            if (input.trim() !== "") {
                const newChip = {
                    id: counter,
                    label: input.trim(),
                };
                setchip([...chips, newChip]);
                setInput("");
                setCounter(counter + 1)
            }
        }
    }
    return (
        <div className='container mt-5'>
            <h2>Chips Input</h2>
            <form >
                <input
                    type="text"
                    placeholder="Type a chip and press tag"
                    className="input"
                    onChange={handleChange}
                    onKeyDown={handleOnKeyPress}
                    value={input}
                />
            </form>
            <div className="chipmain container">

                {
                    chips.map((c) => (
                        <div key={c.id} className='chipmain'>
                            <span className="chipwraper">{c.label}</span>
                            <button onClick={() => handleDeleteChip(c.id)}> x </button>
                        </div>
                    ))
                }


            </div>

        </div >
    );
}

export default Chip;