import * as React from 'react';

class ShowList extends React.Component<any,any,any> {
  render() {
    console.log("[ShowList] - List:",this.props.listString);
    return (
      <div>
        Component Show List
      </div>
    );
  }
}

export default ShowList;