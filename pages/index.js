import React from "react"
import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};`

function ProfileSidebar(propriedades){

  return(
    <Box>
        <img src ={`https://github.com/${propriedades.githubUser}.png`} style = {{borderRadius: '10px'}}></img>
        <hr/>
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
          
        <hr/>
        <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
 const [comunidades, setComunidades] = React.useState([{
  id: '1223824989483982802984985022',
  title: 'Eu odeio acordar cedo',
  image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
 }])
 const User = 'vitorgabriel27'
 
 const pessoasDaoras = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'isadorastan'
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
              <h1 className = "title">Bem-vindo(a)</h1>
              <OrkutNostalgicIconSet/>
            </Box>
            <Box>
              <h2 className = "subTitle">O que você deseja fazer?</h2>
                <form onSubmit={function handleCreateComunidade(e){
                      e.preventDefault();

                      const formDados = new FormData(e.target)
                      const comunidade = {
                        id: new Date().toISOString(),
                        title: formDados.get('title'),
                        image: formDados.get('image')

                      }

                      const comunidadesAtualizadas = [...comunidades, comunidade]
                      setComunidades(comunidadesAtualizadas)

                    }   
                }>
                  <div>
                    <input placeholder ="Qual vai ser o nome da sua Comunidade?" 
                      name="title" 
                      aria-label="Qual vai ser o nome da sua Comunidade?" 
                      type = "text"/>
                  </div>
                  <div>
                      <input placeholder ="Coloque uma URL para usar de capa" 
                      name="image" 
                      aria-label="Coloque uma URL para usar de capa" 
                      type = "text"/>
                  </div>
                  <button>
                    Criar Comunidade
                  </button>
                </form>
                  
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
          <ProfileRelationsBoxWrapper>
            <h2 className = "smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return(
                  <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>  
      </MainGrid>
    </>  
  )
}
