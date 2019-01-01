import * as React from 'react';
import { AppContextConsumer, AppContextInterface } from './Store';

export interface Props {
  value ?: string,
  value2 ?: string
}

interface State {
  data: string
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  public render() {
    return (
      <div>
        <h1>Main page</h1>
        <MyComponent name="this is my component name" />
        <AppContextConsumer>
          {(store: AppContextInterface) => (
            <h4 onClick={store.change}>{store.adress} {store.url}</h4>
          )}
        </AppContextConsumer>
      </div>
    );
  }
}

interface T {
  name?: string;
}

class MyComponent extends React.Component<T, object> {
  render() {
    return(
      <div>
        <p>hello component {this.props.name}</p>
        <FunctionComponent name="function component" level={1} />
      </div>
    )
  }
}

interface ComponentProps {
  name: string,
  level: number
}

const FunctionComponent = ({name, level}: ComponentProps) => {
  return(
    <p>{name} {level}</p>
  )
}


export default Main;
