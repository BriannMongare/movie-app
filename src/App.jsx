
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
   <>
   <main>
    <div className="pattern"/>

    <div className="wrapper">
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find Movies You'll Enjoy Without the Hustle</h1>
      </header>
    </div>
   </main>
   </>
  )
}

export default App