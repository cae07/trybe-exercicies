// Header
// O Header contém duas propriedades: o tipo do token, que é JWT, 
// e o tipo do algoritmo de hash , como HMAC-SHA256 ou RSA :

{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload (dados do usuário)
// Esta é a segunda parte do token, que contém os "dados". 
// Esses "dados" são declarações sobre uma entidade (geralmente, o usuário):

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

// Signature
// Para gerar a assinatura, você deve usar o header e o payload codificados
// em base64 , usando o algoritmo definido no header:
// Código de exemplo:

import { hmac } from 'bibliotecaDeHmac';

function base64 (string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT'});

const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true});

const secret = 'MinhaSenhaMuitoComplexa123';

const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);

const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;

// O resultado terá a seguinte estrutura:
// (Header em base64).(Payload em base64).(Signature em base64)