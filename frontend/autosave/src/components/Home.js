import Notes from './Notes';

//prop drilling.............................
function Home(props) {
  const {showAlert} = props
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home;