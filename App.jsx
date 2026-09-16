import React from 'react';
import { useState } from 'react';
import tokens from './tokens';
import ExampleCard from './components/ExampleCard';

function App() {
  const [count, setCount] = useState(0);
  
  const styles = {
    main: {
      padding: tokens.space[4],
      backgroundColor: tokens.color.background,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: tokens.font.body,
    },
    title: {
      color: tokens.color.foreground,
      fontSize: tokens.fontSize.h1,
      fontFamily: tokens.font.heading,
      marginBottom: tokens.space[4],
      textAlign: 'center',
    },
    button: {
      backgroundColor: tokens.color.accent,
      color: tokens.color.accentForeground,
      border: `${tokens.borderWidth} solid ${tokens.color.foreground}`,
      borderRadius: tokens.radius.sm,
      padding: `${tokens.space[2]} ${tokens.space[4]}`,
      fontSize: tokens.fontSize.body,
      fontWeight: tokens.weight.bodyMedium,
      cursor: 'pointer',
      boxShadow: tokens.shadow.pop,
      transition: `all ${tokens.motion.duration} ${tokens.motion.easeBounce}`,
    },
    buttonHover: {
      transform: 'translate(-2px, -2px)',
      boxShadow: tokens.shadow.popHover,
    },
    countDisplay: {
      marginTop: tokens.space[2],
      fontSize: tokens.fontSize.lead,
      color: tokens.color.mutedForeground,
      textAlign: 'center',
    },
    section: {
      maxWidth: '600px',
      width: '100%',
    }
  };

  return (
    <div style={styles.main}>
      <section style={styles.section}>
        <h1 style={styles.title}>Playful Geometric React App</h1>
        
        <div style={{ textAlign: 'center', marginBottom: tokens.space[8] }}>
          <button 
            style={styles.button}
            onClick={() => setCount((count) => count + 1)}
          >
            Click me!
          </button>
          <div style={styles.countDisplay}>
            Count: {count}
          </div>
        </div>
        
        <ExampleCard />
        
        <div style={{
          marginTop: tokens.space[8],
          padding: tokens.space[4],
          backgroundColor: tokens.color.muted,
          borderRadius: tokens.radius.sm,
          textAlign: 'center',
        }}>
          <p style={{
            color: tokens.color.mutedForeground,
            fontSize: tokens.fontSize.caption,
            margin: 0,
          }}>
            This app demonstrates the Playful Geometric design system with reusable tokens.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
