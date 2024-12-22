# RECOMPAK - A LIGHTWEIGHT COMPONENT LIBRARY FOR REACT

ReCOMPAK is a lightweight and easy to use component library written for modern React projects. Enjoy!

## Installation

To use the `Button` component, first install it from your npm package:

```bash
npm install @malishaap/recompak
```

## 1. Button
### Usage

Import the `Button` component into your project and use it as needed:

```tsx
import React from 'react';
import { Button } from '@malishaap/recompak';

const App = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <Button onClick={handleClick} variant="primary">
                Click Me
            </Button>
        </div>
    );
};

export default App;
```

## 2. Toggle Button
### Usage

Import the `ToggleButton` component into your project and use it as needed:

```tsx
import React from 'react';
import { ToggleButton } from '@malishaap/recompak';

const App: React.FC = () => {
    const handleToggle = (isChecked: boolean) => {
        console.log('Checkbox is now:', isChecked ? 'Checked' : 'Unchecked');
    };

    return <ToggleButton onToggle={handleToggle} variant="primary" />;
};

export default App;
```
