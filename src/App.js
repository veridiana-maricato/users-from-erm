import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import ShowUserData from './components/ShowUserData';
import { useState } from 'react';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

  const [users] = useState([
    {
      id: 1,
      nome: 'Veri',
      age: 27,
      job: 'dev'
    },
    {
      id: 2,
      nome: 'Lucas',
      age: 24,
      job: 'dev'
    },
    {
      id: 3,
      nome: 'Let',
      age: 24,
      job: 'dev'
    }
  ])

  function showMessage(){
    console.log('evento componente pai')
  }

  return (
    <div className="App">

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Veri" />
      {users.map((user) => (
        <ShowUserData key={user.id} name={user.nome} age={user.age} job={user.job} />

      ))}
      <Fragments propFragment='teste' />
      {/* tag de container nao e self-closed. */}
      <Container myValue='teste'>
        <h1>Conteudo</h1>
      </Container>
      <Container myValue='teste2'>
        <h1>Conteudo outro</h1>
      </Container>
      {/* executar funcao */}
      <ExecuteFunction myFunction={showMessage} />
    </div>
  );
}

export default App;
