import * as React from 'react';
import { useState } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react';

import styles from './getListStart.module.scss';

const getListStart = (props:any) => {
  const [ enteredLink, setEnteredLink ] = useState('');

  return (
    <div>
      <h2>Welcome to Teds List app.</h2>
      <p>This App will load up a SharePoint list and display it.<br /> You also be able to edit and update entries</p>
      <TextField 
        className={styles.textField} 
        value={enteredLink} 
        label="Provide the exact link to the list" 
        required 
        onChange={(event, newValue) => setEnteredLink(newValue)} 
      />
      <DefaultButton
        text="Submit Link" 
        onClick={() => props.getListString(enteredLink)} 
      />
    </div>
  );
}

export default getListStart;