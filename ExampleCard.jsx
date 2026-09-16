import React from 'react';
import tokens from '../tokens';

/**
 * ExampleCard Component
 * 
 * This component demonstrates how to use the Playful Geometric design tokens
 * to create consistent UI components with the design system.
 */
const ExampleCard = () => {
  const styles = {
    card: {
      backgroundColor: tokens.color.card,
      border: `${tokens.borderWidth} solid ${tokens.color.border}`,
      borderRadius: tokens.radius.md,
      padding: tokens.space[6],
      margin: `${tokens.space[4]} 0`,
      boxShadow: tokens.shadow.sticker,
      maxWidth: '500px',
      transition: `transform ${tokens.motion.duration} ${tokens.motion.easeBounce}, 
                  box-shadow ${tokens.motion.duration} ${tokens.motion.easeBounce}`,
    },
    cardHeader: {
      fontFamily: tokens.font.heading,
      fontSize: tokens.fontSize.h3,
      color: tokens.color.foreground,
      margin: `0 0 ${tokens.space[2]}`,
    },
    cardContent: {
      fontSize: tokens.fontSize.body,
      color: tokens.color.mutedForeground,
      lineHeight: '1.6',
      marginBottom: tokens.space[4],
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
    },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardHeader}>Design System Card</h2>
      <p style={styles.cardContent}>
        This card is built using the Playful Geometric design tokens. 
        All values like colors, spacing, and typography come from the centralized token system.
      </p>
      <button style={styles.button}>Example Button</button>
    </div>
  );
};

export default ExampleCard;
