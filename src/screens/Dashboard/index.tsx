import React from 'react'

import { 
    Container, 
    UserWrapper,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
 } from './styles';

import HighlightCard from '../../components/HighlightCard'

export default()=>{
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/31596454?v=4' }} />
                        <User>
                            <UserGreeting> Olá, </UserGreeting>
                            <UserName>Tayse</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard type='up' title="Entrada" amount='R$17.400,00' lastTransaction='Última entrada dia 13 de abril' />
                <HighlightCard type='down' title="Saída" amount='R$1.259,00' lastTransaction='Última entrada dia 13 de abril' />
                <HighlightCard type='total' title="Total" amount='R$16.141,00' lastTransaction='01 a 16 de abril' />
            </HighlightCards>

        </Container>
    )
}
  