import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box, Label, InputSearch } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  const inputID = nanoid();

  return (
    <Box>
      <Label htmlFor={inputID}>
        Find contacts by name:
        <InputSearch
          id={inputID}
          type="text"
          value={filter}
          name="filter"
          onChange={onFilter}
        ></InputSearch>
      </Label>
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
