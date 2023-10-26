export const ContactItem = ({ contact, handleDeleteContact }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button onClick={() => handleDeleteContact(contact.id)}>
        delete
      </button>
    </li>
  );
};
