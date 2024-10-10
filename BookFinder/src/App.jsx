
import './App.css'


function App() {

  return (
    <>
        <div className="contentbox">
      <h1>Book Finding app</h1>

        <form>

  <label>
    Title:
    <input type="text" name="name" placeholder='Misery' />
  </label>
  <label>
    Author:
    <input type="text" name="author" placeholder='Stephen King' />
  </label>
  <label>
  Published Year:
    <input type="text" name="title" placeholder='1996' />
  </label>
  <input type="submit" value="Submit" />

</form>
</div>


    </>
  )
}

export default App
