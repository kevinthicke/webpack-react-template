import React, { Component } from 'react';
import * as styles from './styles.css';

export default class ExampleComponent extends Component {
    render() {
        return (
            <div className={styles.ExampleComponentContainer}> Componente de Ejemplo! </div>
        );
    }
}