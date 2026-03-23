import { useState } from 'react';
import TemperatureInp from './TemperatureInp';

function TemperatureConver() {
  const [celsius, setCelsius] = useState('');

  return (
    <div>
      <TemperatureInp
        temperature={celsius}
        onTemperatureChange={setCelsius}
      />
      <p>
        {celsius
          ? `La température saisie est : ${celsius} °C`
          : 'saisie une température'}
      </p>

    </div>
  );
}

export default TemperatureConver;
