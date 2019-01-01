import * as React from 'react';
import Main from './Main';
import { AppContextInterface, AppContextProvider } from './Store';


class App extends React.Component<{}, AppContextInterface> {
  constructor(props: object) {
    super(props);
    this.state = {
      adress: 'this is from store adress',
      url: 'this is from store url',
      change: this._change
    }
  }

  // private sampleAppContext: AppContextInterface = {
  //   adress: 'this is from store adress',
  //   url: 'this is from store url',
  // }

  private _change = (): void => {
    console.log('_change function');
    this.setState({adress: 'try to change adress!!!'});
    console.log(this.state.adress);
  }

  static _staticChange = (): void => {
    console.log('static change function');   
  }

  public render() {
    return (
      <AppContextProvider value={this.state}>
        <Main />
      </AppContextProvider>
    );
  }
}

export default App;
