import * as React from 'react';
import styles from './FabricListUpdate.module.scss';
import { IFabricListUpdateProps } from './IFabricListUpdateProps';
import { escape } from '@microsoft/sp-lodash-subset';

import GetListStart from './getListStart/getListStart';

export default class FabricListUpdate extends React.Component<IFabricListUpdateProps, any, any> {
  constructor(props) {
    super(props);

    this.state = {
      listString: ""
    }
  }

  getListString = (newValue:string) => {
    console.log("Link: ",newValue);
  }

  public render(): React.ReactElement<IFabricListUpdateProps> {
    return (
      <div className={ styles.fabricListUpdate }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <GetListStart getListString={this.getListString} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
