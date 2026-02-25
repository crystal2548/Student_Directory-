import React, { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("CRITICAL APP ERROR:", error, errorInfo);
  }

  handleReset = () => {
    if (confirm("This will clear all student data and reset the app. Continue?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#300', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#ff5555' }}>❌ Critical Application Failure</h1>
          <p>The application encountered an error it couldn't recover from.</p>

          <div style={{ background: '#000', padding: '20px', borderRadius: '8px', margin: '20px 0', overflow: 'auto' }}>
            <code style={{ color: '#0f0' }}>{this.state.error && this.state.error.toString()}</code>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => window.location.reload()} style={{ padding: '12px 24px', background: '#444', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '4px' }}>
              🔄 Try Refreshing
            </button>
            <button onClick={this.handleReset} style={{ padding: '12px 24px', background: '#d33', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '4px' }}>
              ⚠️ Reset Application Data
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </StrictMode>
  );
}
