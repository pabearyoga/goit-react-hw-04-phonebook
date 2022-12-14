import { useState } from "react"
import { nanoid } from "nanoid"
import css from "./ContactForm.module.css"

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')


    const handleChange = evt => {
        const { name, value } = evt.target;

        switch (name) {
            case 'name':
                setName(value)
                break;
        
            case 'number':
                setNumber(value)
                break;
        
            default:
                break;
        }

    }

    const handleId = () => {
        setId(nanoid());
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({ name, number, id });
        reset();

    };

    const reset = () => {
        setName('');
        setNumber('');
        setId('')
    }

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
        <form onSubmit={handleSubmit} className={css.contactForm}>
            <label htmlFor={nameInputId} className={css.contactLabel}>Name:
                <input
                    type="text"
                    className={css.contactInput}
                    name="name"
                    id={nameInputId}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor={numberInputId} className={css.contactLabel}>Number:
                <input
                    type="tel"
                    className={css.contactInput}
                    name="number"
                    id={numberInputId}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit" className={css.formBtn} onClick={handleId}>Add contact</button>

        </form>
    )
}
    
export default ContactForm