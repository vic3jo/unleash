import React, { Component } from 'react';

function toggleHOC(WrappedComponent, initialToggleStates) {
  class Toggle extends Component {

    constructor(props) {
      super(props);
      this.state = initialToggleStates || {};
      this.getToggleState = this.getToggleState.bind(this);
      this.toggle = this.toggle.bind(this);
      this.toggleOn = this.toggleOn.bind(this);
      this.toggleOff = this.toggleOff.bind(this);
    }

    getToggleState(toggleName) {
      return !!this.state[toggleName];
    }

    toggle(toggleName) {
      this.setState({ [toggleName]: !this.state[toggleName] });
    }

    toggleOn(toggleName) {
      this.setState({ [toggleName]: true });
    }

    toggleOff(toggleName) {
      this.setState({ [toggleName]: false });
    }

    render() {
      const componentProps = {
        getToggleState: this.getToggleState,
        toggle: this.toggle,
        toggleOn: this.toggleOn,
        toggleOff: this.toggleOff,
      };

      return <WrappedComponent {...this.props} {...componentProps} />;
    }
  }

  return Toggle;
}

export default toggleHOC;
