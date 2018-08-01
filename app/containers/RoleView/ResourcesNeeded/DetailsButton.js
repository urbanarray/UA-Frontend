import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';
import { styles } from 'assets/styles/variables';


class DetailsButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            details: ""
        };
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    open = () => {
        this.setState({
            showModal: true
        });
    }

    componentDidMount() {
        this.setState({
            details: "This is a wonderful resource, maybe we will have more details about this later!"
        })
    }

    renderButton() {
      if (this.props.windowWidth < 600) {
        return (
          <button onClick={this.open} className="btn btn-block btn-primary" style={styles.primaryLight}>
            <span> Details/Claim </span>
          </button>
        )
      } else {
        return (
          <button onClick={this.open} className="btn btn-block btn-primary" style={styles.primary}>
            <span> Details </span>
          </button>
        )
      }
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.resource}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.details}
                </Modal.Body>
                <Modal.Footer>
                    <button style={styles.primary} onClick={this.close}>Cancel</button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                {this.renderModal()}
            </div>

        )
    }

}

export default DetailsButton;
