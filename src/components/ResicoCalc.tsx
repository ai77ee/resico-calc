import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './ResicoCalc.css';

interface Results {
  subtotal: number;
  iva: number;
  isr: number;
}

const TAX_RATES = {
  IVA: 0.16,
  ISR: 0.0125,
  TOTAL_RATE: 1.1475
};

const calculateResultResico = (value: number): Results => {
  const subtotal = value / TAX_RATES.TOTAL_RATE;
  const iva = subtotal * TAX_RATES.IVA;
  const isr = subtotal * TAX_RATES.ISR;

  return {
    subtotal: Number(subtotal.toFixed(3)),
    iva: Number(iva.toFixed(3)),
    isr: Number(isr.toFixed(3)),
  };
};

const calculateResultNormal = (value: number): Results => {
  const subtotal = value / (1 + TAX_RATES.IVA);
  const iva = subtotal * TAX_RATES.IVA;
  const isr = 0; // No ISR para tipo normal

  return {
    subtotal: Number(subtotal.toFixed(3)),
    iva: Number(iva.toFixed(3)),
    isr: Number(isr.toFixed(3)),
  };
};

const Snackbar = ({ message }: { message: string | null }) => (
  message && <div className="snackbar">{message}</div>
);

const ResicoCalc = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [results, setResults] = useState<Results>({ subtotal: 0, iva: 0, isr: 0 });
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [tipo, setTipo] = useState<'resico' | 'normal'>('resico');

  const handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value === '') {
      setInputValue('');
      setResults({ subtotal: 0, iva: 0, isr: 0 });
      return;
    }

    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setInputValue(numericValue);
      setResults(tipo === 'resico' ? calculateResultResico(numericValue) : calculateResultNormal(numericValue));
    }
  };

  const handleClearInput = () => {
    if (inputValue === '') return;
    setInputValue('');
    setResults({ subtotal: 0, iva: 0, isr: 0 });
  };

  const copyToClipboard = async (value: number) => {
    try {
      await navigator.clipboard.writeText(value.toString());
      setSnackbarMessage(`Se copió ${value.toString()} al portapapeles`);
    } catch (err) {
      setSnackbarMessage('Error al copiar al portapapeles');
    }
  };

  useEffect(() => {
    if (snackbarMessage) {
      const timer = setTimeout(() => setSnackbarMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbarMessage]);

  return (
    <div className="container">
      <div className="input-container">
        <h2>RESICO Calc</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="tipo"
              value="resico"
              checked={tipo === 'resico'}
              onChange={(e) => setTipo((e.target as HTMLInputElement).value as 'resico' | 'normal')}
            />
            RESICO
          </label>
          <label>
            <input
              type="radio"
              name="tipo"
              value="normal"
              checked={tipo === 'normal'}
              onChange={(e) => setTipo((e.target as HTMLInputElement).value as 'resico' | 'normal')}
            />
            Normal
          </label>
        </div>

        <label>
          Cantidad
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleClearInput}
            className="main-input"
          />
        </label>

        <label>
          Subtotal
          <input type="number" value={results.subtotal} readOnly />
          <button onClick={() => copyToClipboard(results.subtotal)}>Copiar</button>
        </label>

        <label>
          IVA
          <input type="number" value={results.iva} readOnly />
        </label>

        <label>
          ISR
          <input type="number" value={results.isr} readOnly />
        </label>
      </div>
      <Snackbar message={snackbarMessage} />
    </div>
  );
};

export default ResicoCalc;