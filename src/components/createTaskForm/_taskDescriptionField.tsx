import React, { FC, ReactElement } from 'react';

import { ITextField } from './interfaces/ITextField';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  //  Destructure props
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

//passing variables as props
TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
