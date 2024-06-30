import {useState} from 'react';
import {TextField} from '@mui/material';
import "./index.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={"container-contact"}>
            <h2>Contact me</h2>
            <div className={"text-fields"}>
                <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--primaryText)'},
                    }}
                />
                <TextField
                    label="Email"
                    variant="standard"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--primaryText)'},
                    }}
                    required
                />
                <TextField
                    label="Message"
                    variant="standard"
                    fullWidth
                    multiline
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--primaryText)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--primaryText)'},
                    }}
                    required
                />
            </div>
            <a className={"primary-button"}>
                Send Message
            </a>
        </div>
    );
};

export default Contact;
