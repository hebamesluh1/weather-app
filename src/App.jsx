import Search from "./components/Search"


function App() {

  const handleSearch=(searchData)=>{
    console.log(searchData)
  }

  return (
    <div className="app">
      <Search onSearchChange={handleSearch}/>
    </div>
  )
}

export default App
