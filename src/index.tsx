import { useState } from 'react';
import { Splash } from './screens/Splash';
import { Home } from './screens/Home';

export default function Index() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    splashComplete
      ? <Home />
      : <Splash onComplete={setSplashComplete} />
  );
}
