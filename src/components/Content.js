/* eslint-disable */
import React, { Component } from 'react';
import Description from './Description';
import Input from './styles/Input';
import Base from './styles/Content';
import { isValid, getCurrentBlockNumber, getBlockNumberByHash } from '../utils';

type State = {
  currentBlockNumber: number,
  blockNumber: number,
  isValid: boolean,
  txHash: string,
  serviceStatus: boolean,
  errorMessage: string
};

class Content extends Component<State, *> {
  state = {
    currentBlockNumber: null,
    blockNumber: null,
    isValid: false,
    txHash: '',
    serviceStatus: false,
    errorMessage: ''
  };

  componentWillMount = () => {
    this.updateCurrentBlockNumber();

    setInterval(() => {
      this.updateCurrentBlockNumber();
    }, 6750);
  };

  getErrorMessage = errorMessage => {
    return errorMessage === 'TypeError: Failed to fetch'
      ? "Upstream service is down (come back soon please, don't let me starve)."
      : "Something wrong with the upstream (I'm still hungry, unf).";
  };

  setValid = txHash => {
    if (isValid(txHash)) {
      getBlockNumberByHash(txHash)
        .then(blockNumber => {
          this.setState({ isValid: true, blockNumber });
        })
        .catch(errorMessage => {
          this.setState({
            isValid: false,
            blockNumber: null,
            serviceStatus: false,
            errorMessage: this.getErrorMessage(errorMessage.toString())
          });
        });
    }
  };

  updateCurrentBlockNumber = () => {
    getCurrentBlockNumber()
      .then(currentBlockNumber => {
        this.setState({
          currentBlockNumber: currentBlockNumber,
          serviceStatus: true,
          errorMessage: ''
        });
      })
      .catch(errorMessage => {
        this.setState({
          currentBlockNumber: null,
          serviceStatus: false,
          errorMessage: this.getErrorMessage(errorMessage.toString())
        });
      });
  };

  handleChange = event => {
    this.setState(
      { txHash: event.target.value },
      this.setValid(event.target.value)
    );
  };

  getStatus = () => {
    return this.state.blockNumber + 2 <= this.state.currentBlockNumber
      ? 'Processed'
      : 'Initialized';
  };

  render() {
    const {
      currentBlockNumber,
      blockNumber,
      isValid,
      txHash,
      serviceStatus,
      errorMessage
    } = this.state;
    console.log(this.state);

    return (
      <Base>
        <Description />
        <br />

        {serviceStatus && (
          <div>
            <Input
              id="hash"
              value={txHash}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="hash">
              <span>
                Time to eat your <strong>txHash</strong>...
              </span>
            </label>
          </div>
        )}

        <br />

        {txHash && isValid && (
          <strong>Payment status: {this.getStatus()}</strong>
        )}

        {!serviceStatus && errorMessage && <strong>{errorMessage}</strong>}
      </Base>
    );
  }
}

export default Content;
