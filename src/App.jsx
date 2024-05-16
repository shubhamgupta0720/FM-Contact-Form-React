import './App.css'

function App() {

  return (
    <main>
      <div id="formInput">
        <h1>Contact Us</h1>
        <div className="form-inputs">
          <div className="first-last">
            <label htmlFor="firstName">FirstName</label>
            <input type="text" />
            {/* <label htmlFor="firstName">FirstName</label>
            <br />
            <input type="text" /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
