import * as React from 'react';
import styles from './FabricListUpdate.module.scss';
import { IFabricListUpdateProps } from './IFabricListUpdateProps';
import { escape } from '@microsoft/sp-lodash-subset';

import GetListStart from './getListStart/getListStart';
import ShowList from './ShowList/ShowList';

interface IFabricListUpdateState {
  listString: string
}

export default class FabricListUpdate extends React.Component<IFabricListUpdateProps, IFabricListUpdateState, {}> {
  constructor(props) {
    super(props);

    this.state = {
      listString: ""
    }
  }

  getListString = (newValue:string) => {
    this.setState({ listString: newValue });
  }

  public render(): React.ReactElement<IFabricListUpdateProps> {
    return (
      <div className={ styles.fabricListUpdate }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              { 
              this.state.listString == "" 
              ? <GetListStart getListString={this.getListString} />
              : <ShowList listString={this.state.listString} />
              } 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
