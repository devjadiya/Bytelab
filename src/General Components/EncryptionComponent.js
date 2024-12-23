import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
function EncryptionDecryptionComponent() {
  const [plainText, setPlainText] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedText, setEncryptedText] = useState(''); j
  const [decryptedText, setDecryptedText] = useState('');
  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(plainText, password).toString();
    setEncryptedText(encrypted);
  };
  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/fcQ9XgEZpvj5AdGyJZGGkSmEU6Wr+WYM=", "sarthak_io1708164908071").toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    }
    catch (error) {
      console.error('Error decrypting:', error);
      setDecryptedText('Decryption failed');
    }
  };
  return (
    <div>
      <h2>Encryption and Decryption</h2>
      <label>        Plain Text:
        <input type="text" value={plainText}
          onChange={e => setPlainText(e.target.value)} />      </label>
      <label>        Password:
        <input type="password" value={password}
          onChange={e => setPassword(e.target.value)} />      </label>
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>      <div>
        <h3>Encrypted Text:</h3>        <p>{encryptedText}</p>      </div>
      <div>        <h3>Decrypted Text:</h3>
        <p>{decryptedText}</p>      </div>    </div>);
}
export default EncryptionDecryptionComponent;