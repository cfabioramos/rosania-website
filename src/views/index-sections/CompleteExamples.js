import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section" id="aboutme">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Sobre Mim</h2>
              <h5 className="description">
                Nasci em São Sebastião do Passé, em uma família de 7 filhos,
                meu pai industriário, posteriormente veio a focar na carreira política,
                e a minha mãe enfermeira. Deles aprendi os valores essenciais que até
                hoje carrego.
                <br /><br />
                Tenho muitas lembranças de quando acompanhava o meu pai durante as suas 
                andanças pelos povoados mais carentes de São Sebastião. 
                Me recordo de cada comunidade que visitei com ele e o quanto que isso me fez amadurecer
                no sentido de perceber o quão carente são as pessoas de bairros necessitados.
                Desde então descobri o imenso prazer que tinha em 
                poder cuidar da vida das pessoas.
                <br /><br />
                Em 1992 concluí o ensino médio e dois anos depois decidi vir morar em Salvador
                para fazer faculdade. Em 2001 conquistei o meu primeiro diploma universitário 
                no curso de Secretariado e trabalhando na Rede Bahia fui apresentado ao Senador
                Antônio Carlos Magalhães para uma vaga de secretária. Onde fiquei por 7 anos e pude 
                desenvolver um vasto conhecimento político.
                <br /><br />
                No ano de 1999 consegui participar do pleito de reeleição do 
                Senador Antônio Carlos Magalhães ao próprio cargo de Senador da república.
                Essa participação foi um divisor de águas na minha carreira para entender,
                inclusive tecnicamente, do cenário político nacional.
                Depois de muito participar como <i>staf</i> nas eleições das mais diversas esferas
                em 2018, quando percebi que o momento político estava favorável às mulheres,
                decidi me candidatar a deputada federal.
                <br/><br />
                A partir desse momento percebi o meu chamado para participar de uma forma mais
                direta da política do meu estado. Hoje estou aqui desafiando o sistema político
                desse país, onde a mulher é sub-representada e quase que não encontra espaço
                para participar deste ambiente.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
