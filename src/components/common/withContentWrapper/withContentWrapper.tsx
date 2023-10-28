import React, { ComponentType } from 'react';

const withContentWrapper = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => (
    <div style={{ margin: '0 100px' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withContentWrapper;
