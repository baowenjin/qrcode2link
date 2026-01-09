import { useState, useRef, useEffect } from 'react'
import jsQR from 'jsqr'
import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handlePaste = (e) => {
    if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
      handleFile(e.clipboardData.files[0])
    }
  }

  useEffect(() => {
    window.addEventListener('paste', handlePaste)
    return () => {
      window.removeEventListener('paste', handlePaste)
    }
  }, [])

  const handleFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file.')
      setLink('')
      return
    }

    setLoading(true)
    setError('')
    setLink('')
    setFileName(file.name)

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0)
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const code = jsQR(imageData.data, imageData.width, imageData.height)

        if (code) {
          setLink(code.data)
        } else {
          setError('No QR code found in image.')
        }
        setLoading(false)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }

  const onButtonClick = () => {
    fileInputRef.current.click()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    // Could add a toast here, but simple alert or button text change is fine for MVP
    const btn = document.getElementById('copy-btn')
    const originalText = btn.innerText
    btn.innerText = 'Copied!'
    setTimeout(() => {
        btn.innerText = originalText
    }, 2000)
  }

  return (
    <div className="app-container">
      <div className="hero">
        <h1>QR to <span className="gradient-text">Link</span></h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Instantly decode QR codes into clickable links.
        </p>
      </div>

      <div 
        className={`glass-panel upload-area ${dragActive ? 'dragging' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <div className="upload-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
        </div>
        <p className="upload-text">
            Drug & Drop or <span style={{color: 'var(--accent-primary)', fontWeight: 'bold'}}>Click to Upload</span>
        </p>
        <p style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem'}}>
            Supports PNG, JPG, GIF. You can also Paste (Ctrl+V).
        </p>
        <input 
          ref={fileInputRef}
          type="file" 
          className="hidden-input" 
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {loading && <p>Scanning...</p>}

      {error && (
        <div className="error-msg">
            {error}
        </div>
      )}

      {link && (
        <div className="glass-panel result-area">
          <div className="result-content">
            <h3 style={{margin: 0}}>Decoded Link:</h3>
            <div className="link-display">
                {link}
            </div>
            <div className="actions">
                <button id="copy-btn" onClick={copyToClipboard}>Copy Link</button>
                <a href={link} target="_blank" rel="noreferrer" style={{flex: 1, textDecoration: 'none'}}>
                    <button className="btn-primary" style={{width: '100%'}}>Open Link</button>
                </a>
            </div>
          </div>
        </div>
      )}

      <footer style={{marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
        <p>© 2026 QR2Link. Runs entirely in your browser.</p>
      </footer>
    </div>
  )
}

export default App
