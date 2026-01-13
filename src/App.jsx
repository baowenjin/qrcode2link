import { useState, useRef, useEffect } from 'react'
import jsQR from 'jsqr'
import './App.css'

const translations = {
  zh: {
    titlePrefix: '二维码转',
    titleGradient: '链接',
    subtitle: '即刻解码二维码，获取链接。',
    dragDrop: '拖拽图片到这里 或 ',
    clickUpload: '点击上传',
    pasteHintTitle: '💡 高效技巧',
    pasteHint: '无需保存图片！截图后直接按 Ctrl+V (或 Cmd+V) 即可粘贴识别。',
    scanning: '正在扫描...',
    errorImage: '请上传图片文件。',
    errorQR: '未能识别出二维码，请确保图片清晰。',
    decodedLink: '识别结果：',
    copy: '复制链接',
    copied: '已复制！',
    open: '打开链接',
    footer: '© 2026 QR2Link. 纯浏览器本地运行，数据不上传服务器。'
  },
  en: {
    titlePrefix: 'QR to ',
    titleGradient: 'Link',
    subtitle: 'Instantly decode QR codes into clickable links.',
    dragDrop: 'Drag & Drop or ',
    clickUpload: 'Click to Upload',
    pasteHintTitle: '💡 Pro Tip',
    pasteHint: 'No need to save! Just Screenshot & Paste (Ctrl+V / Cmd+V) directly.',
    scanning: 'Scanning...',
    errorImage: 'Please upload an image file.',
    errorQR: 'No QR code found in image.',
    decodedLink: 'Decoded Link:',
    copy: 'Copy Link',
    copied: 'Copied!',
    open: 'Open Link',
    footer: '© 2026 QR2Link. Runs entirely in your browser.'
  }
}

function App() {
  const [lang, setLang] = useState('zh')
  const t = translations[lang]

  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [, setFileName] = useState('') // Kept for potential future use
  const [copyBtnText, setCopyBtnText] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    setCopyBtnText(t.copy)
  }, [lang, t.copy])

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
      setError(t.errorImage)
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
          setError(t.errorQR)
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
    setCopyBtnText(t.copied)
    setTimeout(() => {
      setCopyBtnText(t.copy)
    }, 2000)
  }

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh')
  }

  return (
    <div className="app-container">
      <div className="lang-switch">
        <button onClick={toggleLang} className="lang-btn">
          {lang === 'zh' ? 'English' : '中文'}
        </button>
      </div>

      <div className="hero">
        <h1>{t.titlePrefix}<span className="gradient-text">{t.titleGradient}</span></h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {t.subtitle}
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
          {t.dragDrop}<span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t.clickUpload}</span>
        </p>

        <div className="paste-hint-box">
          <strong>{t.pasteHintTitle}</strong>: {t.pasteHint}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden-input"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {loading && <p>{t.scanning}</p>}

      {error && (
        <div className="error-msg">
          {error}
        </div>
      )}

      {link && (
        <div className="glass-panel result-area">
          <div className="result-content">
            <h3 style={{ margin: 0 }}>{t.decodedLink}</h3>
            <div className="link-display">
              {link}
            </div>
            <div className="actions">
              <button id="copy-btn" onClick={copyToClipboard}>{copyBtnText}</button>
              <a href={link} target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%' }}>{t.open}</button>
              </a>
            </div>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
