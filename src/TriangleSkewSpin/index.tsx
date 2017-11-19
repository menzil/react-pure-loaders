import { css } from 'glamor';
import * as React from 'react';
import style from './style';

export interface IGeneralPropTypes {
  loading: boolean;
}

export class TriangleSkewSpin extends React.PureComponent<IGeneralPropTypes, {}> {

  public render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div {...css(style)}>
          <div/>
        </div>
      );
    }

    return null;
  }
}