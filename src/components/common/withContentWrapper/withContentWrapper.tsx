import { ComponentType } from 'react';

const withContentWrapper = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithWrapper = (props: P) => (
    <div style={{ margin: '0 100px' }}>
      <WrappedComponent {...props} />
    </div>
  );

  ComponentWithWrapper.displayName = `WithContentWrapper(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithWrapper;
};

export default withContentWrapper;
