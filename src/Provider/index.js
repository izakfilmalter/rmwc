// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

export type RMWCProviderOptionsT = {
  /** Set the buttons ripple effect globally */
  buttonDefaultRipple: boolean,
  /** Set the listItems ripple effect globally */
  listItemDefaultRipple: boolean,
  /** Set the iconClassNameBase. Read the icon docs for more info. */
  iconClassNameBase: string,
  /** Set the iconClassNamePrefix. Read the icon docs for more info. */
  iconClassNamePrefix: string,
  /** Set the default iconStrategy. Read the icon docs for more info. */
  iconStrategy: 'auto' | 'ligature' | 'className' | 'url' | 'component'
};

// Default provider options
const providerDefaults: RMWCProviderOptionsT = {
  buttonDefaultRipple: true,
  listItemDefaultRipple: true,
  iconClassNameBase: 'material-icons',
  iconClassNamePrefix: '',
  iconStrategy: 'auto'
};

// A function for safely getting context options
// this is so we can use the provider defaults even
// when RMWCProvider isnt being used
export const getProviderOptions = (context: Object): RMWCProviderOptionsT => {
  return context && context.RMWCOptions ?
    context.RMWCOptions :
    providerDefaults;
};

/**
 * Provides default options for children
 * Prop override options in providerDefaults with the same name
 */
export class RMWCProvider extends React.Component<RMWCProviderOptionsT> {
  static defaultProps = providerDefaults;

  constructor(props: RMWCProviderOptionsT) {
    super(props);
    this.options = this.buildOptions(props);
  }

  getChildContext() {
    return {
      RMWCOptions: this.options
    };
  }

  componentWillUpdate(nextProps: RMWCProviderOptionsT) {
    this.options = this.buildOptions(nextProps);
  }

  options: RMWCProviderOptionsT;

  static childContextTypes = {
    RMWCOptions: PropTypes.object
  };

  buildOptions(props: RMWCProviderOptionsT) {
    return {
      ...providerDefaults,
      ...(props || {})
    };
  }

  render() {
    return this.props.children;
  }
}

export default RMWCProvider;
