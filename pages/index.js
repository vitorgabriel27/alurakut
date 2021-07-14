import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};`

function ProfileSidebar(propriedades){

  return(
    <Box>
        <img src ={`https://github.com/${propriedades.githubUser}.png`} style = {{borderRadius: '10px'}}></img>
    </Box>
  )
}

export default function Home() {
 const User = 'vitorgabriel27'
 const pessoasDaoras = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'felipefialho',
  'isadorastan',
  'agostinhobritojr'
]

  return (
    <>
      <AlurakutMenu githubUser = {User}/>
      <MainGrid>
        <div className = "profileArea" style = {{gridArea:'profileArea'}}>
          <ProfileSidebar githubUser = {User}/>
        </div>
        <div className = "welcomeArea" style = {{gridArea:'welcomeArea'}}>
            <Box>
              <h1 className = "title">Bem-vindo</h1>
              <OrkutNostalgicIconSet/>
            </Box>
        </div>
        <div className = "profileRelationsArea" style = {{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>

            <h2 className = "smallTitle">
              Pessoas Daoras ({pessoasDaoras.length})
            </h2>
            <ul>
            {pessoasDaoras.map((itemAtual) => {
              return(
                <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
              )
            })}
            </ul>
            
          </ProfileRelationsBoxWrapper>
          <Box>
          <h2 className = "smallTitle">Communities</h2>
          </Box>
        </div>  
      </MainGrid>
    </>  
  )
}
