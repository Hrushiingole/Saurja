import Home from './Home';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-pattern bg-repeat bg-center  opacity-5"></div>

      {/* Content */}
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
