import { Container } from "reactstrap"
import styles from "./styles.module.scss"

const CardsSection = function () {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className={'d-flex flex-wrap justify-content-center gap-4 pb-5'}>
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FRONT-END</p>
          <p className={styles.cardDescription}>
            O Onebicode BLACK é o lugar para você evoluir. Para isso, você vai 
            ter acessso às práticas avançadas de programação, atualizações de 
            tecnologias e todo o suporte técnico necessário para ser um sênior 
            na programação. 
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
          O trabalho desenvolvido pelo profissional desse ramo é invisível aos 
          olhos do usuário, visto que ele é responsável pelos códigos e comandos que 
          fazem com que um determinado dispositivo ou serviço web funcione corretamente, 
          e não pela sua interface. Venha ser o melhor programador BACK-END
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>MOBILE</p>
          <p className={styles.cardDescription}>
          Dentro do universo do desenvolvimento, a posição de desenvolvedor mobile é uma 
          das que mais atraem aqueles que sonham em ingressar na área de TI.
          Se você faz parte do grupo de pessoas que se interessa por essa carreira, chegou a hora 
          de entender de uma vez por todas como é o dia a dia de um desenvolvedor mobile e o que é 
          preciso dominar para ter sucesso na função.
          Ficou curioso? Então vamos em frente! 
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>GIT E GITHUB</p>
          <p className={styles.cardDescription}>
          Git e Github são utilizados no dia a dia das pessoas que criam software por um motivo bem 
          simples: ter uma forma fácil de gerenciar o código fonte da aplicação, do sistema, do produto.
          Nessa nova websérie da Onetbitcode, o Mario Souto, conhecido como DevSoutinho, traz importantes pontos 
          do uso dessa plataforma:
          Ficou curioso? Então vamos em frente! 
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>PROJETOS</p>
          <p className={styles.cardDescription}>
          Com certeza você já pensou em desenvolver algo, mas não tinha ideia do que fazer, certo?!
          Para ajudar você nesta jornada, selecionei algumas ideias de projetos de programação para desenvolvedores 
          independente do nível do conhecimento.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRA</p>
          <p className={styles.cardDescription}>
          Quando falamos sobre uma carreira de desenvolvedor, onde existem inúmeras áreas e possibilidades para seguir, 
          ter um plano de carreira bem definido é uma tarefa um pouco complexa, mas extremamente importante.
          Abordamos também os tipos de carreira que estão em alta (Y e T), assim como as diferenças entre elas e a relação com perfis especialistas e generalistas.
          Ficou curioso? Então vamos em frente! 
          </p>
        </div>
      </Container>
    </>
  )
}

export default CardsSection;