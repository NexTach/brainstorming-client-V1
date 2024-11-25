import React from 'react';
import Navigation from '../../../widgets/navigation/Index';
import UI from './UI';

const Index = () => {
  return (
    <div>
      <UI />
      <Navigation role="protege" selectedIcon={'home'} />
    </div>
  );
};

export default Index;
