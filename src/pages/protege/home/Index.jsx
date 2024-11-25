import React from 'react';
import Navigation from '../../../widgets/navigation/Index';
import UI from './UI';

const Index = () => {
  return (
    <div>
      <UI />
      <Navigation
        role={
          localStorage.getItem('role') === 'ROLE_PROTECTOR'
            ? 'protector'
            : 'protege'
        }
        selectedIcon={'home'}
      />
    </div>
  );
};

export default Index;
