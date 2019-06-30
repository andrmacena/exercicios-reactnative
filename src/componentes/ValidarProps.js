import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{ fontSize: 35 }}>
    {props.label}
    {props.ano + 2000}
    </Text>
//Validando as propriedades, atribuindo valores default à elas
ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.defaultProps = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps