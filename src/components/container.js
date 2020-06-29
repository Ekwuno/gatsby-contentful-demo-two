import React from 'react'

export default ({ children }) => (
  <div 
  style={{ 
    Width: 2000,
    margin: '0 auto', 
    backgroundColor: 'var(--bg)',
    color: 'var(--textNormal)',
    transition: 'color 0.2s ease-out,background 0.2s ease-out',
  }}>
    
    {children}
    
    </div>
)
