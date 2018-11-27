/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    urlError: '',
    descriptionError: ''
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;

    if (!url.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g)) {
      urlError = 'Please provide a valid URL';
    }

    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    if (urlError || descriptionError) {
      this.setState({
        urlError,
        descriptionError
      });
    }
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>

          <TextInput
            placeholder="URL"
            className={styles.input}
            errorText={ this.state.urlError }
            ref={(f) => (this.url = f)}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
            errorText={ this.state.descriptionError }
            ref={(f) => (this.description = f)}
          />

          <div className={styles.actionContainer}>
            <div className={styles.button}
              onClick={ this.props.cancelLogin }>
              Cancel
            </div>
            <div className={styles.button}
              onClick={this.onAdd}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
