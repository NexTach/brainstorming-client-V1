import React from 'react';
import Navigation from '../../../widgets/navigation/Index';

const Index = () => {
  return (
    <div>
      <Navigation
        role={
          localStorage.getItem('role') === 'ROLE_PROTECTOR'
            ? 'protector'
            : 'protege'
        }
        selectedIcon={'profile'}
      />
    </div>
  );
};

export default Index;
