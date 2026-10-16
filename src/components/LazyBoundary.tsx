import React from 'react';

interface LazyBoundaryProps {
  children: React.ReactNode;
}

interface LazyBoundaryState {
  failed: boolean;
}

/**
 * Lazy chunk yuklanmasa (sekin yoki uzilgan tarmoq) xato butun sahifani
 * o'chirmasin: bosh ekran ko'rinib qoladi, bo'limlar esa jim tashlab ketiladi.
 */
export class LazyBoundary extends React.Component<LazyBoundaryProps, LazyBoundaryState> {
  state: LazyBoundaryState = { failed: false };

  static getDerivedStateFromError(): LazyBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('Bo\'limni yuklab bo\'lmadi:', error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
