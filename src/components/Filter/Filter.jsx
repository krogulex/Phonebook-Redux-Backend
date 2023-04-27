import { useDispatch } from "react-redux";

// import { filterContacts } from "redux/actions";
import { filterContacts } from "redux/filterSlice";

export const Filter = () => {

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterInput = event.target.value;

    dispatch(filterContacts(filterInput));
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        onChange={handleFilterChange}
        type="text"
        placeholder="Enter name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
}