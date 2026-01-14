import {useState} from 'react';
import {TextField} from '@mui/material';
import "./index.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<{ type: 'idle' | 'error' | 'success'; message: string }>({
        type: 'idle',
        message: ''
    });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL ?? '';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();

        const nextErrors: { name?: string; email?: string; message?: string } = {};

        if (!trimmedName) {
            nextErrors.name = "Votre nom est requis.";
        }

        if (!trimmedEmail) {
            nextErrors.email = "Votre email est requis.";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
            nextErrors.email = "L'email n'est pas valide.";
        }

        if (!trimmedMessage) {
            nextErrors.message = "Votre message est requis.";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus({ type: 'error', message: "Veuillez corriger les champs du formulaire." });
            return;
        }

        if (!recipientEmail) {
            setStatus({
                type: 'error',
                message: "L'adresse email n'est pas configurée. Ajoutez VITE_CONTACT_EMAIL."
            });
            return;
        }

        const subject = encodeURIComponent(`Nouveau message - ${trimmedName}`);
        const body = encodeURIComponent(
            `Nom: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
        );

        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        setStatus({ type: 'success', message: "Votre client mail va s'ouvrir pour envoyer le message." });
    };

    return (
        <div className={"container-contact"}>
            <form className="contact-form" onSubmit={handleSubmit}>
                <TextField
                    label="Nom"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInputLabel-root.Mui-focused': {color: 'var(--accent)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--cardBorder)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--accent)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--accent)'},
                        '& .MuiFormHelperText-root': {color: 'var(--accent)'},
                    }}
                />
                <TextField
                    label="Email"
                    variant="standard"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInputLabel-root.Mui-focused': {color: 'var(--accent)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--cardBorder)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--accent)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--accent)'},
                        '& .MuiFormHelperText-root': {color: 'var(--accent)'},
                    }}
                    required
                />
                <TextField
                    label="Message"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    sx={{
                        '& .MuiInputLabel-root': {color: 'var(--primaryText)'},
                        '& .MuiInputLabel-root.Mui-focused': {color: 'var(--accent)'},
                        '& .MuiInput-underline:before': {borderBottomColor: 'var(--cardBorder)'},
                        '&:hover .MuiInput-underline:before': {borderBottomColor: 'var(--accent)'},
                        '& .MuiInput-underline:after': {borderBottomColor: 'var(--accent)'},
                        '& .MuiFormHelperText-root': {color: 'var(--accent)'},
                    }}
                    required
                />
                <button className={"primary-button contact-submit"} type="submit">
                    Envoyer
                </button>
                {status.message && (
                    <p className={`contact-status ${status.type}`} aria-live="polite">
                        {status.message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Contact;
