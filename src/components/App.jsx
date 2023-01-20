import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';

export class App extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  handleSubmit = e => {
    e.preventDefault();
    // const { contacts } = this.state;
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.number.value);
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const nanoid = customAlphabet('1234567890', 2);
    const id = 'id-' + nanoid(2);
    console.log('id', id);
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    console.dir(this.state);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts=contacts.filter(contact=> contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input type="text" value={filter} onChange={this.changeFilter} />
          </label>

          <ul>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <span>{name}:</span>
                  <span>{number}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}