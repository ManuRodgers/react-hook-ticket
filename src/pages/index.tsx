import * as React from 'react';

import { IGlobalState, IUmiComponentProps } from '@/common/type';

const mapStateToProps = ({  }: IGlobalState) => ({});

type AppStateProps = ReturnType<typeof mapStateToProps>;

export interface IAppProps extends IUmiComponentProps, AppStateProps {}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  return <div>app</div>;
};

export default App;
