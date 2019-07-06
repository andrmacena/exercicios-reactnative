import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
   ListaFlex: {
      screen: () => <ListaFlex />
   },
   TextoSincronizado: {
      screen: () => <TextoSincronizado />,
      navigatinOptions: { title: 'Texto Sincronizado' }
   },
   Avo: {
      screen: () => <Avo nome='João' sobrenome='da Silva' />
   },
   Evento: {
      screen: () => <Evento />
   },
   ValidarProps: {
      screen: () => <ValidarProps label='Ano: ' ano={19} />
   },
   Plataformas: {
      screen: () => <Plataformas />

   },
   Contador: {
      screen: () => <Contador />
   },
   MegaSena: {
      screen: () => <MegaSena numeros={6} />,
      navigatinOptions: { title: 'Mega Sena' }
   },
   Inverter: {
      screen: () => <Inverter texto='Testando menu' />
   },
   ParImpar: {
      screen: () => <ParImpar numero={23} />,
      navigatinOptions: { title: 'Par ou Impar' }
   },
   Simples: {
      screen: () => <Simples texto='Flexível' />
   }

}, { drawerWidth: 220 })