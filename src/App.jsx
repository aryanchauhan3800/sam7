import './App.css'

function App() {
  return (
    <div className="iframe-container">
      <iframe
        src="https://www.utsubo.com"
        title="Utsubo"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  )
}

export default App
