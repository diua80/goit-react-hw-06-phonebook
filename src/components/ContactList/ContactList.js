import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <ul>
        <div>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};
