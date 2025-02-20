'use client';

import React, { useState } from 'react';
import cn from 'classnames';

import { Button } from '@/components/Button';
import { LockScroll } from '@/components/LockScroll';
import BurgerIcon from '@/images/icons/burder-menu.svg';
import CloseIcon from '@/images/icons/close.svg';

import styles from './Sidebar.module.css';

interface iProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ children }: iProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        className={cn(styles.menuButton, isOpen && styles.closeButton)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <CloseIcon width={24} height={24} />
        ) : (
          <BurgerIcon width={24} height={24} />
        )}
      </Button>

      {isOpen && <LockScroll />}
      <div
        className={cn(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={() => setIsOpen(false)}
      />
      <div className={cn(styles.sidebar, isOpen && styles.sidebarVisible)}>
        {children}
      </div>
    </>
  );
}
